"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // type: Sequelize.UUID,
        defaultValue: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // manufactur_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: manufactures
      //     },
      //     key: id
      //   }
      // },
      image: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      rent_day: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      // transmission_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "transmissions",
      //     },
      //     key: "id",
      //   },
      // },
      // type_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cars");
  },
};
