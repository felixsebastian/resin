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
    speedLimit: DataTypes.INTEGER,
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