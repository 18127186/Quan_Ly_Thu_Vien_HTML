'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BookManages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Books',
          key: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      AccountId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Accounts',
          key: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      tensach: {
        type: Sequelize.STRING
      },
      tentacgia: {
        type: Sequelize.STRING
      },
      tendocgia: {
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
    await queryInterface.dropTable('BookManages');
  }
};