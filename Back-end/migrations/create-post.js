'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      idPost: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idProvince: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateTime: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.STRING
      },
      demoDescription: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      postName: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  }
};