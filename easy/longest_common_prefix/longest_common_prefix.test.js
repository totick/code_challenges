import { it, expect } from 'vitest';
import { longestCommonPrefix } from './longest_common_prefix';

it.each([
  [['a', 'a'], 'a'],
  [['flower', 'flow', 'flight'], 'fl'],
  [['dog', 'racecar', 'car'], ''],
  [['', ''], '']
])('should return longest common prefix', (strs, expected) => {
  //Act
  const result = longestCommonPrefix(strs);
  //Assert
  expect(result).toBe(expected);
});
