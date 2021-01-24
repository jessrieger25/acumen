"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubmissionFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubmissionFile.init(
    {},
    {
      sequelize,
      modelName: "SubmissionFile",
    }
  );

  SubmissionFile.associate = (models) => {
    SubmissionFile.belongsTo(models.Submission, {
      foreignKey: "submissionId",
    });
    SubmissionFile.belongsTo(models.File, {
      foreignKey: "fileId",
    });
  };
  return SubmissionFile;
};
