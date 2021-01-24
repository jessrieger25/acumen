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
import Submission from "./submission";
import Test from "./test";

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
db.Submission = Submission(sequelize, Sequelize);
db.Test = Test(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
