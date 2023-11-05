import { it, expect } from 'vitest';
import { join } from './join_2_arrays_by_id';

it('should concatenate array 1 with array 2', () => {
  //Arrange
  const arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 }
  ];
  const arr2 = [{ id: 3, x: 5 }];
  const expectedResult = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
    { id: 3, x: 5 }
  ];

  //Act
  const result = join(arr1, arr2);

  console.log(result);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should concatenate array 1 with array 2 and override with values of array 2 having the same id as array 1', () => {
  //Arrange
  const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
  ];
  const arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
  ];

  const expectedResult = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
  ];

  //Act
  const result = join(arr1, arr2);

  console.log(result);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should concatenate array 1 with array 2 and merge values of array 2 having the same id as array 1', () => {
  //Arrange
  const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
  const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

  const expectedResult = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];

  //Act
  const result = join(arr1, arr2);

  console.log(result);

  //Assert
  expect(result).toEqual(expectedResult);
});
