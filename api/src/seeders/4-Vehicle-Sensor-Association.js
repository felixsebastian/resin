"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("VehiclesSensors", [
        {
            vehicleReg: "ABC123",
            sensorType: "LIDAR",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            vehicleReg: "ABC123",
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