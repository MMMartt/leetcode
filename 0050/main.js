/*Implement pow(x, n).


  Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  return Array.from(n.toString(2)).reduceRight(
    ([result, curr], each) => {
      return each === '0'
        ? [result, curr * curr]
        : each !== '-'
        ? [result * curr, curr * curr]
        : [1 / result, curr]
    },
    [1, x]
  )[0]
}

export default myPow
