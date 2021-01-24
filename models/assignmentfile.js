"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AssignmentFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssignmentFile.init(
    {},
    {
      sequelize,
      modelName: "AssignmentFile",
    }
  );

  AssignmentFile.associate = (models) => {
    AssignmentFile.belongsTo(models.Assignment, {
      foreignKey: "assignmentId",
    });
    AssignmentFile.belongsTo(models.File, {
      foreignKey: "fileId",
    });
  };
  return AssignmentFile;
};
