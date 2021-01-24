import { useRouter } from "next/router";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { v4 } from "uuid";
import neatCsv from "neat-csv";
import { Test, File, Assignment, Submission, SubmissionFile } from "../../models";
const fsPromises = fs.promises;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function test(testFile, subFile) {
  testFile = path.resolve(testFile);
  subFile = path.resolve(subFile);

  const tempDir = path.resolve(
    `./public/tmp/${new Date().toISOString()}/${v4()}`
  );

  const newTestPath = `${tempDir}/${path.parse(testFile).base}`;
  const newSubPath = `${tempDir}/${path.parse(subFile).base}`;

  await fs.mkdirSync(tempDir, { recursive: true });

  await fsPromises.copyFile(testFile, newTestPath);

  await fsPromises.copyFile(subFile, newSubPath);

  const python = spawn("sh", [
    "public/runner/testRunner.sh",
    newTestPath,
    newSubPath,
    tempDir,
  ]);
  // collect data from script
  let dataToSend;
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  python.stderr.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    const outputPath = `${tempDir}/output.csv`;
    fs.readFile(outputPath, async (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const csvData = await neatCsv(data);
      const counts = csvData.reduce(function (obj, testResult) {
        if (testResult["status"] === "passed") {
          obj["passed"] = 1;
        } else {
          obj["failed"]++;
        }
        return obj;
      }, {});
      Test.create(counts);
    });

    return Promise.resolve(dataToSend);
    // send data to browser
  });
}

export default async (req, res) => {
  // Get info about assignment
  const router = useRouter();
  const { id } = router.query;

  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    // TODO: Create Submission File
    const fileObj = await File.create({
      name: path.basename(files.file.name),
      path: files.file.path,
      type: "Submission",
    });
    // TODO: Create Submission
    const submissionObj = await Submission.create({assignmentId: id, completed: true});
    SubmissionFile.create({submissionId: submissionObj.id, fileId: fileObj.id})
    
    // TODO: Associate Submission with File
    AssignmentFile.create({assignmentId: id, fileId: fileObj.id})

    console.log(err, fields, files);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ err, fields, files }));
  });
};
