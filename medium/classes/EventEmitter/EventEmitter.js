class EventEmitter {
  events = Object.create({});
  /**
   *
   * @param {String} eventName
   * @param {Function} callback
   * @returns {Object}
   */
  subscribe(eventName, callback) {
    if (eventName in this.events) this.events[eventName].push(callback);
    else this.events[eventName] = new Array(callback);
    const currentIndex = this.events[eventName].length - 1;

    return {
      callback,
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        );
      }
    };
  }

  /**
   *
   * @param {String} eventName
   * @param {Array} args
   * @returns {Array}
   */
  emit(eventName, args = []) {
    return this.events[eventName]
      ? this.events[eventName].map((callback) => callback(...args))
      : [];
  }
}

export { EventEmitter };
