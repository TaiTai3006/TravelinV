'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const province = require('./province');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    idPost: DataTypes.STRING,
    idProvince: DataTypes.STRING,
    dateTime: DataTypes.STRING,
    image: DataTypes.STRING,
    like: DataTypes.STRING,
    demoDescription: DataTypes.STRING,
    status: DataTypes.STRING,
    postName: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });

  return post;
};