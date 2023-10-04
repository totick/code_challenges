/**
 *
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @returns {Function}
 */
const cancellable = (fn, args, t) => {
  fn(...args); // Call immediately
  const intervalId = setInterval(() => fn(...args), t);
  return function () {
    clearInterval(intervalId);
  };
};

export { cancellable };