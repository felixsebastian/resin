"use strict";
module.exports = (sequelize, DataTypes) => {
  var SpeedZones = sequelize.define("SpeedZones", {
    limit: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  return SpeedZones;
};