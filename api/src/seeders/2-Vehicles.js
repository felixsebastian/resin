"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Vehicles",
            [
                { // 1
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "AUDI",
                    "model": "SQ5",
                    "yearOfManufacture": 2014,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 2
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "Lexus",
                    "model": "RX450",
                    "yearOfManufacture": 0000,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 3
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "Lexus",
                    "model": "RX450H",
                    "yearOfManufacture": 2011,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 4
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "LEXUS",
                    "model": "RX450H",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 5
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "LEXUS",
                    "model": "RX450H",
                    "yearOfManufacture": 2012,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vehicles", null, {});
    }
};