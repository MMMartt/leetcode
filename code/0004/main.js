/* There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
const findMedianSortedArrays = (a, b) => {
  const aLen = a.length
  const bLen = b.length
  const mid = Math.floor((aLen + bLen) / 2) - 1
  const isSingle = (aLen + bLen) % 2 === 1
  const midIndexes = isSingle ? [mid + 1] : [mid, mid + 1]
  let aIndex = 0,
    bIndex = 0
  let sum = 0
  for (let i = 0; i < midIndexes[midIndexes.length - 1] + 1; i++) {
    let curr
    if ((aIndex < aLen && a[aIndex] <= b[bIndex]) || isNaN(b[bIndex])) {
      curr = a[aIndex]
      aIndex++
    } else {
      curr = b[bIndex]
      bIndex++
    }
    if (isSingle) {
      if (midIndexes[0] === i) return curr
    } else {
      if (midIndexes[0] === i) sum = curr
      if (midIndexes[1] === i) return (sum + curr) / 2
    }
  }
  return null
}

module.exports = findMedianSortedArrays
