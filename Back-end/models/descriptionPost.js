'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class description extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  description.init({
    idPost: DataTypes.STRING,
    idDes: DataTypes.STRING,
    description: DataTypes.STRING,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    titile: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'description',
  });
  return description;
};