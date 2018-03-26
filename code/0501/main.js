/*Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

  Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
  For example:
  Given BST [1,null,2,2],
  1
    \
     2
     /
     2
return [2].

  Note: If a tree has more than one mode, you can return them in any order.

  Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).*/
/**
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {?TreeNode} left
 * @property {?TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = root => {
  while (currentNode !== null) {

  }
  return [2]
}
/**
 * @typedef {Object} Result
 * @property {number[]} maxes
 * @property {number} count
 * @property {number} rootCount
 */
/**
 * @param {TreeNode} root
 * @return {[number[], number]}
 */
const findResult = root => {
  if (root === null) return {maxes: [], count: 0, rootCount: 0}
  const {val, left, right} = root
  const leftR = findResult(left)
  const rightR = findResult(right)
  const rightEqual = rightR.val === val
  const leftEqual = leftR.val === val
  let rootCount = 1
  let maxes = []
  if (leftEqual && rightEqual) {
    rootCount += leftR.rootCount + rightR.rootCount
    if (rightR.count === rightR.count && rootCount <= leftR.count) {
      maxes = [...leftR.maxes, ...rightR.maxes]
    }
  } else if (leftEqual) {
    rootCount += leftR.rootCount
    if (leftR.count === rightR.count && rootCount <= leftR.count) {
      if (rightR.rootCount < leftR.count) {
        maxes = [...leftR.maxes, ...rightR.maxes]
      } else if (rightR.rootCount === leftR.count) {
        maxes = [...leftR.maxes, ...rightR.maxes, rightR.val]
      }
    }
  } else if (rightEqual) {
    rootCount += rightR.rootCount
  } else {
  }
}
module.exports = solution
