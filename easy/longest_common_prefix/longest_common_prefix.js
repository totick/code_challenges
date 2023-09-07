/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

/**
 *
 * @param {string[]} strArray
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
  let result = '';
  let isEqual = true;
  let index = 0;

  do {
    let chr = strs[0][index];
    for (let str of strs) {
      if (str[index] === undefined || str[index] !== chr) {
        isEqual = false;
        break;
      }
    }
    if (isEqual) {
      result = result + chr;
      index++;
    }
  } while (isEqual);

  return result;
};

export { longestCommonPrefix };
