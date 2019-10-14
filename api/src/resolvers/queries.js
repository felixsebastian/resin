import { applyFilters } from '../lib/applyFitlers';
import { Op } from 'sequelize';

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
        }
      ],
      where: where,
    });
  },

  sensors: (parent, args, { db }, info) => {
    return db.Sensors.findAll();
  },

  incidentsByRect: (parent, args, { db }, info) => {
    let where = {
      latitude: {
        [Op.between]: [args.p1.x, args.p2.x]
      },
      longitude: {
        [Op.between]: [args.p1.y, args.p2.y]
      }
    };

    if (args.filters)
      applyFilters(where, args.filters);
  
    return db.Incidents.findAll({ where: where });
  },

  // Note: Latitude: 1 deg = 110.574 km, Longitude: 1 deg = 111.320*cos(latitude) km
  incidentsByRadius: (parent, args, { db }, info) => {
    const conversionFactor = 110.949;
    const radDeg = args.radius / conversionFactor;

    let where = {
      latitude: {
        [Op.between]: [args.p.x - radDeg, args.p2.x + radDeg]
      },
      longitude: {
        [Op.between]: [args.p.y - radDeg, args.p.y + radDeg]
      }
    };
    
    if (args.filters)
      applyFilters(where, args.filters);
  
    return db.Incidents.findAll({ where: where })
    .filter( i => (i.latitude - args.p.x)**2 + (i.longitude - args.p.y )**2 <= radDeg**2 );
  }
};
