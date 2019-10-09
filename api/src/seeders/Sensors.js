"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Sensors",
            [
                {
                    "type": "LIDAR",
                    "description": "LIDAR is believed to be the best technology for autonomous vehicles. LIDAR stands for light detection and ranging. This technology sends pulsing laser light to light up an area and measures the reflected pulsed with a sensor. A processor can create an accurate depiction of the environment with the reflected pulses by measuring the strength and time it took for the light to come back. These images can be used by trained software to identify objects in the environment.",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "CAMERAS",
                    "description": "Cameras were one of the initial technologies used to help make cars automated. This technology is used by placing multiple cameras around a car to capture every aspect of the environment around it. The images received by the processor are used to make suitable actions due to the environment.",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "RADAR",
                    "description": "RADAR stands for RAdio Detection And Ranging. This technology sends out radio waves and has a sensor to receive returning waves. With this sensor, a car is able to detect other objects, their distance and speed by measuring the length of time to return to the sensor. This is great detection technology, it is very good at detecting objects but is poor creating detail about objects such as the classification of that object (eg cyclist). Technologies such as Adaptive Cruise Control and Automatic Emergency Braking already utilise RADAR.",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
                {
                    "type": "GPS",
                    "description": "GPS is the Global Positioning System and is used to track the location of a GPS device in the world. An up-to-date GPS system will help a user navigate through an unknown environment or location by providing access to a detailed description of the environment, landscapes, roads, road works, crashes and more. Autonomous and Semi-automated vehicles can use this technology to understand its location in the globe and to navigate itself or its drive through its environment.",
                    "createdAt": new Date(),
                    "updatedAt": new Date()
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sensors", null, {});
    }
};