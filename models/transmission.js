"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transmission.hasMany(models.car, { foreignKey: "transmission_id" });

      transmission.belongsTo(models.user, { foreignKey: "createdBy" });
      transmission.belongsTo(models.user, { foreignKey: "deletedBy" });
      transmission.belongsTo(models.user, { foreignKey: "updatedBy" });
    }
  }
  transmission.init(
    {
      name: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transmission",
      paranoid: true,
    }
  );
  return transmission;
};
