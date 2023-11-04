import { it, expect } from 'vitest';
import { chunk } from './chunkArray';

it('should chunk the array into subarrays containing one value each', () => {
  //Arrange
  const inputArr = [1, 2, 3, 4, 5];
  const inputSize = 1;
  const expectedResult = [[1], [2], [3], [4], [5]];

  //Act
  const result = chunk(inputArr, inputSize);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should chunk the array into subarrays containing two values each', () => {
  //Arrange
  const inputArr = [1, 2, 3, 4];
  const inputSize = 2;
  const expectedResult = [
    [1, 2],
    [3, 4]
  ];

  //Act
  const result = chunk(inputArr, inputSize);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should chunk the array into subarrays containing 3 values each except the last one', () => {
  //Arrange
  const inputArr = [1, 9, 6, 3, 2];
  const inputSize = 3;
  const expectedResult = [
    [1, 9, 6],
    [3, 2]
  ];

  //Act
  const result = chunk(inputArr, inputSize);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should chunk the array into one subarray when the inputSize value is larger than the inputArr content', () => {
  //Arrange
  const inputArr = [8, 5, 3, 2, 6];
  const inputSize = 6;
  const expectedResult = [[8, 5, 3, 2, 6]];

  //Act
  const result = chunk(inputArr, inputSize);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should chunk the array into one subarray when the inputSize value is larger than the inputArr content', () => {
  //Arrange
  const inputArr = [];
  const inputSize = 1;
  const expectedResult = [];

  //Act
  const result = chunk(inputArr, inputSize);

  //Assert
  expect(result).toEqual(expectedResult);
});
