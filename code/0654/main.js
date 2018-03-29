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

  const {val, left, right} = tree
  return valueToAdd !== undefined
    ? tree.val < valueToAdd
      ? {val: valueToAdd, left: tree, right: null}
      : {val, left, right: addToTree(right, valueToAdd)}
    : tree
}

/**
 * build an empty tree
 * @param {number} val
 * @returns {TreeNode}
 */
const emptyTree = val => {
  return val === undefined
    ? null
    : {
      val,
      left: null,
      right: null
    }
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function treeFromObject(object) {
  if (object === null)
    return null;

  const root = new TreeNode(object.val);
  root.left = treeFromObject(object.left)
  root.right = treeFromObject(object.right)

  return root;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
  // return newTree(parseArrayToTree(nums, null))
  // console.log(treeFromObject(parseArrayToTree(nums, null)))
  return treeFromObject(parseArrayToTree(nums, null))
  // return parseArrayToTree(nums, null)
}

module.exports = constructMaximumBinaryTree
