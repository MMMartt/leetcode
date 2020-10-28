/*Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

  Example:

Input: The root of a Binary Search Tree like this:
     5
  /   \
2     13

Output: The root of a Greater Tree like this:
18
/   \
          20     13*/
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = root => {
  const nodeStack = []
  let node = root
  let preSum = 0
  while (node !== null || nodeStack.length !== 0) {
    if (node === null) {
      node = nodeStack.pop()
      node.val += preSum
      preSum = node.val
      node = node.left
    } else {
      nodeStack.push(node)
      node = node.right
    }
  }
  return root
}

export default convertBST
