export default filters =>
  filters.map(filter => ({
    ...filter,
    value: btoa(JSON.stringify(filter.value))
  }));
