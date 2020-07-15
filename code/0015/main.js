/*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

  Note: The solution set must not contain duplicate triplets.

  For example, given array S = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]*/

// :) why
// const threeSum = nums => {
//   const pos = {}, neg = {}, dict = {}
//   let zero = 0
//   nums.forEach(v => {
//     if (v > 0) {
//       pos[v] = pos[v] ? pos[v] + 1 : 1
//       dict[v] = dict[v] ? dict[v] + 1 : 1
//     }
//     if (v < 0) {
//       neg[v] = neg[v] ? neg[v] + 1 : 1
//       dict[v] = dict[v] ? dict[v] + 1 : 1
//     }
//     if (v === 0) {
//       zero++
//       dict[v] = dict[v] ? dict[v] + 1 : 1
//     }
//   })
//
//   let results = zero > 2 ? [[0, 0, 0]] : []
//
//   for (const posN in pos) {
//     for (const negN in neg) {
//       const pNum = parseInt(posN)
//       const nNum = parseInt(negN)
//       const expect = -(pNum + nNum)
//       if (dict[expect] > 0) {
//         if (expect === pNum && dict[pNum] > 1) {
//           results.push([nNum, pNum, pNum])
//         }
//         if (expect === nNum && dict[nNum] > 1) {
//           results.push([nNum, nNum, pNum])
//         }
//         if ((nNum < expect && expect < pNum) || expect === 0) {
//           results.push([nNum, expect, pNum])
//         }
//       }
//     }
//   }
//
//   return results
// }

const threeSum = nums => {
  const result = []
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return result
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    /* j ----> expect <---- k */
    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
      } else {
        j++
      }
    }
  }
  return result
}

module.exports = threeSum
