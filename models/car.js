"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      car.belongsTo(models.transmission, { foreignKey: "transmission_id" });
      car.belongsTo(models.type, { foreignKey: "type_id" });
      car.belongsTo(models.manufacture, { foreignKey: "manufacture_id" });
      car.hasMany(models.option_transaction, { foreignKey: "car_id" });
      car.hasMany(models.spec_transaction, { foreignKey: "car_id" });
    }
  }
  car.init(
    {
      // id: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4 // Untuk mengisi kolom ID dengan UUID secara otomatis
      // },
      model: DataTypes.STRING,
      manufacture_id: DataTypes.INTEGER,
      image: DataTypes.TEXT,
      rent_day: DataTypes.BIGINT,
      description: DataTypes.TEXT,
      transmission_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      capacity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "car",
      paranoid: true,
    }
  );
  return car;
};
