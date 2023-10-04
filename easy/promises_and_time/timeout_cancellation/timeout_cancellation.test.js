import { cancellable } from './timeout_cancellation';
import { it, expect } from 'vitest';

it('should call a function with arguments after t milliseconds', async () => {
  //Arrange
  const result = [];
  const fn = (x) => x * 5;
  const t = 20;
  const logger = (startTime, fn, args) => {
    const endTime = performance.now();
    const elapsedTime = Math.floor(endTime - startTime);
    result.push({ elapsedTime, returnValue: fn(...args) });
  };
  const startTime = performance.now();
  const args = [startTime, fn, [2]];

  //Act
  cancellable(logger, args, t);
  await new Promise((r) => setTimeout(r, t + 50)); //Sleep 70ms

  //Assert

  expect(result[0].elapsedTime).toBeGreaterThanOrEqual(t - 1);
  expect(result[0].returnValue).toBe(2 * 5);
});

it('should call a function with arguments after t milliseconds even when cancelled after t milliseconds', async () => {
  //Arrange
  const result = [];
  const fn = (x) => x * 5;
  const t = 20;
  const logger = (startTime, fn, args) => {
    const endTime = performance.now();
    const elapsedTime = Math.floor(endTime - startTime);
    result.push({ elapsedTime, returnValue: fn(...args) });
  };
  const startTime = performance.now();
  const args = [startTime, fn, [2]];

  //Act
  const cancelExecution = cancellable(logger, args, t);
  await new Promise((r) => setTimeout(r, t + 50)); //Sleep 70ms
  cancelExecution();

  //Assert
  expect(result[0].elapsedTime).toBeGreaterThanOrEqual(t - 1);
  expect(result[0].returnValue).toBe(2 * 5);
});

it('should cancel the function call t milliseconds when function call canceled before t milliseconds', async () => {
  //Arrange
  const result = [];
  const fn = (x) => x * 5;
  const t = 100;
  const logger = (startTime, fn, args) => {
    const endTime = performance.now();
    const elapsedTime = Math.floor(endTime - startTime);
    result.push({ elapsedTime, returnValue: fn(...args) });
  };
  const startTime = performance.now();
  const args = [startTime, fn, [2]];

  //Act
  const cancelExecution = cancellable(logger, args, t);
  await new Promise((r) => setTimeout(r, 50)); //Sleep 50ms
  cancelExecution();

  //Assert
  expect(result[0]).toBeUndefined();
});
