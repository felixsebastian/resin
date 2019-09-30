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
      type: args.event.type,
      time: args.event.time,
      latitude: args.event.latitude,
      longitude: args.event.longitude,
      severity: args.event.severity,
      damagedVehicles: args.event.damagedVehicles,
      otherVehicles: args.event.otherVehicles,
      crashSpeed: args.event.crashSpeed,
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
