// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

// Example 1:

// Input:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation:
// The repeated subarray with maximum length is [3, 2, 1].

// Note:

// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

/**
 * @type {number[][]}
 */
let dp = []

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} i
 * @param {number} j
 * @returns {number}
 */
const calc = (a, b, i, j) => {
  if (a[i] !== b[j]) return 0
  if (i === 0 || j === 0) return 1
  return dp[i - 1][j - 1] + 1
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
const findLength = (a, b) => {
  dp = Array.from(new Array(1000)).map(_ => [])
  let max = 0
  a.forEach((va, i) => {
    b.forEach((vb, j) => {
      const curr = (dp[i][j] = calc(a, b, i, j))
      max = max > curr ? max : curr
    })
  })
  return max
}

module.exports = findLength
