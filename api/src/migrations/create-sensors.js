"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
      // Product belongsToMany Tag
      return queryInterface.createTable("Sensors", {
        type: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        description: {
          type: Sequelize.STRING(3000),
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
      // remove table
      return queryInterface.dropTable("Sensors");
    }
  };