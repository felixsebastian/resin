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
        type: Sequelize.STRING(5000)
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
      streetType : {
        type: Sequelize.STRING
      },
      speedLimit: {
        type: Sequelize.INTEGER
      },
      schoolZone: {
        type: Sequelize.BOOLEAN
      },
      apparentTemperature: Sequelize.FLOAT,
      cloudCover: Sequelize.FLOAT,
      dewPoint: Sequelize.FLOAT,
      humidity: Sequelize.FLOAT,
      ozone: Sequelize.FLOAT,
      precipIntensity: Sequelize.FLOAT,
      precipProbability: Sequelize.FLOAT,
      precipType: Sequelize.STRING,
      pressure: Sequelize.FLOAT,
      summary: Sequelize.STRING,
      temperature: Sequelize.FLOAT,
      uvIndex: Sequelize.FLOAT,
      visibility: Sequelize.FLOAT,
      windBearing: Sequelize.FLOAT,
      windGust: Sequelize.FLOAT,
      windSpeed: Sequelize.FLOAT,
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