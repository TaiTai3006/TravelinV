'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const province = require('./province');
module.exports = (sequelize, DataTypes) => {
  class reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reply.init({
    idReply: DataTypes.STRING,
    idComment: DataTypes.STRING,
    userName: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    dateTime: DataTypes.TIMESTAMP,
  }, {
    sequelize,
    modelName: 'reply',
  });

  return reply;
};