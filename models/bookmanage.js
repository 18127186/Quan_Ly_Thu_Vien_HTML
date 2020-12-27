'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookManage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookManage.init({
    idBook: DataTypes.STRING,
    idDocGia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookManage',
  });
  return BookManage;
};