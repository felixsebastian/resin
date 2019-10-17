  
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
                    "make": "CHEVROLET",
                    "model": "BOLT",
                    "oem": "GM CRUISE",
                    "yearOfManufacture": 2020,
                    "countryOfManufacture": "USA",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 7
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "LEXUS",
                    "model": "RX450H",
                    "oem": "APPLE",
                    "yearOfManufacture": 2017,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 8
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "TOYOTA",
                    "model": "PRIUS",
                    "oem": "AIMOTIVE",
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
                    "make": "CHRYSLER",
                    "model": "PACIFA",
                    "oem": "WAYMO",
                    "yearOfManufacture": 2017,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 10
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "TOYOTA",
                    "model": "HIGHLANDER",
                    "oem": "ZOOX",
                    "yearOfManufacture": 2016,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 11
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "LINCOLN",
                    "model": "MKZ",
                    "oem": "PONY.AI",
                    "yearOfManufacture": 2018,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 11
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "FORD",
                    "model": "FUSION",
                    "oem": "LYFT",
                    "yearOfManufacture": 2018,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
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