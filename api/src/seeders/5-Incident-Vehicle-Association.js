"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("IncidentsVehicles", [
        {
            "vehicleId": 1,
            "incidentId": 1,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "vehicleId": 2,
            "incidentId": 2,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
          "vehicleId": 3,
          "incidentId": 3,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 4,
          "incidentId": 4,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 3,
          "incidentId": 5,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 6,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 2,
          "incidentId": 7,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 8,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 2,
          "incidentId": 9,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 10,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 6,
          "incidentId": 11,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 12,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 13,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 8,
          "incidentId": 15,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 16,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 17,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 18,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 19,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 20,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 21,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 22,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 7,
          "incidentId": 23,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 5,
          "incidentId": 24,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 9,
          "incidentId": 25,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "vehicleId": 10,
          "incidentId": 26,
          "createdAt": new Date(),
          "updatedAt": new Date()
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