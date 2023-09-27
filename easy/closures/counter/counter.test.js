import { it, expect } from 'vitest';
import { counter } from './counter';

it.each([
  [10, 10],
  [0, 0],
  [-1, -1]
])(
  'should return a counter function that initially returns the value n',
  (input, expectedResult) => {
    //Arrange
    const counterFunction = counter(input);

    //Act
    const result = counterFunction();

    //Assert
    expect(result).toBe(expectedResult);
  }
);

it.each([
  [10, [10, 11, 12, 13]],
  [-2, [-2, -1, 0, 1]]
])(
  'should return a counter function that initially returns the value n and three other sequential values after calling the counter function four times',
  (input, expectedResult) => {
    //Arrange
    const counterFunction = counter(input);
    const [expected1, expected2, expected3, expected4] = [...expectedResult];

    //Act
    const result1 = counterFunction();
    const result2 = counterFunction();
    const result3 = counterFunction();
    const result4 = counterFunction();

    //Assert
    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
    expect(result4).toBe(expected4);
  }
);
