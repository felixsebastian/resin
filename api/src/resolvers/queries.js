import { applyFilters, applyPostFilters } from "../lib/applyFitlers";
import { Op } from "sequelize";

const deserializeFilterValue = value =>
  JSON.parse(Buffer.from(value, "base64").toString());

export default {
  incidents: (parent, args, { db }, info) => {
    let filters = {};

    console.log("filters", args.filters);

    if (args.filters) {
      args.filters.forEach(filter => {
        let value = filter.object
          ? deserializeFilterValue(filter.value)
          : filter.value;

        if (filter.field === "location") {
          if (filter.type === "radius") {
            let radius = value.radius;
            const conversionFactor = 110.949;
            const radDeg = radius.distance / conversionFactor;

            filters.latitude = {
              [Op.between]: [
                value.center.latitude - radDeg,
                value.center.latitude + radDeg
              ]
            };

            filters.longitude = {
              [Op.between]: [
                value.center.longitude - radDeg,
                value.center.longitude + radDeg
              ]
            };
          } else if (filter.type === "rectangle") {
            console.log(filter, value);

            filters.latitude = {
              [Op.between]: [value.pointA.latitude, value.pointB.latitude]
            };

            filters.longitude = {
              [Op.between]: [value.pointA.longitude, value.pointB.longitude]
            };
          }
        }

        // basic
        ["dca"].forEach(field => {
          if (args.filters[field])
            filters[field] = {
              [Op[args.filters[field].type === "IS" ? "eq" : "contains"]]:
                args.filters[field].value
            };
        });
      });
    }

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
      where: filters
    }).then(incidents =>
      (incidents || []).map(incident => ({
        ...incident.dataValues,
        location: {
          latitude: incident.dataValues.latitude || 0,
          longitude: incident.dataValues.longitude || 0
        }
      }))
    );
  },
  vehicles: (parent, args, { db }, info) => {
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
  sensors: (parent, args, { db }, info) => {
    return db.Sensors.findAll();
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
