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
  let maxCount = 1
  let currentCount = 1
  let maxes = []
  const nodeStack = []
  let node = root
  let pValue
  let cValue
  while (nodeStack.length !== 0 || node !== null) {
    if (node === null) {
      node = nodeStack.pop()
      if (pValue === undefined) {
        pValue = node.val
        cValue = node.val
      } else {
        cValue = node.val
        if (pValue === node.val) {
          currentCount++
        } else {
          if (currentCount < maxCount) {
          } else if (currentCount === maxCount) {
            maxes.push(pValue)
          } else {
            maxCount = currentCount
            maxes = [pValue]
          }
          currentCount = 1
          pValue = cValue
        }
      }
      node = node.right
    } else {
      nodeStack.push(node)
      node = node.left
    }
  }
  if (currentCount > maxCount) {
    maxes = [cValue]
  } else if (currentCount === maxCount) {
    if (root !== null) {
      maxes.push(cValue)
    }
  }
  return maxes
}
module.exports = findMode
