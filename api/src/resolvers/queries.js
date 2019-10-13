export default {
  
  incidents: (parent, args, { db }, info) => {
    return db.Incidents.findAll({
      include: [
        {
          model: db.Vehicles,
          as: 'vehicles'
        }
      ]
    }).then(incident => {
      console.log(incident);
      return incident;
    });
  },

  vehicles: (parent, args, { db }, info) => {
    return db.Vehicles.findAll({
      include: [
        {
          model: db.Sensors,
          as: 'sensors'
        },
        {
          model: db.Incidents,
          as: 'incidents'
        }
      ]
    });
  },

  getVehicle: (parent, args, { db }, info) => {
    const where = args.rego ? { registration: args.rego } : {};
    return db.Vehicles.findOne({
      include: [
        {
          model: db.Sensors,
          as: 'sensors'
        }
      ],
      where: where,
    });
  },

  sensors: (parent, args, { db }, info) => {
    return db.Sensors.findAll();
  },
};
