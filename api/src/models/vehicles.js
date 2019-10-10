"use strict";
module.exports = (sequelize, DataTypes) => {
  var Vehicles = sequelize.define("Vehicles", {
    type: DataTypes.STRING,
    vin: DataTypes.STRING,
    make:DataTypes.STRING, 
    model: DataTypes.STRING, 
    yearOfManufacture: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    countryOfManufacture: DataTypes.STRING,
    autonomyLevel: DataTypes.STRING,
//    sensors: DataTypes.STRING,
    registration: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  // add association to foreign key vehicle here
  Vehicles.associate = function(models) {
    Vehicles.belongsToMany(models.Sensors, {
      through: "VehiclesSensors",
      foreignKey: "vehicleReg"
    });
  };
  return Vehicles;
};