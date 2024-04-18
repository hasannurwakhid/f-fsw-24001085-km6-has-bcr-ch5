'use strict';
const {
  Model
} = require('sequelize');
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
    }
  }
  type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type',
    paranoid: true
  });
  return type;
};