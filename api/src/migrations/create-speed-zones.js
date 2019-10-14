"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("SpeedZones", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        limit: {
          type: Sequelize.INTEGER,
        },
        p1Latitude: {
          type: Sequelize.FLOAT,
        },
        p1Longitude: {
          type: Sequelize.FLOAT
        },
        p2Latitude: {
          type: Sequelize.FLOAT,
        },
        p2Longitude: {
          type: Sequelize.FLOAT
        }
      });
    },
  
    down: (queryInterface, Sequelize) => {
      // remove table
      return queryInterface.dropTable("SpeedZones");
    }
  };