import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { v4 } from "uuid";
import neatCsv from "neat-csv";
import { Test } from "../../models";
const fsPromises = fs.promises;

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
  res.end();
  test(req.body.testFile, req.body.subFile);
};
