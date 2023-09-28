import { once } from './allow_one_function_call';
import { it, expect } from 'vitest';

it('should return undefined after invoking result function once', () => {
  //Arrange
  const input = (x, y) => x * y;
  const fn = once(input);
  const expectedResult1 = 12;

  //Act
  const result1 = fn(3, 4);
  const result2 = fn(3, 4);
  const result3 = fn(3, 4);

  //Assert
  expect(result1).toBe(expectedResult1);
  expect(result2).toBeUndefined();
  expect(result3).toBeUndefined();
});
