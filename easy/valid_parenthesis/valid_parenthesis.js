/**
 * 
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

const valid_parens = (s) => {
  if (s.length <= 1 || s.length >= Math.pow(10, 4))
    throw new Error('String out of bounds.');

  const OPEN_PARENTHESES = '([{';
  const CLOSE_PARENTHESES = ')]}';
  let foundedParentheses = [];

  for (let char of s) {
    if (OPEN_PARENTHESES.includes(char)) {
      foundedParentheses.push(char);
    } else if (CLOSE_PARENTHESES.includes(char)) {
      let openEquivalent = undefined;
      switch (char) {
        case ')':
          openEquivalent = '(';
          break;
        case ']':
          openEquivalent = '[';
          break;
        default:
          openEquivalent = '{';
          break;
      }
      if (
        foundedParentheses.length > 0 &&
        foundedParentheses[foundedParentheses.length - 1] === openEquivalent
      ) {
        foundedParentheses.pop();
      } else {
        return false;
      }
    }
  }
  return foundedParentheses.length === 0 ? true : false;
};

export { valid_parens };
