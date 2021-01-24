"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assignment.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      submissionsAllowed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Assignment",
    }
  );

  Assignment.associate = (models) => {
    Assignment.belongsToMany(models.File, { through: "AssignmentFiles" });
  };
  return Assignment;
};
