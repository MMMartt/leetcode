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
  let maxes = [root]
  let maxCount = 1
  let currentCount = 1
  let currentNode = root
  const countNode = root => {
    return root === null ? 0 : (1 + countNode(root.left) + countNode(root.right))
  }
  const simplifyNode = root => {
    let wipeCurrent = root
    while (wipeCurrent !== null && (wipeCurrent.left.val === root.val || wipeCurrent.right.val === root.val)) {
      if (wipeCurrent.left && wipeCurrent.left.val === wipeCurrent.val) {
        currentCount += 1 + countNode(wipeCurrent.left.right)
        wipeCurrent = {
          val: wipeCurrent.val,
          left: wipeCurrent.left.left,
          right: wipeCurrent.right
        }
      }
      if (wipeCurrent.right && wipeCurrent.right.val === wipeCurrent.val) {
        currentCount += 1 + countNode(wipeCurrent.right.left)
        wipeCurrent = {
          val: wipeCurrent.val,
          left: wipeCurrent.right.right,
          right: wipeCurrent.left
        }
      }
    }
    return wipeCurrent
  }
  const adjustTree = beLeft => root => {
    if (beLeft) {
    }
  }
  while (currentNode !== null) {
    // currentCount increase
    simplifyNode(currentNode)
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

}
module.exports = solution
