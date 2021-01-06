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
      BookManage.belongsTo(models.Book,{onDelete:'cascade',hooks:true})
      BookManage.belongsTo(models.Account,{onDelete:'cascade',hooks:true})
    }
  };
  BookManage.init({
    BookId: DataTypes.INTEGER,
    AccountId: DataTypes.INTEGER,
    tensach: DataTypes.STRING,
    tentacgia: DataTypes.STRING,
    tendocgia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookManage',
  });
  return BookManage;
};