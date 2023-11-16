import { ArrayWrapper } from './array_wrapper';
import { it, expect } from 'vitest';

it.each([
  [[1, 2], [3, 4], 10],
  [[], [], 0]
])(
  'should return the total of the sum of two integer arrays',
  (input1, input2, expectedResult) => {
    const wrapper1 = new ArrayWrapper(input1);
    const wrapper2 = new ArrayWrapper(input2);

    //Act
    const result = wrapper1 + wrapper2;

    //Assert
    expect(result).toBe(expectedResult);
  }
);

it('should return the string representation of an array e.g "[1, 2]"', () => {
  //Arrange
  const arr1 = [1, 2];
  const wrapper = new ArrayWrapper(arr1);
  const expectedResult = '[1,2]';

  //Act
  const result = String(wrapper);

  //Assert
  expect(result).toBe(expectedResult);
});
