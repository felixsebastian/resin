"use strict";
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          type: 1,
          username: "johndoe",
          password: "john123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 1,
          username: "janedoe",
          password: "jane123",
          lastLogin: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
