"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Vehicles", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      registration: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      vin: {
          type: Sequelize.STRING
      },
      make: {
          type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      oem: {
        type: Sequelize.STRING
      },
      yearOfManufacture: {
          type: Sequelize.INTEGER
      },
      countryOfManufacture: {
        type: Sequelize.STRING
      },
      autonomyLevel: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Vehicles");
  }
};