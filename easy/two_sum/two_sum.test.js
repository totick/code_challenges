import { it, expect } from 'vitest';
import { two_sum } from './two_sum';

it('should return an array with [0,1]', () => {
  //Arrange
  const numbers = [1, 4, 5];
  const target = 5;
  const expectedResult = [0, 1];

  //Act
  const result = two_sum(numbers, target);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should return an array with [1,2]', () => {
  //Arrange
  const numbers = [1, 4, 5];
  const target = 9;
  const expectedResult = [1, 2];

  //Act
  const result = two_sum(numbers, target);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should return an array with [0,4]', () => {
  //Arrange
  const numbers = [1, 4, 5, 11, 20];
  const target = 21;
  const expectedResult = [0, 4];

  //Act
  const result = two_sum(numbers, target);

  //Assert
  expect(result).toEqual(expectedResult);
});
