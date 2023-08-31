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

it('should throw an Error when input is not a roman number', () => {
  //Arrange
  const input = 'y';
  const resultFn = () => romanToInt(input);

  //Assert
  expect(resultFn).toThrow();
});

// it('should return correct integer value', () => {
//   //Arrange
//   const input = 'I';
//   const input2 = 'II';
//   const input3 = 'III';
//   const expectedResult = 1;
//   const expectedResult2 = 2;
//   const expectedResult3 = 3;

//   //Act
//   const result = romanToInt(input);
//   const result2 = romanToInt(input2);
//   const result3 = romanToInt(input3);

//   //Assert
//   expect(result).toBe(expectedResult);
//   expect(result2).toBe(expectedResult2);
//   expect(result3).toBe(expectedResult3);
// });

it.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['IV', 4],
  ['V', 5],
  ['VI', 6],
  ['VII', 7],
  ['VIII', 8],
  ['IX', 9],
  ['X', 10],
  ['XI', 11],
  ['XIV', 14],
  ['XV', 15],
  ['XVI', 16],
  ['XIX', 19],
  ['XX', 20],
  ['XXX', 30],
  ['XL', 40],
  ['XLI', 41],
  ['XLV', 45],
  ['XLIX', 49],
  ['L', 50],
  ['LI', 51],
  ['LV', 55],
  ['LX', 60],
  ['XC', 90],
  ['C', 100],
  ['CC', 200],
  ['CCC', 300],
  ['CD', 400],
  ['D', 500],
  ['DC', 600],
  ['DCC', 700],
  ['DCCC', 800],
  ['CM', 900],
  ['M', 1000],
  ['MCMXCIV', 1994]
])('Should convert any roman numeral to integer', (input, expectedResult) => {
  //Act
  const result = romanToInt(input);

  //Assert
  expect(result).toBe(expectedResult);
});
