"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class spec_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      spec_transaction.belongsTo(models.spec, { foreignKey: "spec_id" });
      spec_transaction.belongsTo(models.car, { foreignKey: "car_id" });

      spec_transaction.belongsTo(models.user, { foreignKey: "createdBy" });
      spec_transaction.belongsTo(models.user, { foreignKey: "deletedBy" });
      spec_transaction.belongsTo(models.user, { foreignKey: "updatedBy" });
    }
  }
  spec_transaction.init(
    {
      car_id: DataTypes.INTEGER,
      spec_id: DataTypes.INTEGER,
      createdBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "spec_transaction",
      paranoid: true,
    }
  );
  return spec_transaction;
};
