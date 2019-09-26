"use strict";
module.exports = (sequelize, DataTypes) => {
  var Incidents = sequelize.define("Incidents", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    type: {
      type: DataTypes.ENUM,
      values: ["CRASH"]
    },
    time: DataTypes.DATE,
    latitude: {
      type: DataTypes.FLOAT,
      validate: {
        min: -180,
        max: 180
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      validate: {
        min: -180,
        max: 180
      }
    },
    severity: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      }
    },
    primaryVehicle: DataTypes.INTEGER,
    otherVehicles: DataTypes.ARRAY(DataTypes.INTEGER),
    crashSpeed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    }
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Vehicles, {
      foreignKey: "categoryId"
    });
  };

  return Incidents;
};
