/*Write a program to check whether a given number is an ugly number.

  Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note:

  1 is typically treated as an ugly number.
  Input is within the 32-bit signed integer range.*/
/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  let f2 = true,
    f3 = true
  while (num !== 0 && num !== 1 && num !== 3 && num !== 5 && num !== 2) {
    if (f2 && num % 2 === 0) {
      num = num / 2
      continue
    }
    f2 = false
    if (f3 && num % 3 === 0) {
      num = num / 3
      continue
    }
    if (num % 5 === 0) {
      num = num / 5
    } else {
      return false
    }
  }
  return num !== 0
}
// ma de
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isUgly = function(num) {
//   if (num <= 0) {
//     return false;
//   }
//   for (var i of [2, 3, 5]) {
//     while (num % i === 0) {
//       num = num / i;
//     }
//   }
//
//   return num === 1;
//
// };

module.exports = isUgly
