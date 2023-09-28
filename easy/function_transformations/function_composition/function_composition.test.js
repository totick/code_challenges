import { it, expect } from 'vitest';
import { compose } from './function_composition';

it.each([
  [[(x) => x + 1, (x) => x * x, (x) => 2 * x], 4, 65],
  [[(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 1, 1000],
  [[], 42, 42]
])(
  'should calculate the functions composition',
  (functionInputs, input2, expectedResult) => {
    //Arrange
    const f = compose(functionInputs);

    //Act
    const result = f(input2);

    //Assert
    expect(result).toBe(expectedResult);
  }
);
