/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns Array
 */
const join = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  const set = {};
  arr.forEach((v) => {
    set[v.id] = { ...set[v.id], ...v };
  });
  return Object.values(set);
};

export { join };
