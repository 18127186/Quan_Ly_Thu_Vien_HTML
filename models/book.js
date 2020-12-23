'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.Comment)
      // define association here
    }
  };
  Book.init({
    tensach: DataTypes.STRING,
    tentacgia: DataTypes.STRING,
    theloai: DataTypes.STRING,
    soluong: DataTypes.INTEGER,
    ngaynhap: DataTypes.STRING,
    image: DataTypes.STRING,
    mota: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};