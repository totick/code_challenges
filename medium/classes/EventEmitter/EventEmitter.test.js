import { EventEmitter } from './EventEmitter';
import { it, expect } from 'vitest';

it('should subscribe an event and emit the event', () => {
  //Arrange
  const eventName = 'onClick';
  const callback = () => 15;
  const emitter = new EventEmitter();
  const expectedResult = [15];

  //Act
  emitter.subscribe(eventName, callback);
  const result = emitter.emit(eventName);

  //Assert
  expect(result).toEqual(expectedResult);
});

it("should be able to send arguments to an event's callback", () => {
  //Arrange
  const eventName = 'onEnter';
  const callback = (a, b) => a * b;
  const args = [3, 4];
  const emitter = new EventEmitter();
  const expectedResult = [callback(...args)];

  //Act
  emitter.subscribe(eventName, callback);
  const result = emitter.emit(eventName, args);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should be feasible to subscribe many events with its own callback', () => {
  //Arrange
  const eventName1 = 'onClick';
  const eventName2 = 'onLoad';
  const callback1 = () => 'clicked';
  const callback2 = () => 'loaded';
  const emitter = new EventEmitter();
  const expectedResult1 = ['clicked'];
  const expectedResult2 = ['loaded'];

  //Act
  emitter.subscribe(eventName1, callback1);
  emitter.subscribe(eventName2, callback2);
  const result1 = emitter.emit(eventName1);
  const result2 = emitter.emit(eventName2);

  //Assert
  expect(result1).toEqual(expectedResult1);
  expect(result2).toEqual(expectedResult2);
});

it('should be feasible to attack multiple callbacks to one event', () => {
  //Arrange
  const eventName = 'onClick';
  const callback1 = () => 1;
  const callback2 = () => 2;
  const emitter = new EventEmitter();
  const expectedResult = [1, 2];

  //Act
  emitter.subscribe(eventName, callback1);
  emitter.subscribe(eventName, callback2);
  const result = emitter.emit(eventName);

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should unsubscribe an existing event', () => {
  //Arrange
  const eventName = 'onClick';
  const callback = () => 15;
  const emitter = new EventEmitter();
  const expectedResult = [];

  //Act
  const subscription = emitter.subscribe(eventName, callback);
  subscription.unsubscribe(eventName);
  const result = emitter.emit(eventName);

  //Assert
  expect(result).toEqual(expectedResult);
});

it(`should do the actions below: 
actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], 
values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[7]]]
`, () => {
  //Arrange
  const eventName = 'firstEvent';
  const callback1 = (x) => x + 1;
  const callback2 = (x) => x + 2;
  const emitter = new EventEmitter();

  //Act
  const result1 = emitter.emit();
  const subscription1 = emitter.subscribe(eventName, callback1);
  const subscription2 = emitter.subscribe(eventName, callback2);
  subscription1.unsubscribe();
  const result2 = emitter.emit('firstEvent', [5]);

  //Assert
  expect(result1).toEqual([]);
  expect(result2).toEqual([7]);
});
