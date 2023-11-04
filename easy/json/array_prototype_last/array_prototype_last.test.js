import './array_prototype_last';
import { it, expect } from 'vitest';

it('should return the last value of the array', () => {
  //Arrange
  const arr = [null, {}, 3];
  const expectedResult = 3;

  //Act
  const result = arr.last();

  expect(result).toBe(expectedResult);
});

it('should return -1 on empty array', () => {
  //Arrange
  const arr = [];
  const expectedResult = -1;

  //Act
  const result = arr.last();

  expect(result).toBe(expectedResult);
});
