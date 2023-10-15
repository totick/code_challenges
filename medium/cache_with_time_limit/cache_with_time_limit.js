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

  if (response) clearTimeout(this.cache[key].timeoutId);

  this.cache[key] = { value };
  const timeoutId = setTimeout(() => delete this.cache[key], duration);
  this.cache[key].timeoutId = timeoutId;

  return response;
};

/**
 *
 * @param {number} key
 * @return {number} associated value with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache[key] === undefined ? -1 : this.cache[key].value;
};

/**
 *
 * @return {number} number of un-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.getOwnPropertyNames(this.cache).length;
};
