// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import fs from "fs";
import { v4 } from "uuid";
import { spawn } from "child_process";
function tester(req) {
  const testFile = path.resolve(req.testFile);
  const subFile = path.resolve(req.subFile);

  const tempDir = path.resolve(`./public/tmp/${v4()}/`);

  console.log(tempDir);

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
export default (req, res) => {
  const response = tester(req);
  // res.statusCode = 200;
  // res.json({ name: "John Doe" });
};

tester(
  {
    testFile: "./public/assignments/helloWorld/unittest_file.py",
    subFile: "./public/submissions/jess/hello_world_submission.py",
  },
  {}
);
