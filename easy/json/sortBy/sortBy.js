/**
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
const sortBy = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    const sortValue = fn(arr[i]);
    let added = false;
    let j = 0;
    while (!added) {
      if (j === result.length) {
        result.push(arr[i]);
        added = true;
      } else {
        const currentValue = fn(result[j]);
        if (sortValue <= currentValue) {
          result.splice(j, 0, arr[i]);
          added = true;
        }
      }
      j++;
    }
  }
  return result;
};

export { sortBy };
