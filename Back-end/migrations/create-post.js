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
        allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      image: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      demoDescription: {
        type: Sequelize.TEXT('long')
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
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