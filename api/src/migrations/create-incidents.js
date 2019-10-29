"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Incidents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timestamp: {
        type: Sequelize.INTEGER
      },
      latitude: {
          type: Sequelize.FLOAT
      },
      longitude: {
          type: Sequelize.FLOAT
      },
      numVehicles: {
        type: Sequelize.INTEGER
      },
      damageSeverity: {
          type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      dca: {
          type: Sequelize.INTEGER
      },
      weatherDesc: {
        type: Sequelize.STRING
      },
      mode: {
        type: Sequelize.STRING
      },
      speedLimit: {
        type: Sequelize.INTEGER
      },
      apparentTemperature: {
        type: Sequelize.FLOAT
      },
      cloudCover: {
        type: Sequelize.FLOAT
      },
      dewPoint: {
        type: Sequelize.FLOAT
      },
      humidity: {
        type: Sequelize.FLOAT
      },
      ozone: {
        type: Sequelize.FLOAT
      },
      precipIntensity: {
        type: Sequelize.FLOAT
      },
      precipProbability: {
        type: Sequelize.FLOAT
      },
      precipType: {
        type: Sequelize.STRING
      },
      pressure: {
        type: Sequelize.FLOAT
      },
      summary: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.FLOAT
      },
      uvIndex: {
        type: Sequelize.FLOAT
      },
      visibility: {
        type: Sequelize.FLOAT
      },
      windBearing: {
        type: Sequelize.FLOAT
      },
      windGust: {
        type: Sequelize.FLOAT
      },
      windSpeed: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable("Incidents");
  }
};

/*
Associate-categories-locations.js
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable("CategoriesLocations", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      locationId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("CategoriesLocations");
  }
};
*/