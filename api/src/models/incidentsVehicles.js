"use strict";
module.exports = (sequelize, DataTypes) => {
  var IncidentsVehicles = sequelize.define("IncidentsVehicles", {
    vehicleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    incidentId : {
        type: DataTypes.INTEGER,
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
  return IncidentsVehicles;
};