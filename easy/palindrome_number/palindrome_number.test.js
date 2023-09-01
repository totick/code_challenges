import { it, expect } from 'vitest';
import { isPalindrome } from './palindrome_number';

it('should return true on palindrome value', () => {
  //Arrange
  const input = 121;
  const expectedResult = true;

  //Act
  const result = isPalindrome(input);

  //Arrange
  expect(result).toBe(expectedResult);
});

it('should return false on negative value', () => {
  //Arrange
  const input = -121;
  const expectedResult = false;

  //Act
  const result = isPalindrome(input);

  //Arrange
  expect(result).toBe(expectedResult);
});

it('should return false on non palindrome value', () => {
  //Arrange
  const input = 10;
  const expectedResult = false;

  //Act
  const result = isPalindrome(input);

  //Arrange
  expect(result).toBe(expectedResult);
});
