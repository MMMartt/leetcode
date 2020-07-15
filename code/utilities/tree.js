/**
 * @desc: need to be removed on leetcode
 * @param {number} val
 * @constructor
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * return leetcode result format array of TreeNode
 * @param {?TreeNode} rawObject
 * @returns {number[]}
 */
const leetcodeBfs = rawObject => {
  const nodeQueue = []
  let node = rawObject
  const result = []
  while ((node !== null && node !== undefined) || nodeQueue.length !== 0) {
    if (node !== null) {
      result.push(node.val)
      if (!(node.left === null && node.right === null)) {
        nodeQueue.push(node.left)
        nodeQueue.push(node.right)
      }
    } else {
      result.push(node)
    }
    node = nodeQueue.shift()
  }
  return result
}

/**
 * if we use immutable object, it will be difficult to add next left/right value for previous node
 * @param {number[]} array
 * @returns {?TreeNode}
 */
const leetcodeArray2Node = array => {
  if (array.length === 0) {
    return null
  }
  let currentNode = null
  let currentIndex = 1
  let currentValue
  const root = new TreeNode(array[0])
  const nodeQueue = [root]
  const takeNew = value => {
    if (value === null) {
      return null
    }
    const result = new TreeNode(value)
    nodeQueue.push(result)
    return result
  }
  for (; currentIndex < array.length; currentIndex += 2) {
    currentValue = array[currentIndex]
    currentNode = nodeQueue.shift()
    currentNode.left = takeNew(array[currentIndex])
    currentNode.right = takeNew(array[currentIndex + 1])
  }
  return root
}

/**
 * pre order, unused
 * @param {TreeNode} tree
 * @returns {number[]}
 */
const preOrder = tree => {
  return tree !== null
    ? [tree.val, ...preOrder(tree.left), ...preOrder(tree.right)]
    : []
}
/**
 * in order, unused
 * @param {TreeNode} tree
 * @returns {number[]}
 */
const inOrder = tree => {
  return tree !== null
    ? [...inOrder(tree.left), tree.val, ...inOrder(tree.right)]
    : []
}
module.exports = { leetcodeBfs, leetcodeArray2Node }
