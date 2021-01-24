import { Assignment, File } from "../../models";
import Sequelize from "sequelize";
const Op = Sequelize.Op;

export default function handler(req, res) {
  if (req.method === "POST") {
    return Assignment.create(req.body);
  } else if (req.method === "GET") {
    return Assignment.findAll();
  } else {
    // Handle any other HTTP method
  }
}
