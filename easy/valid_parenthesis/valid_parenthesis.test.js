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

it('should return true when input is a string without any parenthesis', () => {
  //Arrange
  const input = 'ab';
  const expectedResult = true;
  //Act
  const result = valid_parens(input);
  //Assert
  expect(result).toBe(expectedResult);
});

it('should return true when input is a string containing only valid parenthesis, example: () or [] or {}', () => {
  //Arrange
  const input = '()';
  const input2 = '[]';
  const input3 = '{}';
  const expectedResult = true;
  //Act
  const result = valid_parens(input);
  const result2 = valid_parens(input2);
  const result3 = valid_parens(input3);
  //Assert
  expect(result).toBe(expectedResult);
  expect(result2).toBe(expectedResult);
  expect(result3).toBe(expectedResult);
});

it('should return true when input is a string containing valid parenthesis and other content', () => {
  //Arrange
  const input =
    '[] is an array and {} is a literal object in javaScript (and maybe in other languages)';
  const input2 = 'Syntax example: ()[]{}';
  const input3 = 'Nested parenthesis types example: ([{}])';
  const expectedResult = true;

  //Act
  const result = valid_parens(input);
  const result2 = valid_parens(input2);
  const result3 = valid_parens(input3);

  //Assert
  expect(result).toBe(expectedResult);
  expect(result2).toBe(expectedResult);
  expect(result3).toBe(expectedResult);
});

it('should return false when parenthesis are closed in the wrong order', () => {
  //Arrange
  const input = '({)}';
  const input2 = ')()';
  const input3 = '}{';
  const input4 = '][';
  const expectedResult = false;

  //Act
  const result = valid_parens(input);
  const result2 = valid_parens(input2);
  const result3 = valid_parens(input3);
  const result4 = valid_parens(input4);

  //Assert
  expect(result).toBe(expectedResult);
  expect(result2).toBe(expectedResult);
  expect(result3).toBe(expectedResult);
  expect(result4).toBe(expectedResult);
});
