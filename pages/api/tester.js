import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { v4 } from "uuid";
import neatCsv from "neat-csv";
import { Test } from "../../models";
const fsPromises = fs.promises;

export default async (req, res) => {
  res.end();
  test(req.body.testFile, req.body.subFile);
};
