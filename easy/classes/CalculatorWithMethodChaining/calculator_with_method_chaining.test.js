import { Calculator } from './calculator_with_method_chaining';
import { it, expect } from 'vitest';

it('should add, subtract and return result', () => {
  //Arrange
  const expectedResult = 8;

  //Act
  const result = new Calculator(10).add(5).subtract(7).getResult();

  //Assert
  expect(result).toBe(expectedResult);
});

it('should multiply, power and return result', () => {
  //Arrange
  const expectedResult = 100;

  //Act
  const result = new Calculator(2).multiply(5).power(2).getResult();

  //Assert
  expect(result).toBe(expectedResult);
});

it('should throw an error when dividing by 0', () => {
  //Arrange
  const fn = () => new Calculator(20).divide(0).getResult();

  //Assert
  expect(fn).toThrowError('Division by zero is not allowed');
});
