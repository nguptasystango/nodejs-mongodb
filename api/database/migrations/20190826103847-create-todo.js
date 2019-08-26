'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      taskType: {
        type: Sequelize.STRING,
        trim: true,
        lowercase: true,
        enum: ['yearly', 'monthly', 'weekly'],
        allowNull: true
      }, 
      departmentType: {
        type: Sequelize.ARRAY(
          Sequelize.ENUM([
            'finance',
            'hr',
            'development' 
          ])
        ),
        allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Todos');
  }
};