import { memoize } from './memoize';
import { it, expect } from 'vitest';

it('should call the sum function only once with same input values', () => {
  //Arrange
  const input1 = 2;
  const input2 = 3;
  const expectedResult = input1 + input2;
  const expectedCallCount = 1;
  const memoizeFn = memoize((a, b) => a + b);

  //Act
  memoizeFn(input1, input2);
  const result = memoizeFn(input1, input2);
  const callCount = memoizeFn();

  //Arrange
  expect(result).toBe(expectedResult);
  expect(callCount).toBe(expectedCallCount);
});

it('should call fibonacci function one time and return the correct result', () => {
  //Arrange
  const input = 5;
  const expectedResult = 8;
  const expectedCallCount = 1;
  const memoizeFn = memoize((input) => {
    if (input <= 1) return 1;
    let lastFib = 0;
    let currentFib = 1;
    while (currentFib <= input) {
      let temp = currentFib + lastFib;
      lastFib = currentFib;
      currentFib = temp;
    }
    return currentFib;
  });

  //Act
  const result = memoizeFn(5);
  const callCount = memoizeFn();

  //Assert
  expect(result).toBe(expectedResult);
  expect(callCount).toBe(expectedCallCount);
});

it('should call factorial function only with arguments that have not been used before, otherwise should return cached value', () => {
  //Arrange
  const input1 = 2;
  const input2 = 3;
  const expectedResult1 = 2;
  const expectedResult2 = 6;
  const expectedCallCount = 2;
  const memoizeFn = memoize((input) => {
    if (input <= 1) return 1;
    let result = input;
    for (let i = input - 1; i > 0; --i) {
      result *= i;
    }
    return result;
  });

  //Act
  const result1 = memoizeFn(input1);
  const result2 = memoizeFn(input2);
  memoizeFn(input1);
  const callCount1 = memoizeFn();
  memoizeFn(input2);
  const callCount2 = memoizeFn();

  //Assert
  expect(result1).toBe(expectedResult1);
  expect(result2).toBe(expectedResult2);
  expect(callCount1).toBe(expectedCallCount);
  expect(callCount2).toBe(expectedCallCount);
});
