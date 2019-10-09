"use strict";
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    type: DataTypes.INTEGER,
    username: DataTypes.STRING(32),
    password: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER
  });
  return Users;
};
