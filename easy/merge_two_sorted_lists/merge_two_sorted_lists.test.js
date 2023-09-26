import { it, expect } from 'vitest';
import { mergeTwoLists, addNode, ListNode } from './merge_two_sorted_lists';

it('should add the node to the end of the list', () => {
  //Arrange
  const list = new ListNode();
  const node = new ListNode(1);

  //Act
  addNode(node, list);

  //Assert
  expect(list.next).toBe(node);
});

it('should add the node between the first and the second node of the list', () => {
  //Arrange
  const list = new ListNode(0, new ListNode(3));
  const node = new ListNode(2);

  //Act
  addNode(node, list);

  //Assert
  expect(list.next).toBe(node);
});

it('should add the node between the second and third node of the list', () => {
  //Arrange
  const list = new ListNode(0, new ListNode(1, new ListNode(3)));
  const node = new ListNode(3);

  //Act
  addNode(node, list);

  //Assert
  expect(list.next.next).toBe(node);
});

it('should merge the two sorted lists into one sorted list', () => {
  //Arrange
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  //Act
  const result = mergeTwoLists(list1, list2);
  const expectedResult = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
    )
  );

  //Assert
  expect(result).toEqual(expectedResult);
});

it('should return and empty list', () => {
  //Arrange
  const list1 = {};
  const list2 = {};

  //Act
  const result = mergeTwoLists(list1, list2);

  //Assert
  expect(Object.keys(result).length).toEqual(0);
});

it('should return content from list1', () => {
  //Arrange
  const list1 = new ListNode(0);
  const list2 = {};
  const expectedResult = list1;

  //Act
  const result = mergeTwoLists(list1, list2);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return content from list2', () => {
  //Arrange
  const list2 = new ListNode(0);
  const list1 = {};
  const expectedResult = list2;

  //Act
  const result = mergeTwoLists(list1, list2);

  //Assert
  expect(result).toBe(expectedResult);
});
