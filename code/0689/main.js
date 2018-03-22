/*In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

  Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

  Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

  Example:
Input: [1,2,1,2,6,7,5,1], 2
Output: [0, 3, 5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
  We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
  Note:
nums.length will be between 1 and 20000.
nums[i] will be between 1 and 65535.
k will be between 1 and floor(nums.length / 3).*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarrays = (nums, k) => {
  const INDEXES = 0
  const VALUES = 1
  const oneSets = []
  const twoSets = []
  const threeSets = []
  let current = 0, oneIndex = 0, twoIndex = 0, threeIndex = 0
  nums.forEach((v, i) => {
    current = current + v
    if (i >= k - 1) {
      if (oneSets[0] === undefined || current > oneSets[oneIndex - 1][VALUES]) {
        oneSets.push([[oneIndex], current])
      } else {
        oneSets.push(oneSets[oneIndex - 1])
      }
      if (i >= 2 * k - 1) {
        if (twoSets[0] === undefined || current + oneSets[oneIndex - k][VALUES] > twoSets[twoIndex - 1][VALUES]) {
          twoSets.push([[...oneSets[oneIndex- k][INDEXES], oneIndex], current + oneSets[oneIndex - k][VALUES]])
        } else {
          twoSets.push(twoSets[twoIndex - 1])
        }
        if (i >= 3 * k - 1) {
          if (threeSets[0] === undefined || current + twoSets[twoIndex - k][VALUES] > threeSets[threeIndex - 1][VALUES]) {
            threeSets.push([[...twoSets[twoIndex - k][INDEXES], oneIndex], current + twoSets[twoIndex - k][VALUES]])
          } else {
            threeSets.push(threeSets[threeIndex - 1])
          }
          threeIndex++
        }
        twoIndex++
      }
      current = current - nums[oneIndex]
      oneIndex++
    }
  })
  // assert.deepEqual(solution([1, 2, 1, 2, 6, 7, 5, 1], 2), [0, 3, 5])
  // console.log(oneSets, twoSets, threeSets)
  return threeSets[threeIndex - 1][INDEXES]
}

module.exports = maxSumOfThreeSubarrays
