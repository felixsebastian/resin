"use strict";
module.exports = (sequelize, DataTypes) => {
  var Vehicles = sequelize.define("Vehicles", {
    type: DataTypes.STRING,
    vin: DataTypes.STRING,
    make: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    model: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    yearOfManufacture: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    countryOfManufacture: DataTypes.STRING,
    autonomyLevel: DataTypes.STRING,
    registration: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  // add association to foreign key vehicle here
  Vehicles.associate = function(models) {
    Vehicles.belongsToMany(models.Sensors, {
      through: "VehiclesSensors",
      foreignKey: "vehicleReg",
      as: "sensors"
    });
    Vehicles.belongsToMany(models.Incidents, {
      through: "IncidentsVehicles",
      foreignKey: "vehicleReg",
      as: "incidents"
    });
  };
  return Vehicles;
};
