'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('province', {
      idProvince: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      provinceName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      describe: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('province');
  }
};