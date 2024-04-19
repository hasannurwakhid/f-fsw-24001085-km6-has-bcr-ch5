"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class manufacture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      manufacture.hasMany(models.car, { foreignKey: "manufacture_id" });

      manufacture.belongsTo(models.user, { foreignKey: "createdBy" });
      manufacture.belongsTo(models.user, { foreignKey: "deletedBy" });
      manufacture.belongsTo(models.user, { foreignKey: "updatedBy" });
    }
  }
  manufacture.init(
    {
      name: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "manufacture",
      paranoid: true,
    }
  );
  return manufacture;
};
