import { Assignment, File } from "../../../models";
import Sequelize from "sequelize";
const Op = Sequelize.Op;

async function parseAssignment(req) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    const templateObj = await File.create({
      name: path.basename(files.template.name),
      path: files.template.path,
      type: "Template",
    });
    const testObj = await File.create({
      name: path.basename(files.testFile.name),
      path: files.testFile.path,
      type: "TestFile",
    });
    
    // TODO: Create Submission File
    const assignment = await Assignment.create(fields);

    await AssignmentFile.create({assignmentId: assignment.id, fileId: templateObj.id})
    await AssignmentFile.create({assignmentId: assignment.id, fileId: testObj.id})

    console.log(err, fields, files);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ err, ...assignment }));
  });
}

export default function handler(req, res) {
  if (req.method === "POST") {
    parseAssignment(req);
  } else if (req.method === "GET") {
    // TODO: file objects too
    return Assignment.findAll({ include: { model: File } });
  } else {
    // Handle any other HTTP method
  }
}
