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
  }
};
