"use strict";
module.exports = (sequelize, DataTypes) => {
  var Incidents = sequelize.define("Incidents", {
    timestamp: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    numVehicles: DataTypes.INTEGER,
    damageSeverity: DataTypes.STRING,
    description: DataTypes.STRING,
    dca: DataTypes.INTEGER,
    mode: DataTypes.INTEGER,

    apparentTemperature: DataTypes.FLOAT,
    cloudCover: DataTypes.FLOAT,
    dewPoint: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    ozone: DataTypes.FLOAT,
    precipIntensity: DataTypes.FLOAT,
    precipProbability: DataTypes.FLOAT,
    precipType: DataTypes.STRING,
    pressure: DataTypes.FLOAT,
    summary: DataTypes.STRING,
    temperature: DataTypes.FLOAT,
    uvIndex: DataTypes.FLOAT,
    visibility: DataTypes.FLOAT,
    windBearing: DataTypes.FLOAT,
    windGust: DataTypes.FLOAT,
    windSpeed: DataTypes.FLOAT,

    streetType: DataTypes.STRING,
    speedLimit: DataTypes.INTEGER,
    schoolZone: DataTypes.BOOLEAN,

    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  // add association to foreign key vehicle here
  Incidents.associate = function(models) {
    Incidents.belongsToMany(models.Vehicles, {
      through: "IncidentsVehicles",
      foreignKey: "incidentId",
      as: "vehicles"
    });
  };
  return Incidents;
};

/*
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  Categories.associate = function(models) {
    Categories.belongsToMany(models.Locations, {
      through: "CategoriesLocations",
      foreignKey: "categoryId"
    });
  };
  return Categories;
};
*/