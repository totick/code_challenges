import { it, expect } from 'vitest';
import { sortBy } from './sortBy';

it.each([
  [[5, 4, 1, 2, 3], (x) => x, [1, 2, 3, 4, 5]],
  [
    [{ x: 1 }, { x: 0 }, { x: -1 }],
    (v) => v.x,
    [{ x: -1 }, { x: 0 }, { x: 1 }]
  ],
  [
    [
      [3, 4],
      [5, 2],
      [10, 1]
    ],
    (x) => x[1],
    [
      [10, 1],
      [5, 2],
      [3, 4]
    ]
  ]
])(
  'should return an array sorted according to the value returned by input function',
  (input, fn, expectedResult) => {
    //Act
    const result = sortBy(input, fn);

    //Assert
    expect(result).toEqual(expectedResult);
  }
);
