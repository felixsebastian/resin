"use strict";
module.exports = (sequelize, DataTypes) => {
  var SpeedZones = sequelize.define("SpeedZones", {
    limit: DataTypes.INTEGER,
    p1: {
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    p2: {
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  return SpeedZones;
};