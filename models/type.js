"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      type.hasMany(models.car, { foreignKey: "type_id" });

      type.belongsTo(models.user, { foreignKey: "createdBy" });
      type.belongsTo(models.user, { foreignKey: "deletedBy" });
      type.belongsTo(models.user, { foreignKey: "updatedBy" });
    }
  }
  type.init(
    {
      name: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "type",
      paranoid: true,
    }
  );
  return type;
};
