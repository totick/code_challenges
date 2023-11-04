export default Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((v) => {
    const key = fn(v);
    if (!(key in result)) result[key] = [];
    result[key].push(v);
  });
  return result;
};
