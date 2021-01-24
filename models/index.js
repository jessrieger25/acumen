"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

import File from "./file";
import Assignment from "./assignment";
import AssignmentFile from "./assignmentfile";
import Submission from "./submission";

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.File = File(sequelize, Sequelize);
db.Assignment = Assignment(sequelize, Sequelize);
db.AssignmentFile = AssignmentFile(sequelize, Sequelize);

db.Submission = Submission(sequelize, Sequelize);

db.Assignment.associate(db);
db.AssignmentFile.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
