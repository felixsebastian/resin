"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
      // Product belongsToMany Tag
      return queryInterface.createTable("IncidentsVehicles", {
        vehicleId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        incidentId: {
          type: Sequelize.INTEGER,
          primaryKey: true
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
      return queryInterface.dropTable("IncidentsVehicles");
    }
  };