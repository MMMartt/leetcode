// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

/**
 * @type {number[][]}
 */
let cachedResults = []

// let cached = 0
// let calculated = 0
const cacheResult = (i, j, v) => cnt => {
  if (isNaN(cachedResults[i][j])) {
    // calculated++
    // console.log('calculating', i, j, v)
    cachedResults[i][j] = v
  }
  return cnt(v)
}
/**
 *
 * @param {string} a
 * @param {string} b
 * @param {number} i
 * @param {number} j
 * @param {any} cnt
 * @returns {number}
 */
const calc = (a, b, i, j, cnt) => {
  // console.log('called:', i, j)
  if (i === 0) return cnt.bind(null, 0)
  if (j === 0) return cnt.bind(null, 0)
  const calculated = cachedResults[i][j]
  if (!isNaN(calculated)) {
    // console.log('cached', i, j, calculated)
    // cached++
    return cnt.bind(null, calculated)
  }
  if (a[i - 1] === b[j - 1])
    return calc.bind(null, a, b, i - 1, j - 1, v =>
      cacheResult(i - 1, j - 1, v)(cnt.bind(null, v + 1))
    )
  return calc.bind(null, a, b, i - 1, j, v1 =>
    cacheResult(
      i - 1,
      j,
      v1
    )(
      calc.bind(null, a, b, i, j - 1, v2 =>
        cacheResult(i, j - 1, v2)(cnt.bind(null, Math.max(v1, v2)))
      )
    )
  )
}

const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}
const rCalc = trampoline(calc)

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const longestCommonSubsequence = (a, b) => {
  cachedResults = Array.from(new Array(1000)).map(_ => [])

  const c = rCalc(a, b, a.length, b.length, a => a)
  // console.log(cachedResults, calculated, cached)
  return c
}

export default longestCommonSubsequence
