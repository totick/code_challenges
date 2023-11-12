import { compactObject } from './compact_object';
import { it, expect } from 'vitest';

it.each([
  [[null, 0, false, 1], [1]],
  [{ a: null, b: [false, 1] }, { b: [1] }],
  [
    [null, 0, 5, [0], [false, 16]],
    [5, [], [16]]
  ]
])('should', (input, expectedResult) => {
  //Act
  const result = compactObject(input);
  console.log(result);
  //Assert
  expect(result).toEqual(expectedResult);
});
