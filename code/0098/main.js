/*Given a binary tree, determine if it is a valid binary search tree (BST).

  Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
  Example 1:
2
/ \
  1   3
Binary tree [2,1,3], return true.
  Example 2:
1
/ \
  2   3
Binary tree [1,2,3], return false.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
  let node = root
  let nodeStack = []
  let valid = true
  let previous = null
  while (node !== null || nodeStack.length !== 0) {
    if (node === null) {
      node = nodeStack.pop()
      if (previous === null) {
        previous = node.val
      } else {
        valid = node.val > previous
        previous = node.val
      }
      node = node.right
    } else {
      nodeStack.push(node)
      node = node.left
    }
    if (valid === false) {
      return valid
    }
  }
  return valid
}

module.exports = isValidBST
