/*
Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  /* ok, Memory Limit Exceeded :<
 * ya, there should always be a result
 * @param {number} first
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
const twoSum = ([first, ...nums], target) => {
  const result = nums.indexOf(target - first)
  if (result < 0) {
    const next = ([f, s]) => [f + 1, s + 1]
    return next(twoSum(nums, target))
  }
  return [0, result + 1]
}
  */
  // long time no for(and let) :D
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j]
      }
    }
  }
  return [0, 0]
}
// ok... I should use hash table :<

module.exports = twoSum
