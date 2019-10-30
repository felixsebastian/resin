export default ( incidents, options ) => {
    const field = options.field;
    let result = [];
    const itm = incidents.map( i => i[field] )
        .filter( i => i != null );
  
    if ([ 'numVehicles', 'speedLimit', 'windSpeed',
    'apparentTemperature', 'cloudCover', 'dewPoint', 'humidity',
    'ozone', 'precipIntensity', 'precipProbability', 'schoolZone',
    'pressure', 'temperature',
    'uvIndex', 'visibility', 'windBearing', 'windGust' ].indexOf(field) != -1) {
      if (!options.step) options.step = 10;
      let bounds = {};
      bounds.min = Math.min(...itm);
      bounds.max = Math.max(...itm);

      if (bounds.max - bounds.min < options.step) options.step = bounds.max - bounds.min;
      const step = options.step > 0 ? (bounds.max - bounds.min) / options.step : 0;

      for (let i = 0; i < options.step + 1; i++)
        result.push( { label: Math.floor((i) * step + bounds.min) + "-" + Math.floor((i + 1) * step + bounds.min - 1), data: 0 });

      for (let i = 0; i < itm.length; i++) {
        if ( step == 0) 
          result[0].data++;
        else
          result[ Math.floor( (itm[i] - bounds.min) / step ) ].data++;
      }
    }
    else if ([ 'damageSeverity', 'mode', 'dca' ].indexOf(field) != -1) {
      let items = itm.reduce( (acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
      }, {});

      for (var k in items)
        result.push({ label: k, data: items[k] })
    }
  
    return result;
  }