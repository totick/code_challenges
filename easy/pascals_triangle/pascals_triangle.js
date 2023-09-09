/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

Example 3:
Input: numRows = 2
Output: [[1],[1,1]]
 

Constraints:

1 <= numRows <= 30
*/

const createTriangle = (numRows) => {
  const triangle = [];
  for (let rownr = 0; rownr < numRows; rownr++) {
    const row = [];
    triangle.push(row);
    for (let colnr = 0; colnr <= rownr; colnr++) {
      if (rownr <= 1) {
        row.push(1);
      } else {
        if (colnr === 0 || colnr === rownr) {
          row.push(1);
        } else {
          const value1 = triangle[rownr - 1][colnr - 1];
          const value2 = triangle[rownr - 1][colnr];
          row.push(value1 + value2);
        }
      }
    }
  }

  return triangle;
};

export { createTriangle };
