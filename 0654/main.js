/*Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
  The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
  The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
  Construct the maximum tree by the given array and output the root node of this tree.

  Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

  6
  /   \
   3     5
    \    /
2  0
       \
        1
Note:
  The size of the given array will be in the range [1,1000].*/

/**
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left = undefined, right = undefined) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null
  const i = nums.reduce((acc, curr, i) => {
    return curr > nums[acc] ? i : acc
  }, 0)
  return new TreeNode(
    nums[i],
    constructMaximumBinaryTree(nums.slice(0, i)),
    constructMaximumBinaryTree(nums.slice(i + 1))
  )
  // if (nums.length === 1) return new TreeNode(nums[0])
  // const [first, ...others] = nums
  // /**
  //  * @param {TreeNode} tree
  //  * @param {number} value
  //  * @returns {TreeNode}
  //  */
  // const insertTo = (tree, value) => {
  //   if (tree === null || tree.val < value)
  //     return new TreeNode(value, null, tree)
  //   tree.left = insertTo(tree.left, value)
  //   return tree
  // }
  // return insertTo(constructMaximumBinaryTree(others), first)
}

module.exports = constructMaximumBinaryTree
