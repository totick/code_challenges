import { createCounter } from './counter_2';
import { it, expect } from 'vitest';

it('should return and object with three functions (increment, decrement, reset)', () => {
  //Arrange

  //Act
  const result = createCounter();

  //Assert
  expect(result.increment).toBeDefined();
  expect(result.decrement).toBeDefined();
  expect(result.reset).toBeDefined();
});

it('should increment the given value with 1 when invoking the increment function', () => {
  //Arrange
  const counterObj = createCounter(0);
  const expected = 1;
  //Act
  const result = counterObj.increment();
  //Assert
  expect(result).toBe(expected);
});

it('should decrement the given value with 1 when invoking the decrement function', () => {
  //Arrange
  const counterObj = createCounter(0);
  const expected = -1;
  //Act
  const result = counterObj.decrement();
  //Assert
  expect(result).toBe(expected);
});

it('should reset the value to the init value after incrementing it and then invoking the reset function', () => {
  //Arrange
  const counterObj = createCounter(0);
  const expected = 0;
  //Act
  counterObj.increment();
  const result = counterObj.reset();

  //Assert
  expect(result).toBe(expected);
});

it('should reset the value to the init value after decrementing it and then invoking the reset function', () => {
  //Arrange
  const counterObj = createCounter(0);
  const expected = 0;
  //Act
  counterObj.decrement();
  const result = counterObj.reset();

  //Assert
  expect(result).toBe(expected);
});

/*
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
*/
it('should receive the expected values from the steps in the comments above', () => {
  //Arrange
  const counterObj = createCounter(0);
  const expected1 = 1;
  const expected2 = 2;
  const expected3 = 1;
  const expected4 = 0;
  const expected5 = 0;

  //Act
  const result1 = counterObj.increment();
  const result2 = counterObj.increment();
  const result3 = counterObj.decrement();
  const result4 = counterObj.reset();
  const result5 = counterObj.reset();

  //Assert
  expect(result1).toBe(expected1);
  expect(result2).toBe(expected2);
  expect(result3).toBe(expected3);
  expect(result4).toBe(expected4);
  expect(result5).toBe(expected5);
});
