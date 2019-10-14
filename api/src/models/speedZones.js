"use strict";
module.exports = (sequelize, DataTypes) => {
  var SpeedZones = sequelize.define("SpeedZones", {
    limit: DataTypes.INTEGER,
    p1Latitude: DataTypes.FLOAT,
    p1Longitude: DataTypes.FLOAT,
    p2Latitude: DataTypes.FLOAT,
    p2Longitude: DataTypes.FLOAT,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  return SpeedZones;
};