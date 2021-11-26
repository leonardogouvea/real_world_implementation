'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', { 
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('tags');
    
  }
};
