export default {
  /*  addCategory: (parent, args, { db }, info) => {
    return db.Categories.create({
      name: args.categoryName,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCat => {
      return db.Categories.findAll();
    });
  },
*/

  createIncident: (parent, args, { db }, info) => {
    return db.Incidents.create({
      timestamp: args.event.timestamp,
      latitude: args.event.latitude,
      longitude: args.event.longitude,
      numVehicles: args.event.numVehicles,
      damageSeverity: args.event.damageSeverity,
      description: args.event.description,
      dca: args.event.dca,
      weatherDesc: args.event.weatherDesc,
      mode: args.event.mode,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCat => {
      return db.Incidents.findAll({
        limit: 1,
        include: [
          {
            model: db.Vehicles,
            as: "vehicles",
            include: [
              {
                model: db.Sensors,
                as: "sensors"
              }
            ]
          }
        ],
        order: [["createdAt", "DESC"]]
      });
    });
  }

  // deleteAllIncidents: (parent, args, { db }, info) => {
  //   return db.Incidents.destroy({
  //     where: {},
  //     truncate: true
  //   }).then(newCat => {
  //     return [];
  //   });
  // },

  // createVehicle: (parent, args, { db }, info) => {
  //   return db.Vehicles.create({
  //     type: args.vehicle.type,
  //     registration: args.vehicle.registration,
  //     vin: args.vehicle.vin,
  //     make: args.vehicle.make,
  //     model: args.vehicle.model,
  //     oem: args.vehicle.oem,
  //     yearOfManufacture: args.vehicle.yearOfManufacture,
  //     countryOfManufacture: args.vehicle.countryOfManufacture,
  //     autonomyLevel: args.vehicle.autonomyLevel,
  //   }).then(newCat => {
  //     return db.Vehicles.findAll({
  //       limit: 1,
  //       include: [
  //         {
  //           model: db.Sensors,
  //           as: 'sensors'
  //         },
  //         {
  //           model: db.Incidents,
  //           as: 'incidents'
  //         }
  //       ],
  //       order:[['createdAt', 'DESC']]
  //       });
  //   });
  // },

  // createVehicleSensorAssociation: (parent, args, { db }, info) =>{
  //   return db.VehiclesSensors.create({
  //     vehicleId: args.ass.vehicleId,
  //     sensorType: args.ass.sensorType
  //   }).then(newCat => {
  //     return db.Vehicles.findAll({
  //       include: [
  //         {
  //           model: db.Sensors,
  //           as: 'sensors'
  //         },
  //         {
  //           model: db.Incidents,
  //           as: 'incidents'
  //         }
  //       ]
  //       });
  //   });
  // },
  // createIncidentVehicleAssociation: (parent, args, { db }, info) =>{
  //   return db.IncidentsVehicles.create({
  //     vehicleId: args.ass.vehicleId,
  //     incidentId: args.ass.incidentId
  //   }).then(newCat => {
  //     return db.Incidents.findAll({
  //       include: [
  //         {
  //           model: db.Vehicles,
  //           as: 'vehicles',
  //           include: [
  //             {
  //               model: db.Sensors,
  //               as: 'sensors',
  //             }
  //           ]
  //         },
  //       ]
  //       });
  //   });
  // },

  // deleteAllVehicles: (parent, args, { db }, info) => {
  //   return db.Vehicles.destroy({
  //     where: {},
  //     truncate: true
  //   }).then(newCat => {
  //     return [];
  //   });
  // },

  // createSensor: (parent, args, { db }, info) => {
  //   return db.Sensors.create({
  //     type: args.sensor.type,
  //     description: args.sensor.description,
  //   }).then(newCat => {
  //     return db.Sensors.findAll({
  //       limit:1,
  //       order:[['createdAt', 'DESC']]
  //     });
  //   });
  // },
  // deleteAllSensors: (parent, args, { db }, info) => {
  //   return db.Sensors.destroy({
  //     where: {},
  //     truncate: true
  //   }).then(newCat => {
  //     return [];
  //   });
  // },
};
