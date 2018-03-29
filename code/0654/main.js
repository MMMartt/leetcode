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
 * @file
 * @desc: this is slow, we should avoid to modify the tree :) anyway, this is accepted
 */
/**
 * @desc: need to be removed on leetcode
 * @param val
 * @constructor
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} first
 * @param {?number[]} numbers
 * @param {?TreeNode} tree
 * @returns {TreeNode}
 */
const parseArrayToTree = ([first, ...numbers], tree) => {
  return numbers.length
    ? tree !== null
      ? parseArrayToTree(numbers, addToTree(tree, first))
      : parseArrayToTree(numbers, emptyTree(first))
    : addToTree(tree, first)
}
/**
 * add new value to tree
 * @param {?TreeNode} tree tree to add value
 * @param {number} valueToAdd value to be added
 * @returns {?TreeNode}
 */
const addToTree = (tree, valueToAdd) => {
  if (tree === null) return emptyTree(valueToAdd)
  if (valueToAdd === undefined) {
    return tree
  }
  if (tree.val < valueToAdd) {
    const root = new TreeNode(valueToAdd)
    root.left = tree
    root.right = null
    return root
  }
  const root = new TreeNode(tree.val)
  root.left = tree.left
  root.right = addToTree(tree.right, valueToAdd)
  return root
}
/**
 * build an empty tree
 * @param {number} val
 * @returns {?TreeNode}
 */
const emptyTree = val => {
  if (val === undefined) {
    return null
  }
  return new TreeNode(val)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
  return parseArrayToTree(nums, null)
}

module.exports = constructMaximumBinaryTree
