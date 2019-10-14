import { Op } from 'sequelize'

module.exports = {
  applyFilters: ( where, filters ) => {
    if (filters.timestamp) {
      module.exports.applyRangedFilter( where, filters.timestamp, "timestamp" );
    }

    if (filters.numVehicles) {
      module.exports.applyRangedFilter( where, filters.timestamp, "timestamp" );
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
  }
};