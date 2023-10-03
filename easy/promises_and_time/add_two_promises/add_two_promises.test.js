import { addTwoPromises } from './add_two_promises';
import { it, expect } from 'vitest';

it('should return a promise that resolve with the sum of the two promises received as input', () => {
  //Arrange
  const input1 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 200);
  });
  const input2 = new Promise((resolve) => {
    setTimeout(() => resolve(5), 60);
  });

  //Assert
  expect(addTwoPromises(input1, input2)).resolves.toBe(7);
});

it('should return a promise that resolve with the sum of the two promises received as input', async () => {
  //Arrange
  const input1 = new Promise((resolve) => setTimeout(() => resolve(10), 3000));
  const input2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));
  const expectedResult = -2;

  //Act
  const result = await addTwoPromises(input1, input2);

  //Assert
  expect(result).toBe(expectedResult);
});
