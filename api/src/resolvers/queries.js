import { applyFilters, applyPostFilters } from '../lib/applyFitlers';
import { Op } from 'sequelize';

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

  incidentsByRect: (parent, args, { db }, info) => {
    let where = {
      latitude: {
        [Op.between]: [args.p1.lat, args.p2.lat]
      },
      longitude: {
        [Op.between]: [args.p1.long, args.p2.long]
      }
    };

    if (args.filters)
      applyFilters(where, args.filters);
  
      let incidents =  db.Incidents.findAll({
        include: [
          {
            model: db.Vehicles,
            as: 'vehicles'
          }
        ],
        where: where
      })

    return applyPostFilters( incidents, args.filters );
  },

  // Note: Latitude: 1 deg = 110.574 km, Longitude: 1 deg = 111.320*cos(latitude) km
  incidentsByRadius: (parent, args, { db }, info) => {
    const conversionFactor = 110.949;
    const radDeg = args.radius / conversionFactor;

    let where = {
      latitude: {
        [Op.between]: [args.p.lat - radDeg, args.p.lat + radDeg]
      },
      longitude: {
        [Op.between]: [args.p.long - radDeg, args.p.long + radDeg]
      }
    };

    if (args.filters)
      applyFilters(where, args.filters);
  
    let incidents =  db.Incidents.findAll({
      include: [
        {
          model: db.Vehicles,
          as: 'vehicles'
        }
      ],
      where: where
    })
    .filter( i => (i.latitude - args.p.lat)**2 + (i.longitude - args.p.long )**2 <= radDeg**2 );

    return applyPostFilters( incidents, args.filters );
  }
};
