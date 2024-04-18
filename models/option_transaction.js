"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class option_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      option_transaction.belongsTo(models.option, { foreignKey: "option_id" });
      option_transaction.belongsTo(models.car, { foreignKey: "car_id" });
    }
  }
  option_transaction.init(
    {
      car_id: DataTypes.INTEGER,
      option_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "option_transaction",
      paranoid: true,
    }
  );
  return option_transaction;
};
