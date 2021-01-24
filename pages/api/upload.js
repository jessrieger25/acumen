import formidable from "formidable";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { v4 } from "uuid";

export const config = {
  api: {
    bodyParser: false,
  },
};

function test(testFile, subFile) {
  testFile = path.resolve(testFile);
  subFile = path.resolve(subFile);

  const tempDir = path.resolve(`./public/tmp/${new Date().toISOString()}/`);

  const newTestPath = `${tempDir}/${path.parse(testFile).base}`;
  const newSubPath = `${tempDir}/${path.parse(subFile).base}`;

  fs.mkdir(tempDir, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });

  fs.copyFile(testFile, newTestPath, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Successfully copied and moved the file!");
    }
  });

  fs.copyFile(subFile, newSubPath, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Successfully copied and moved the file!");
    }
  });

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
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
  });

  return dataToSend;
}

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ err, fields, files }));
  });
};

test(
  "./public/assignments/helloWorld/unittest_file.py",
  "./public/submissions/jess/hello_world_submission.py"
);
