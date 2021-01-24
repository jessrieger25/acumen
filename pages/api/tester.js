import { useRouter } from "next/router";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { v4 } from "uuid";
import neatCsv from "neat-csv";
import {
  Test,
  File,
  Assignment,
  Submission,
  AssignmentFile,
} from "../../models";
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
  // Get
  // const fileObj = await File.create({
  //   name: "test",
  //   path: "here",
  //   type: "Submission",
  // });
  // TODO: Create Submission
  const assignment = await Assignment.findByPk(1, {
    include: { model: AssignmentFile },
  });
  console.log(assignment);
  // await SubmissionFile.create({
  //   fileId: fileObj.id,
  //   submissionId: submissionObj.id,
  // });
};
