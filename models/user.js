"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.car, { foreignKey: "createdBy" });
      user.hasMany(models.car, { foreignKey: "deletedBy" });
      user.hasMany(models.car, { foreignKey: "updatedBy" });

      user.hasMany(models.transmission, { foreignKey: "createdBy" });
      user.hasMany(models.transmission, { foreignKey: "deletedBy" });
      user.hasMany(models.transmission, { foreignKey: "updatedBy" });

      user.hasMany(models.type, { foreignKey: "createdBy" });
      user.hasMany(models.type, { foreignKey: "deletedBy" });
      user.hasMany(models.type, { foreignKey: "updatedBy" });

      user.hasMany(models.manufacture, { foreignKey: "createdBy" });
      user.hasMany(models.manufacture, { foreignKey: "deletedBy" });
      user.hasMany(models.manufacture, { foreignKey: "updatedBy" });

      user.hasMany(models.option, { foreignKey: "createdBy" });
      user.hasMany(models.option, { foreignKey: "deletedBy" });
      user.hasMany(models.option, { foreignKey: "updatedBy" });

      user.hasMany(models.spec, { foreignKey: "createdBy" });
      user.hasMany(models.spec, { foreignKey: "deletedBy" });
      user.hasMany(models.spec, { foreignKey: "updatedBy" });

      user.hasMany(models.option_transaction, { foreignKey: "createdBy" });
      user.hasMany(models.option_transaction, { foreignKey: "deletedBy" });
      user.hasMany(models.option_transaction, { foreignKey: "updatedBy" });

      user.hasMany(models.spec_transaction, { foreignKey: "createdBy" });
      user.hasMany(models.spec_transaction, { foreignKey: "deletedBy" });
      user.hasMany(models.spec_transaction, { foreignKey: "updatedBy" });
    }
  }
  user.init(
    {
      email: {
        unique: true,
        type: DataTypes.STRING,
      },
      password: DataTypes.TEXT,
      name: DataTypes.STRING,
      photo: DataTypes.TEXT,
      role: DataTypes.ENUM("superadmin", "admin", "user"),
    },
    {
      sequelize,
      modelName: "user",
      paranoid: true,
    }
  );
  return user;
};
