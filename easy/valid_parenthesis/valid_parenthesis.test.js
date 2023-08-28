import { valid_parens } from './valid_parenthesis';
import { it, expect } from 'vitest';

it('should throw an error when string length is less than 2 characters', () => {
  //Arrange
  const input = '(';
  const resultFn = () => {
    valid_parens(input);
  };

  //Assert
  expect(resultFn).toThrow();
});

it('should throw an error when string length is more than 139 characters', () => {
  //Arrange
  const input = '{'.repeat(140);
  const resultFn = () => valid_parens(input);

  //Assert
  expect(resultFn).toThrow();
});
