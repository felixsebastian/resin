export default {
  /*
  categories: (parent, args, { db }, info) => {
    return db.Categories.findAll();
  },

  locations: (parent, args, { db }, info) => {
    const where = args.categoryId ? { id: args.categoryId } : {};
    return db.Locations.findAll({
      include: [
        {
          model: db.Categories,
          attributes: ["name"],
          where
        }
      ]
    });
  },
*/
  incidents: (parent, args, { db }, info) => {
    return db.Incidents.findAll();
  },

  vehicles: (parent, args, { db }, info) => {
    return db.Vehicles.findAll({
      include: [
        {
          model: db.Sensors,
          //attributes: ["type"]
        }
      ]
    });
  },

  sensors: (parent, args, { db }, info) => {
    return db.Sensors.findAll();
  },
};
