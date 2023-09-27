/*
Given an integer n, return a counter function. 
This counter function initially returns n 
and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

/**
 *
 * @param {number} n
 * @returns {number}
 */
const counter = function (n) {
  let x = n;
  return function () {
    const result = x;
    x++;
    return result;
  };
};

export { counter };
