"use strict";
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          type: 1,
          username: "swin1",
          password: "apple123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "swin2",
          password: "orange123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "swin3",
          password: "monkey123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "swin4",
          password: "train123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "tac1",
          password: "plant123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "tac2",
          password: "hatter123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "tac3",
          password: "bear123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "tac4",
          password: "dogs123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
