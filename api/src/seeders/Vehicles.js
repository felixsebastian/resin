"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Vehicles",
            [
                {
                    "type": "CAR",
                    "registration": "ABC123",
                    "vin": "asdfasdf12313123",
                    "make": "FORD",
                    "model": "FALCON",
                    "yearOfManufacture": 2019,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "sensors": "LIDAR",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "CAR",
                    "registration": "BSD323",
                    "vin": "lkigkhjgasdf234",
                    "make": "HONDA",
                    "model": "ACCORD",
                    "yearOfManufacture": 2018,
                    "countryOfManufacture": "SOUTH_KOREA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "sensors": "LIDAR",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "CAR",
                    "registration": "BHD214",
                    "vin": "kjsdfg35daf",
                    "make": "FORD",
                    "model": "FALCON",
                    "yearOfManufacture": 2019,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "sensors": "LIDAR",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "CAR",
                    "registration": "KJH323",
                    "vin": "g2323jadegtfg",
                    "make": "HONDA",
                    "model": "ACCORD",
                    "yearOfManufacture": 2019,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "sensors": "LIDAR",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vehicles", null, {});
    }
};