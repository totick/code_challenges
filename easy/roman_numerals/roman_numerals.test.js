import { it, expect } from 'vitest';
import { romanToInt } from './roman_numerals';

it('should throw an Error when string is less than 1 character', () => {
  //Arrange
  const input = '';
  const resultFn = () => romanToInt(input);

  //Assert
  expect(resultFn).toThrow();
});

it('should throw an Error when string is more than 15 characters', () => {
  //Arrange
  const input = 'M'.repeat('16');
  const resultFn = () => romanToInt(input);

  //Assert
  expect(resultFn).toThrow();
});
