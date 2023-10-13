/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): 
  accepts an integer key, an integer value, and a duration in milliseconds. 
  Once the duration has elapsed, the key should be inaccessible. 
  The method should return true if the same un-expired key already exists and false otherwise. 
  Both the value and duration should be overwritten if the key already exists.

get(key): 
  if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): 
  returns the count of un-expired keys.
*/

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

import { it, expect } from 'vitest';
import { TimeLimitedCache } from './cache_with_time_limit';

it('should return -1 if no un-expired key exists', () => {
  //Arrange
  const key = 1;
  const cache = new TimeLimitedCache();
  const expectedResult = -1;

  //Act
  const result = cache.get(key);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return false when adding a key that does not already exists', () => {
  //Arrange
  const key = 1;
  const value = 0;
  const cache = new TimeLimitedCache();
  const expectedResult = false;

  //Act
  const result = cache.set(key, value);

  //Assert
  expect(result).toBe(expectedResult);
});
