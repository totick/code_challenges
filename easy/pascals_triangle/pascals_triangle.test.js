import { it, expect } from 'vitest';
import { createTriangle } from './pascals_triangle';

it.each([
  [1, [[1]]],
  [2, [[1], [1, 1]]],
  [3, [[1], [1, 1], [1, 2, 1]]],
  [4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]]
])('should return correct pascal triangle', (input, expectedResult) => {
  //Act
  const result = createTriangle(input);

  //Assert
  expect(result).toEqual(expectedResult);
});
