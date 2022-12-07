'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('like', {
      idPost: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      userName: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('like');
  }
};