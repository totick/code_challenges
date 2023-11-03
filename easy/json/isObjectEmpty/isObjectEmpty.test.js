import { it, expect } from 'vitest';
import { isObjectEmpty } from './isObjectEmpty';

it('should return true given an empty array', () => {
  // Arrange
  const input = [];
  const expectedResult = true;

  //Act
  const result = isObjectEmpty(input);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return false given an array with values', () => {
  // Arrange
  const input = [null, false, 0];
  const expectedResult = false;

  //Act
  const result = isObjectEmpty(input);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return true given an empty obj', () => {
  // Arrange
  const input = {};
  const expectedResult = true;

  //Act
  const result = isObjectEmpty(input);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return false given an obj with key value pairs', () => {
  // Arrange
  const input = { x: 5, y: 42 };
  const expectedResult = false;

  //Act
  const result = isObjectEmpty(input);

  //Assert
  expect(result).toBe(expectedResult);
});
