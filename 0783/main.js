/*Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

  Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
  Note that root is a TreeNode object, not an array.

  The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

  4
  /   \
      2      6
/ \
    1   3

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

  The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * in order
 * @param {TreeNode} tree
 * @returns {number[]}
 */
const inOrder = tree => {
  return tree !== null
    ? [...inOrder(tree.left), tree.val, ...inOrder(tree.right)]
    : []
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = root => {
  return inOrder(root).reduce(([last, min], value) => {
    return [
      value,
      last === undefined
        ? undefined
        : min === undefined
        ? value - last
        : min > value - last
        ? value - last
        : min,
    ]
  }, [])[1]
}

module.exports = minDiffInBST
