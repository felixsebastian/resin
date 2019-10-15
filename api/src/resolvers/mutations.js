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
      vehicle1: args.event.vehicle1,
      vehicle2: args.event.vehicle2,
      dca : args.event.dca,
      weatherDesc: args.event.weatherDesc,
      mode: args.event.mode,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCat => {
      return db.Incidents.findAll();
    });
  },

  deleteAllIncidents: (parent, args, { db }, info) => {
    return db.Incidents.destroy({
      where: {},
      truncate: true
    }).then(newCat => {
      return [];
    });
  },

  createVehicle: (parent, args, { db }, info) => {
    return db.Vehicles.create({
      type: args.vehicle.type,
      registration: args.vehicle.registration,
      vin: args.vehicle.vin,
      make: args.vehicle.make,
      model: args.vehicle.model,
      oem: args.vehicle.oem,
      yearOfManufacture: args.vehicle.yearOfManufacture,
      countryOfManufacture: args.vehicle.countryOfManufacture,
      autonomyLevel: args.vehicle.autonomyLevel,
      sensors : args.vehicle.sensors,
    }).then(newCat => {
      return db.Vehicles.findAll();
    });
  },

  deleteAllVehicles: (parent, args, { db }, info) => {
    return db.Vehicles.destroy({
      where: {},
      truncate: true
    }).then(newCat => {
      return [];
    });
  },

  createSensor: (parent, args, { db }, info) => {
    return db.Sensors.create({
      type: args.sensor.type,
      description: args.sensor.description,
    }).then(newCat => {
      return db.Sensors.findAll();
    });
  },
  deleteAllSensors: (parent, args, { db }, info) => {
    return db.Sensors.destroy({
      where: {},
      truncate: true
    }).then(newCat => {
      return [];
    });
  },
};
