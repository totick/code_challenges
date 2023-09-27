import { it, expect } from 'vitest';
import { reduce } from './array_reduce_transformation';

it('should reduce the array', () => {
  //Arrange
  const init = 0;
  const nums = [1, 2, 3, 4];
  const expectedResult = 10;
  const fn = (acc, curr) => acc + curr;

  //Act
  const result = reduce(nums, fn, init);

  //Assert
  expect(result).toBe(expectedResult);
});
