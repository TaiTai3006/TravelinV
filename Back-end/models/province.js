'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  province.init({
    idProvince: DataTypes.String,
    provinceName: DataTypes.String,
    image: DataTypes.String
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};