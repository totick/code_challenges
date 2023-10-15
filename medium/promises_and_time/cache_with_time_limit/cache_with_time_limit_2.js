export class TimeLimitedCache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key] === undefined ? -1 : this.cache[key].value;
  }

  set(key, value, duration) {
    const alreadyExists = this.get(key) !== -1;
    if (alreadyExists) clearTimeout(this.cache[key].timeoutId);

    this.cache[key] = { value };
    const timeoutId = setTimeout(() => delete this.cache[key], duration);
    this.cache[key].timeoutId = timeoutId;

    return alreadyExists;
  }

  count() {
    return Object.getOwnPropertyNames(this.cache).length;
  }
}
