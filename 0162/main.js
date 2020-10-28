/*A peak element is an element that is greater than its neighbors.

  Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

  The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

  You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
  const peakIndex = 0
  const biggerThanPre = true
  let preVal = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (biggerThanPre && nums[i] < preVal) {
      return i - 1
    }
    preVal = nums[i]
  }
  if (nums.length > 1 && nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1
  }
  return peakIndex
}

export default findPeakElement
