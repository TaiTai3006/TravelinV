'use strict';

const sequelize = require('sequelize');
const descriptionPost = require('../models/descriptionPost');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('description', {
      idDes: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idPost: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image1: {
        type: Sequelize.STRING
      },
      image2: {
        type: sequelize.STRING
      },
      description: {
        type: sequelize.STRING
      },
      title: {
        type: sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('description');
  }
};