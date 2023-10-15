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
// import { TimeLimitedCache } from './cache_with_time_limit';
import { TimeLimitedCache } from './cache_with_time_limit_2';

/**
 * Helper function for waiting an amount of time.
 * @param {number} duration in milliseconds
 * @returns undefined
 */
const wait = async (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

it('should return -1 when key does not exist', () => {
  //Arrange
  const key = 1;
  const cache = new TimeLimitedCache();
  const expectedResult = -1;

  //Act
  const result = cache.get(key);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return false when adding a new key', () => {
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

it('should return associated value from existing key', () => {
  //Arrange
  const key = 1;
  const value = 2;
  const cache = new TimeLimitedCache();
  const expectedResult = value;

  //Act
  const response = cache.set(key, value);
  const result = cache.get(key);

  //Assert
  expect(response).toBeFalsy();
  expect(result).toBe(expectedResult);
});

it('should overwrite existing key with new value and response should be true', () => {
  //Arrange
  const key = 1;
  const firstValue = 2;
  const secondValue = 3;
  const cache = new TimeLimitedCache();
  const expectedResult = secondValue;

  //Act
  cache.set(key, firstValue);
  const response = cache.set(key, secondValue);
  const result = cache.get(key);

  //Assert
  expect(response).toBeTruthy();
  expect(result).toBe(expectedResult);
});

it('should return -1 when getting expired key', async () => {
  //Arrange
  const key = 1;
  const value = 2;
  const duration = 100;
  const expectedResult = -1;
  const cache = new TimeLimitedCache();

  //Act
  cache.set(key, value, duration);
  await wait(300);
  const result = cache.get(key);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return correct value when getting it from an un-expired key', async () => {
  //Arrange
  const key = 1;
  const value = 2;
  const duration = 3000;
  const expectedResult = value;
  const cache = new TimeLimitedCache();

  //Act
  cache.set(key, value, duration);
  await wait(1000);
  const result = cache.get(key);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return correct count of un-expired keys', async () => {
  //Arrange
  const key1 = 1;
  const value1 = 2;
  const key2 = 2;
  const value2 = 3;
  const key3 = 3;
  const value3 = 4;
  const key4 = 4;
  const value4 = 5;
  const duration1 = 300;
  const duration2 = 1500;
  const expectedResult = 2;
  const cache = new TimeLimitedCache();

  //Act
  cache.set(key1, value1, duration1);
  cache.set(key2, value2, duration2);
  cache.set(key3, value3, duration1);
  cache.set(key4, value4, duration2);
  await wait(700);
  const result = cache.count();

  //Assert
  expect(result).toBe(expectedResult);
});
