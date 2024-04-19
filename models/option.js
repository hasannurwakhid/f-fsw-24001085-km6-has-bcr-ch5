"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      option.hasMany(models.option_transaction, { foreignKey: "option_id" });

      option.belongsTo(models.user, { foreignKey: "createdBy" });
      option.belongsTo(models.user, { foreignKey: "deletedBy" });
      option.belongsTo(models.user, { foreignKey: "updatedBy" });
    }
  }
  option.init(
    {
      name: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "option",
      paranoid: true,
    }
  );
  return option;
};
