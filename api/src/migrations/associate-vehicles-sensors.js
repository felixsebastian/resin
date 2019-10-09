"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
      // Product belongsToMany Tag
      return queryInterface.createTable("VehiclesSensors", {
        vehicleReg: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        sensorType: {
          type: Sequelize.STRING,
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
      return queryInterface.dropTable("VehiclesSensors");
    }
  };