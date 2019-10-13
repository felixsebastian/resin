"use strict";
module.exports = (sequelize, DataTypes) => {
  var Sensors = sequelize.define("Sensors", {
    type: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    description: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  // add association to foreign key vehicle here
  Sensors.associate = function(models) {
    Sensors.belongsToMany(models.Vehicles, {
      through: "VehiclesSensors",
      foreignKey: "sensorType",
      as: "vehicles"
    });
  };
  return Sensors;
};