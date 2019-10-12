export default points => {
  const totals = points.reduce(
    (result, point) => {
      result.latitude += point.latitude;
      result.longitude += point.longitude;
      return result;
    },
    { latitude: 0, longitude: 0 }
  );

  return {
    latitude: totals.latitude / points.length,
    longitude: totals.longitude / points.length
  };
};
