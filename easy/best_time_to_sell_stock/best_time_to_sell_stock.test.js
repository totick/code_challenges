import { maxProfit } from './best_time_to_sell_stock.js';
import { it, expect } from 'vitest';

it('should return 0 when there is no profit to make', () => {
  //Arrange
  const input = [7, 6, 4, 3, 1];
  const expectedResult = 0;

  //Act
  const result = maxProfit(input);

  //Assert
  expect(result).toBe(expectedResult);
});

it.each([[[7, 1, 5, 3, 6, 4], 5]])(
  'should return the value of the highest profit',
  (input, expectedResult) => {
    //Act
    const result = maxProfit(input);

    //Assert
    expect(result).toBe(expectedResult);
  }
);
