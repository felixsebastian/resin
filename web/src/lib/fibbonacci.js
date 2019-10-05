export default max => {
  var result = [1, 2];
  while (result[result.length - 1] < max) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
};
