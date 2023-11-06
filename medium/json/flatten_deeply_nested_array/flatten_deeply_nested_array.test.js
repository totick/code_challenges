import { flat } from './flatten_deeply_nested_array';
import { it, expect } from 'vitest';

it('should return a copy of the same array when n = 0', () => {
  //Arrange
  const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
  const n = 0;
  const expectedResult = [...arr];

  //Act
  const result = flat(arr, n);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should return a copy of a flattened array 1 level when n = 1', () => {
  //Arrange
  const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
  const n = 1;
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];

  //Act
  const result = flat(arr, n);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should return a copy of a flattened array 2 levels when n = 2', () => {
  //Arrange
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15]
  ];
  const n = 2;
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //Act
  const result = flat(arr, n);

  //Assert
  expect(result).toEqual(expectedResult);
});
