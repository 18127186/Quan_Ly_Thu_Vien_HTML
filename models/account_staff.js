'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account_staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account_staff.init({
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.STRING,
    cmnd: DataTypes.STRING,
    pass:DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    dantoc: DataTypes.STRING,
    ngaylap:DataTypes.STRING,
    sdt: DataTypes.STRING,
    email: DataTypes.STRING,
    diachi: DataTypes.TEXT,
    sotiendatcoc: DataTypes.STRING,
    nguoilap: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account_staff',
  });
  return Account_staff;
};