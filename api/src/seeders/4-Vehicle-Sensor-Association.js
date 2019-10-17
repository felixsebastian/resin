"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("VehiclesSensors", [
        {
            vehicleId: 1,
            sensorType: "LIDAR",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vehicleId: 1,
            sensorType: "RADAR",
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
        return queryInterface.bulkDelete('VehiclesSensors', null, {});
    }
};