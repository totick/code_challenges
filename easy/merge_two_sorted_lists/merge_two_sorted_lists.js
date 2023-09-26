/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 *
 * @param {number} val
 * @param {ListNode} next
 */
const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

/**
 *
 * @param {ListNode} node
 * @param {ListNode} list
 */
export function addNode(node, list) {
  if (list.next === undefined) {
    list.val = node.val;
    list.next = node.next;
  } else if (list.next === null) {
    list.next = node;
  } else if (node.val <= list.next.val) {
    let temp = list.next;
    list.next = node;
    node.next = temp;
  } else {
    addNode(node, list.next);
  }
}

/**
 *
 * @param {NodeList} list1
 * @param {NodeList} list2
 */
const mergeTwoLists = (list1, list2) => {
  if (Object.keys(list1).length === 0) {
    return list2;
  }
  if (Object.keys(list2).length === 0) {
    return list1;
  }

  if (Object.keys(list1).length === 0 && Object.keys(list1).length === 0) {
    return {};
  }

  let resultList = new ListNode();
  resultList.val = undefined;
  resultList.next = undefined;
  let lists = new Array(list1, list2);

  for (let list of lists) {
    while (list !== null) {
      addNode(new ListNode(list.val), resultList);
      list = list.next;
    }
  }

  console.log(resultList);
  return resultList;
};

export { mergeTwoLists, ListNode };
