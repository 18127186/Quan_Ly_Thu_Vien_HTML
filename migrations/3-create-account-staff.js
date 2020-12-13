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
        type: Sequelize.DATE
      },
      cmnd: {
        type: Sequelize.STRING
      },
      gioitinh: {
        type: Sequelize.STRING
      },
      dantoc: {
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