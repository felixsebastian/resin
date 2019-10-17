"use strict";
module.exports = (sequelize, DataTypes) => {
  var Vehicles = sequelize.define("Vehicles", {
    id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    vin: DataTypes.STRING,
    make:  DataTypes.STRING ,
    model:  DataTypes.STRING ,
    oem: DataTypes.STRING,
    yearOfManufacture: DataTypes.INTEGER,
    countryOfManufacture: DataTypes.STRING,
    autonomyLevel: DataTypes.STRING,
    registration: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  // add association to foreign key vehicle here
  Vehicles.associate = function(models) {
    Vehicles.belongsToMany(models.Sensors, {
      through: "VehiclesSensors",
      foreignKey: "vehicleId",
      as: "sensors"
    });
    Vehicles.belongsToMany(models.Incidents, {
      through: "IncidentsVehicles",
      foreignKey: "vehicleId",
      as: "incidents"
    });
  };
  return Vehicles;
};
