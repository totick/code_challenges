const timeLimit = (fn, t) => {
  return async (...args) => {
    const exceeded = new Promise((_, reject) =>
      setTimeout(reject, t, 'Time Limit Exceeded')
    );
    return Promise.race([exceeded, Promise.resolve(fn(...args))]);
  };
};

export { timeLimit };
