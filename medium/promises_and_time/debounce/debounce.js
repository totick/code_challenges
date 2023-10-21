/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 **/

const debounce = (fn, t) => {
  let timeoutId = undefined;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, t, ...args);
  };
};

export { debounce };
