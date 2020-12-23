'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tensach: {
        type: Sequelize.STRING
      },
      tentacgia: {
        type: Sequelize.STRING
      },
      theloai: {
        type: Sequelize.STRING
      },
      soluong: {
        type: Sequelize.INTEGER
      },
      ngaynhap: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      mota: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Books');
  }
};