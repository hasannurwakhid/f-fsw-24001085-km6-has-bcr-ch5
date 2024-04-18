"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        email: "hasannurwakhid.superadmin@gmail.com",
        password: bcrypt.hashSync("1345", 10),
        name: "Hasan Nur Wakhid_superadmin",
        photo: null,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hasannurwakhid.admin@gmail.com",
        password: bcrypt.hashSync("1345", 10),
        name: "Hasan Nur Wakhid_admin",
        photo: null,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hasannurwakhid.user@gmail.com",
        password: bcrypt.hashSync("1345", 10),
        name: "Hasan Nur Wakhid_user",
        photo: null,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
