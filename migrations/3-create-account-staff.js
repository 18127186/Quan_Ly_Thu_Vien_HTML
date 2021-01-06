'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Account_staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hoten: {
        type: Sequelize.STRING
      },
      ngaysinh: {
        type: Sequelize.STRING
      },
      cmnd: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      gioitinh: {
        type: Sequelize.STRING
      },
      dantoc: {
        type: Sequelize.STRING
      },
      ngaylap: {
        type: Sequelize.STRING
      },
      sdt: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.TEXT
      },
      sotiendatcoc: {
        type: Sequelize.STRING
      },
      nguoilap: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Account_staffs');
  }
};