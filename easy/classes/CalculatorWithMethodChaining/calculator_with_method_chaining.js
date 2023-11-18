class Calculator {
  constructor(val) {
    this.total = val;
  }

  add(value) {
    this.total += value;
    return this;
  }

  subtract(value) {
    this.total -= value;
    return this;
  }

  multiply(value) {
    this.total *= value;
    return this;
  }

  divide(value) {
    if (value === 0) throw new Error('Division by zero is not allowed');
    this.total /= value;
    return this;
  }

  power(value) {
    this.total = this.total ** value;
    return this;
  }

  getResult() {
    return this.total;
  }
}

export { Calculator };
