  
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
                    "oem": "DELPHI",
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
                    "make": "LEXUS",
                    "model": "RX450",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2011,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 3
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "LEXUS",
                    "model": "RX450H",
                    "oem": "GOOGLE",
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
                    "oem": "GOOGLE",
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
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2012,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 6
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "NISSAN",
                    "model": "LEAF",
                    "oem": "CRUISE AUTOMATION INC.",
                    "yearOfManufacture": 2012,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 7
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "GOOGLE",
                    "model": "SELF DRIVING CAR",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 8
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "GOOGLE",
                    "model": "PROTOTYPE",
                    "oem": "GOOGLE",
                    "yearOfManufacture": 2015,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 9
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "NISSAN",
                    "model": "LEAF",
                    "oem": "NISSAN NORTH AMERICA INC",
                    "yearOfManufacture": 2010,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 9
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "NISSAN",
                    "model": "LEAF",
                    "oem": "NISSAN NORTH AMERICA INC",
                    "yearOfManufacture": 2010,
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