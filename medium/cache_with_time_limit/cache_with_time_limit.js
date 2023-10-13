export const TimeLimitedCache = function () {
  this.cache = Object.create({});
};

/**
 *
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in milliseconds
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const response = this.get(key) === -1 ? false : true;
  return response;
};

TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache[key]) return -1;
};

TimeLimitedCache.prototype.count = function () {};