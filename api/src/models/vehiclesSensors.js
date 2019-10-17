"use strict";
module.exports = (sequelize, DataTypes) => {
  var VehiclesSensors = sequelize.define("VehiclesSensors", {
    vehicleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    sensorType : {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  // add association to foreign key vehicle here
 // Vehicles.associate = function(models) {
 //   Vehicles.belongsToMany(models.Sensors, {
 //     through: "VehiclesSensors",
 //     foreignKey: "vehicleId",
 //     as: "sensors"
 //   });
 //   Vehicles.belongsToMany(models.Incidents, {
 //     through: "IncidentsVehicles",
 //     foreignKey: "vehicleId",
 //     as: "incidents"
 //   });
 // };
  return VehiclesSensors;
};