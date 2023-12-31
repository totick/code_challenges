/**

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

const ROMAN_NUMERALS = new Set('MDCLXVI');

const isRomanNumber = (s) => {
  for (let v of s) {
    const isRomanCharacter = ROMAN_NUMERALS.has(v);
    if (!isRomanCharacter) return false;
  }
  return true;
};

/**
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  if (s.length < 1 || s.length > 15) throw new Error('String out of bounds.');
  const romanNumber = s.toUpperCase();
  if (!isRomanNumber(romanNumber)) throw new Error('Wrong format.');

  let index = romanNumber.length - 1;
  let count = 0;

  while (s[index] !== undefined) {
    if (romanNumber[index] === 'I') {
      count += 1;
    } else if (romanNumber[index] === 'V') {
      if (romanNumber[index - 1] === 'I') {
        count += 4;
        index--;
      } else {
        count += 5;
      }
    } else if (romanNumber[index] === 'X') {
      if (romanNumber[index - 1] === 'I') {
        count += 9;
        index--;
      } else {
        count += 10;
      }
    } else if (romanNumber[index] === 'L') {
      if (romanNumber[index - 1] === 'X') {
        count += 40;
        index--;
      } else {
        count += 50;
      }
    } else if (romanNumber[index] === 'C') {
      if (romanNumber[index - 1] === 'X') {
        count += 90;
        index--;
      } else {
        count += 100;
      }
    } else if (romanNumber[index] === 'D') {
      if (romanNumber[index - 1] === 'C') {
        count += 400;
        index--;
      } else {
        count += 500;
      }
    } else if (romanNumber[index] === 'M') {
      if (romanNumber[index - 1] === 'C') {
        count += 900;
        index--;
      } else {
        count += 1000;
      }
    }
    index--;
  }

  return count;
};

export { romanToInt };
