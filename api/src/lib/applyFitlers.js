import { Op } from 'sequelize'

module.exports = {
  applyFilters: ( where, filters ) => {
    if (filters.timestamp) {
      module.exports.applyRangedFilter( where, filters.timestamp, "timestamp" );
    }

    if (filters.numVehicles) {
      module.exports.applyRangedFilter( where, filters.timestamp, "timestamp" );
    }

    if (filters.make) {
      where['$vehicles.make$'] = {
        [Op.in]: filters.make
      };
    }

    if (filters.model) {
      where['$vehicles.model$'] = {
        [Op.in]: filters.model
      };
    }

    if (filters.oem) {
      where['$vehicles.oem$'] = {
        [Op.in]: filters.oem
      };
    }

    if (filters.streetType) {
      where.streetType = {
        [Op.in]: filters.streetType
      };
    }

    if (filters.speedLimit) {
      module.exports.applyRangedFilter( where, filters.speedLimit, "speedLimit" );
    }

    if (filters.schoolZone) {
      where.schoolZone = filters.schoolZone;
    }

    if (filters.damageSeverity) {
      where.damageSeverity = {
        [Op.in]: filters.damageSeverity
      };
    }

    if (filters.dca) {
      where.dca = {
        [Op.in]: filters.dca
      };
    }

    if (filters.mode) {
      where.mode = filters.mode;
    }
  },

  applyRangedFilter: ( where, filter, filterName ) => {
    if (filter.exact) {
      where[filterName] = filter.exact;
    }

    else if (!filter.lower && filter.upper) {
      where[filterName] = {
        [Op.lte]: filter.upper
      };
    }

    else if (filter.lower && !filter.upper) {
      where[filterName] = {
        [Op.gte]: filter.lower
      };
    }

    else {
      where[filterName] = {
        [Op.between]: [filter.lower, filter.upper]
      };
    }
  },

  applyPostFilters: ( incidents, filters ) => {
    if (filters.hourOfDay) {

      if (filters.hourOfDay.exact) {
        incidents = incidents.filter( (i) => new Date(i.timestamp * 1000).getHours() === filters.hourOfDay.exact);
      }
  
      else {
        incidents = incidents.filter( (i) => {
          const d = new Date(i.timestamp * 1000).getHours();
          return d < filters.hourOfDay.upper && d >= filters.hourOfDay.lower;
        });
      }
    }

    return incidents;
  }
};