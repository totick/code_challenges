class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  toString() {
    return `[${this.arr.toString()}]`;
  }

  valueOf() {
    return this.arr.reduce((prev, curr) => prev + curr, 0);
  }
}

export { ArrayWrapper };
