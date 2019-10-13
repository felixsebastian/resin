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
            vehicleId: "1",
            incidentId: "2",
            createdAt: new Date(),
            updatedAt: new Date()
        }
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