module.exports = {
  applyFilters = ( where, filters ) => {
    if (filters.timestamp) {
      this.applyRangedFilter( where, filters.timestamp, "timestamp" );
    }

    if (filters.numVehicles) {
      this.applyRangedFilter( where, filters.timestamp, "timestamp" );
    }

    if (filters.damageSeverity) {
      whereCondition.damageSeverity = {
        [Op.in]: filters.damageSeverity
      };
    }

    if (filters.dca) {
      whereCondition.dca = {
        [Op.in]: filters.dca
      };
    }

    if (filters.mode) {
      whereCondition.mode = filters.mode;
    }
  },

  applyRangedFilter = ( where, filter, filterName ) => {
    if (filter.exact) {
      whereCondition.filterName = filter.exact;
    }

    else if (!filter.lower && filter.upper) {
      whereCondition.filterName = {
        [Op.lte]: filter.upper
      };
    }

    else if (filter.lower && !filter.upper) {
      whereCondition.filterName = {
        [Op.gte]: filter.lower
      };
    }

    else {
      whereCondition.filterName = {
        [Op.between]: [filter.lower, filter.upper]
      };
    }
  }
};