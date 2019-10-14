"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Incidents",
      [
        { // 1
            "damageSeverity": "MINOR",
            "dca": 120,
            "description": "The Audo, in conventional mode, transitioned from Byron to San Antonio B/B and waited in the merge pocket for traffic to clear. After approximately 20 seconds of waiting stationary for traffic to clear, a Honda was observed tot he left coming over the elevated center island. The Honda hit the right front of Audo and continued to go over another center island at 25-30 mph. Honda came to a stop approximately 75-100 yards from impact heading W/B in the E/B lane. Audi vehicle damage includes right fendor, front bumper/ fascia.  The driver of the Honda was determined to have caused the accident by making an unsafe turning movement.",
            "latitude": "37.414767",
            "longitude": "-122.104016",
            "mode": "CONVENTIONAL",
            "numVehicles": 2,
            "timestamp": 1413314820,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 2
            "damageSeverity": "MINOR",
            "dca": 110,
            "description": "The Lexus AV was traveling northbound on El Camino Real in Autonomous Mode when an Audi sedan traveling westbound on View St. failed to come to a stop at the stop-sign at the intersection of El Camino Real and View St. The Audi rolled through the stop-sign and struck the right rear quarter panel and right rear wheel of the Lexus AV. Prior to the collision, the Lexus AV's autonomous technology began applying the brakes in response to its detection of the Audi's speed and trajectory. Just before the collision, the driver of the Lexus AV disengaged Autonomous Mode and took manual control of the vehilce in response to the application of the brakes by the Lexus AV's autonomous technology.",
            "latitude": "37.384775",
            "longitude": "-122.081679",
            "mode": "CONVENTIONAL",
            "numVehicles": 2,
            "timestamp": 1424934000,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },  
        { // 3
            "damageSeverity": "MINOR",
            "dca": 132,
            "description": "The above identified Google Lexus autonomous vehicle (Google AV) was involved in an accident in Mountain View when travelling northbound on Castro St. and making a right turn onto El Camino eastbound. The Google AV was operating in Autonomous Mode at the time of the accident. The Google AV was travelling northbound in the rightmost lane of Castro St. and came to a complete stop for a red light at the intersection of Castro St and El Camino Real. The Google AV then proceeded to make a right turn on red by creeping forward to obtain a better field of view of cross traffic on El Camino Real approching from the left. While creeping forward, the Google AV detected a vehicle approaching eastbound on El Camino Real and came to a stop in order to yield to the approaching vehilce. The Google AV was just starting to move (<1 MPH) When the vehicle folling immediately behind it, which was also attempting to make a right turn onto El Camino Real, failed to break sufficiently and struck the Google AV's bumper at approximately 5 MPH.",
            "latitude": "37.385100",
            "longitude": "-122.083997",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1428390000,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 4
            "damageSeverity": "MINOR",
            "dca": 133,
            "description": "Lexus RX450H (the 'AV') in autonomous mode heading southbound on California St. in Mountain View, was stopped for a red light in the right lane at the intersection of California St. and Shoreline Blvd. A Toyota Camry immediately behind the AV attempted to pass the AV on its right in the bike line, in order to make a right turn onto Shoreline Blvd. While passing the AV, the Toyota's driver's side mirror brushed on the AV's sensors located on the passenger's side of the AV, Neight vehicle was damaged.",
            "latitude": "37.392923",
            "longitude": "-122.084961",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1430152020,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 5
            "damageSeverity": "MINOR",
            "dca": 130,
            "description": "A Google Lexus model autonomous vehicle ('Google AV') was travelling southbound on Shoreline Boulevard in Mountain View in autonomous mode and was steopped behind traffic at a red light at the intersection of Shoreline Boulevard and El Camino Real. A Ford Expedition approaching from behind collided with the rear bumper and sensor of the Google AV. The approximate speed of the Ford Expedition at the time of impact was 1 MPH. The Google AV sustained minor damage to its rear sensor and bumper.",
            "latitude": "37.404827",
            "longitude": "-122.078213",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1432987200,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 6
            "damageSeverity": "MINOR",
            "dca": 130,
            "description": "A Google Lexus model autonomous vehicle ('Google AV') was travelling westbound on California St. in Mountain View in autonomous mode and was stopped behind traffic at a red light at the intersection of California St and Rengstorff Ave. A vehicle approaching from behind collided with the rear bumper of the Google AV. The Google AV was stopped for approximately 17 seconds prior to the collision. The approximate speed of the other vehicle at the time of impact was <1 mph.",
            "latitude": "37.398982",
            "longitude": "-122.099992",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1433408040,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 7
            "damageSeverity": "MINOR",
            "dca": 130,
            "description": "A Google Lexus-model autonomous vehicle ('Google AV') was travelling northbound on California St. in Mountain View in autonomous mode and was stopped at a red light in the straight-only lane at the intersection of California St. and Bryant St. The lane to the left of the Google AV was a left-turn-only lane. The vehicle waiting immediately behind the Google AV in hte straight-only lane begin to move forward when the grenn arrow left turn signal appeared (despite the signal for the straight-only lane remaining red) and collided with the rear bumper of the Google AV. The Google AV had been stopeed for about 11 seconds at the time of impact. The other vehicle was travelling about 5 MPH at the time of impact.",
            "latitude": "37.391757",
            "longitude": "-122.081851",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1434626100,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 8
            "damageSeverity": "MINOR",
            "dca": 130,
            "description": "A Google Lexus-model autonomous vehicle ('Google AV') was travelling northbound on Grant Rd. in Mountain View approaching the intersection of Phyllis Ave. and Martens Ave. in autonomous mode. the two vehicles in front of the Google AV, the Google AV, and the vehilce behind the Google AV were all traveling at a stead speed of ~ 15mph. While approaching a grean light intersection with stopped traffic on the other side of the intersection, the first vehicle decelarated and came to a stop, keeping clear of the intersection. The vehicle directly in front of the Google AV and the Google AV also decelerated and came to a stop with adequate and similar stopping distances. About 1 second later, the vehicle approching from the rear struck the Google AV at ~17 mph and did no appear to decelerate prior to the collision. At the time of the incident, the driver, co-dirver, and rear passenger of the Google AV reported whiplash. They were driven by other team members to a local hospital, where they were evaluated by medical staff and cleared to return to work. Thee driver of the other vehicle reported minor neck and back pain. The Google AV sustained minor damage to its rear bumper.",
            "latitude": "37.375948",
            "longitude": "-122.076553",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1435770960,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 9
            "damageSeverity": "MINOR",
            "dca": 131,
            "description": "A Google Lexus-model autonomous vehicle ('Google AV') was operating in autonomous mode and traveling northboun on Shoreline Blvd. in Moutain View in lane two (the second of three lanes) was involved in an accident. As the Google AV approached the intersection of Shoreline Blvd. and Hgih Schhol way, a pedestrain begin to cross the northbound lanes of Shoreline Blvd. in hte crosswalk traveling westbound. The Google AV slowed to yield as it approached the crosswalk, and out of an adundance of caution the Google AV test driver disengaed the autonomous technology and took control of the vehicle. A vehicle in lane three to the immediate right of, and traveling in hte same direction, as the Google AV was already stoppped and yielding the right of way to the pedestrain. A vehicle in the process of changing lanes from lane one into lane two and approaching from the rear struck the Google AV. The Google AV was travelling 5 mph at the imte of impact, and braking to stop for the crosswalk. The other vehicle was travelling approximately 10 mph at the time of impact.",
            "latitude": "37.388676",
            "longitude": "-122.087695",
            "mode": "CONVENTIONAL",
            "numVehicles": 2,
            "timestamp": 1440063360,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        { // 10
            "damageSeverity": "MINOR",
            "dca": 131,
            "description": "A Google Lexus-model autonomous vehicle ('Google AV') was operating in autonomous mode and traveling northboun on Clark Ave in Mountain View was involved in an accident. As the Google AV approached the intersection of Clark St. and El Camino Real it activated its turn signal to indicate its intention to make a right turn on El Camino Real. The Google AV came to a complete stop at a red light at the intersection and then began to slowly advance in order to get a better view of cross traffic on El Camino Real approaching from the left to determine whether it was clear to make the right turn on red. A vehicle approaching from behind stopped and the rolled forward and collided with the rear bumper of the Google AV. The approxiamte speed of the other vehicle at the time of impact was 4 mph. The speed of the Google AV at the time of impact was below 1 mph.",
            "latitude": "37.394146",
            "longitude": "-122.098208",
            "mode": "AUTONOMOUS",
            "numVehicles": 2,
            "timestamp": 1446474600,
            "weatherDesc": "CLEAR",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Incidents", null, {});
  }
};