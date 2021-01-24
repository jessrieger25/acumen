"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Submission.init(
    {
      assignmentId: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
      grade: DataTypes.STRING,
      passed: DataTypes.INTEGER,
      failed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Submission",
    }
  );

  Submission.associate = (models) => {
    Submission.hasOne(models.File);
  };
  return Submission;
};
