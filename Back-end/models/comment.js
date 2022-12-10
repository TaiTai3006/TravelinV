'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const province = require('./province');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment.init({
    idComment: DataTypes.STRING,
    userName: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    idPost: DataTypes.STRING,
    dateTime: DataTypes.TIMESTAMP,
  }, {
    sequelize,
    modelName: 'comment',
  });

  return comment;
};