/*You are given an integer array sorted in ascending order (may contain duplicates), you need to split them into several subsequences, where each subsequences consist of at least 3 consecutive integers. Return whether you can make such a split.

  Example 1:
Input: [1,2,3,3,4,5]
Output: True
Explanation:
  You can split them into two consecutive subsequences :
  1, 2, 3
3, 4, 5
Example 2:
Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
  You can split them into two consecutive subsequences :
  1, 2, 3, 4, 5
3, 4, 5
Example 3:
Input: [1,2,3,4,4,5]
Output: False
Note:
  The length of the input is in range of [1, 10000]*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = nums => {
  let startIndexes = []
  let currentPos = -1
  let currentValue = nums[0]
  let lastCount = 0
  let valueCount = 1
  if (nums.length < 3) {
    return false
  }
  const seqChange = count => {
    currentPos++
    if (count === 0) {
      return true
    } else if (count > 0) {
      for (let i = 0; i < count; i++) {
        startIndexes.push(currentPos)
      }
    } else {
      if (count + startIndexes.length < 0) {
        return false
      }
      for (let i = 0; i < -count; i++) {
        if (currentPos - startIndexes.shift() < 3) {
          return false
        }
      }
    }
    return true
  }
  let isTrue = true
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]
    if (current !== currentValue) {
      if (current !== currentValue + 1) {
        isTrue = seqChange(valueCount - lastCount)
        isTrue = seqChange(-valueCount)
        lastCount = 0
        valueCount = 1
      } else {
        isTrue = seqChange(valueCount - lastCount)
        lastCount = valueCount
        valueCount = 1
      }
      currentValue = current
      if (!isTrue) {
        return false
      }
    } else {
      valueCount++
    }
  }
  seqChange(valueCount - lastCount)
  isTrue = seqChange(-valueCount)
  return isTrue
}

module.exports = isPossible
