'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.BookManage)
      // define association here
    }
  };
  Account.init({
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.STRING,
    cmnd: DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    dantoc: DataTypes.STRING,
    ngaylap: DataTypes.STRING,
    sdt: DataTypes.STRING,
    email: DataTypes.STRING,
    diachi: DataTypes.TEXT,
    sotiendatcoc: DataTypes.STRING,
    nguoilap: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};