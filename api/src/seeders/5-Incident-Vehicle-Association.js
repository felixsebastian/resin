"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("IncidentsVehicles", [
        {
            vehicleId: "1",
            incidentId: "1",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vehicleId: "2",
            incidentId: "2",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
          vehicleId: "3",
          incidentId: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "4",
          incidentId: "4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "3",
          incidentId: "5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "5",
          incidentId: "6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "2",
          incidentId: "7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "5",
          incidentId: "8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "2",
          incidentId: "9",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vehicleId: "5",
          incidentId: "10",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ]);
},

    down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    Example:
    return queryInterface.bulkDelete('Person', null, {});
  */
        return queryInterface.bulkDelete('IncidentsVehicles', null, {});
    }
};