import resolveFilters from "../lib/resolveFilters";
import resolveChart from "../lib/resolveChart";

export default {
  incidents: (_parent, args, { db }) =>
    db.Incidents.findAll({
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
      where: resolveFilters(args.filters)
    }).then(incidents =>
      (incidents || []).map(incident => ({
        ...incident.dataValues,
        location: {
          latitude: incident.dataValues.latitude || 0,
          longitude: incident.dataValues.longitude || 0
        },
        weather: {
          apparentTemperature: incident.dataValues.apparentTemperature,
          cloudCover: incident.dataValues.cloudCover,
          dewPoint: incident.dataValues.dewPoint,
          humidity: incident.dataValues.humidity,
          ozone: incident.dataValues.ozone,
          precipIntensity: incident.dataValues.precipIntensity,
          precipProbability: incident.dataValues.precipProbability,
          precipType: incident.dataValues.precipType,
          pressure: incident.dataValues.pressure,
          summary: incident.dataValues.summary,
          temperature: incident.dataValues.temperature,
          uvIndex: incident.dataValues.uvIndex,
          visibility: incident.dataValues.visibility,
          windBearing: incident.dataValues.windBearing,
          windGust: incident.dataValues.windGust,
          windSpeed: incident.dataValues.windSpeed
        }
      }))
    ),
  vehicles: (_parent, _args, { db }) => {
    return db.Vehicles.findAll({
      include: [
        {
          model: db.Sensors,
          as: "sensors"
        },
        {
          model: db.Incidents,
          as: "incidents"
        }
      ]
    });
  },
  sensors: (_parent, _args, { db }) => {
    return db.Sensors.findAll();
  },
  correlate: (_parent, args, { db }) => {
    return db.Incidents.findAll({
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
      where: resolveFilters(args.filters)
    }).then(incidents => resolveChart(incidents, args.options));
  }
  // getVehicle: (parent, args, { db }, info) => {
  //   const where = args.rego ? { registration: args.rego } : {};
  //   return db.Vehicles.findOne({
  //     include: [
  //       {
  //         model: db.Sensors,
  //         as: "sensors"
  //       }
  //     ],
  //     where: where
  //   });
  // },

  // incidentsByRect: (parent, args, { db }, info) => {
  //   let where = {
  //     latitude: {
  //       [Op.between]: [args.p1.lat, args.p2.lat]
  //     },
  //     longitude: {
  //       [Op.between]: [args.p1.long, args.p2.long]
  //     }
  //   };

  //   if (args.filters) applyFilters(where, args.filters);

  //   let incidents = db.Incidents.findAll({
  //     include: [
  //       {
  //         model: db.Vehicles,
  //         as: "vehicles"
  //       }
  //     ],
  //     where: where
  //   });

  //   return applyPostFilters(incidents, args.filters);
  // },

  // // Note: Latitude: 1 deg = 110.574 km, Longitude: 1 deg = 111.320*cos(latitude) km
  // incidentsByRadius: (parent, args, { db }, info) => {
  //   const conversionFactor = 110.949;
  //   const radDeg = args.radius / conversionFactor;

  //   let where = {
  //     latitude: {
  //       [Op.between]: [args.p.lat - radDeg, args.p.lat + radDeg]
  //     },
  //     longitude: {
  //       [Op.between]: [args.p.long - radDeg, args.p.long + radDeg]
  //     }
  //   };

  //   if (args.filters) applyFilters(where, args.filters);

  //   let incidents = db.Incidents.findAll({
  //     include: [
  //       {
  //         model: db.Vehicles,
  //         as: "vehicles"
  //       }
  //     ],
  //     where: where
  //   }).filter(
  //     i =>
  //       (i.latitude - args.p.lat) ** 2 + (i.longitude - args.p.long) ** 2 <=
  //       radDeg ** 2
  //   );

  //   return applyPostFilters(incidents, args.filters);
  // }
};
