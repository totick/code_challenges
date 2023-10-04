import { cancellable } from './interval_cancellation';
import { it, expect } from 'vitest';

it('should call a function every t milliseconds until function is cancelled', async () => {
  //Arrange
  const result = [];
  const t = 35;
  const cancelT = 190;
  const functionInput = 5;
  const fn = (x) => x * 2;
  const startTime = performance.now();
  const args = [fn, startTime, [functionInput]];
  const logger = (fn, startTime, args) => {
    const elapsedTime = Math.ceil(performance.now() - startTime);
    result.push({ elapsedTime, returnValue: fn(...args) });
  };

  //Act
  const cancelExecution = cancellable(logger, args, t);
  await new Promise((r) =>
    setTimeout(() => {
      cancelExecution();
      r();
    }, cancelT)
  ); // Cancel execution after 190 ms

  //Assert
  expect(result[0].returnValue).toBe(2 * functionInput);
  expect(result.length).toBeGreaterThanOrEqual(6);
});
