const assert = require('assert')
const solution = require('./main')

describe('0654-solution', () => {
  const preOrder = tree => {
    return tree !== null
      ? [
        tree.val,
        ...preOrder(tree.left),
        ...preOrder(tree.right),
      ]
      : []
  }
  const inOrder = tree => {
    return tree !== null
      ? [
        ...inOrder(tree.left),
        tree.val,
        ...inOrder(tree.right),
      ]
      : []
  }
  it('should get [3,2,1,6,0,5]', () => {
    const treeA = solution([3, 2, 1, 6, 0, 5])
    const treeB = {
      val: 6,
      left: {
        val: 3,
        left: null,
        right: {
          val: 2,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 5,
        left: {
          val: 0,
          left: null,
          right: null,
        },
        right: null
      }
    }
    assert.deepEqual(preOrder(treeA), preOrder(treeB))
    assert.deepEqual(inOrder(treeA), inOrder(treeB))
  })
  it('should get []', () => {
    const treeA = solution([])
    const treeB = null
    assert.deepEqual(preOrder(treeA), preOrder(treeB))
    assert.deepEqual(inOrder(treeA), inOrder(treeB))
  })
  it('should get [1]', () => {
    const treeA = solution([1])
    const treeB = {
      val: 1,
      left: null,
      right: null
    }
    assert.deepEqual(preOrder(treeA), preOrder(treeB))
    assert.deepEqual(inOrder(treeA), inOrder(treeB))
  })
})
