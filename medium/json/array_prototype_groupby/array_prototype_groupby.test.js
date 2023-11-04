import './array_prototype_groupby';
import { it, expect } from 'vitest';

it.each([
  [
    [{ id: '1' }, { id: '1' }, { id: '2' }],
    (item) => item.id,
    {
      1: [{ id: '1' }, { id: '1' }],
      2: [{ id: '2' }]
    }
  ],
  [
    [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9]
    ],
    (list) => String(list[0]),
    {
      1: [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9]
      ]
    }
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    (n) => n > 5,
    {
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5]
    }
  ]
])('should', (arr, fn, expectedResult) => {
  //Act
  const result = arr.groupBy(fn);

  console.log(result);

  //Assert
  expect(result).toEqual(expectedResult);
});
