/**
 *
 * @param {Object|Array} obj
 * @returns {Object|Array}
 */
const compactObject = (obj) => {
  let result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === 'object')
      Array.isArray(result)
        ? result.push(compactObject(obj[key]))
        : (result[key] = compactObject(obj[key]));
    else if (Boolean(obj[key]) !== false) {
      if (Array.isArray(result)) result.push(obj[key]);
      else result[key] = obj[key];
    }
  }

  return result;
};

export { compactObject };
