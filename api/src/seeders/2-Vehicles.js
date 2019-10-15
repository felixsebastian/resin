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
                    "oem": "Delphi",
                    "yearOfManufacture": 2014,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                { // 2
                    "registration": "",
                    "vin": "",
                    "make": "Lexus",
                    "model": "RX450",
                    "oem": "Google",
                    "yearOfManufacture": 2011,
                    "countryOfManufacture": "",
                    "autonomyLevel": "PARTIAL_ASSISTANCE",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                // { // 3
                //     "type": "CAR",
                //     "registration": "",
                //     "vin": "",
                //     "make": "Lexus",
                //     "model": "RX450H",
                //     "oem": "",
                //     "yearOfManufacture": 2011,
                //     "countryOfManufacture": "",
                //     "autonomyLevel": "PARTIAL_ASSISTANCE",
                //     "createdAt": new Date(),
                //     "updatedAt": new Date()
                // },
                // { // 4
                //     "type": "CAR",
                //     "registration": "",
                //     "vin": "",
                //     "make": "LEXUS",
                //     "model": "RX450H",
                //     "oem": "",
                //     "yearOfManufacture": 2015,
                //     "countryOfManufacture": "",
                //     "autonomyLevel": "PARTIAL_ASSISTANCE",
                //     "createdAt": new Date(),
                //     "updatedAt": new Date()
                // },
                // { // 5
                //     "type": "CAR",
                //     "registration": "",
                //     "vin": "",
                //     "make": "LEXUS",
                //     "model": "RX450H",
                //     "oem": "",
                //     "yearOfManufacture": 2012,
                //     "countryOfManufacture": "",
                //     "autonomyLevel": "PARTIAL_ASSISTANCE",
                //     "createdAt": new Date(),
                //     "updatedAt": new Date()
                // },
                { // 6
                    "type": "CAR",
                    "registration": "",
                    "vin": "",
                    "make": "Chevrolet",
                    "model": "Bolt",
                    "oem": "GM Cruise",
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
                    "make": "Lexus",
                    "model": "RX450H",
                    "oem": "Apple",
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
                    "make": "Toyota",
                    "model": "Pruis",
                    "oem": "Aimotive",
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
                    "make": "Chrysler",
                    "model": "Pacifa",
                    "oem": "Waymo",
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
                    "make": "Toyota",
                    "model": "Highlander",
                    "oem": "Zoox",
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
                    "make": "Lincoln",
                    "model": "MKZ",
                    "oem": "Pony.AI",
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
                    "make": "Ford",
                    "model": "Fusion",
                    "oem": "Lyft",
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