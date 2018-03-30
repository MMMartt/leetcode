const {leetcodeBfs, leetcodeArray2Node} = require('./tree')
const assert = require('assert')

describe('tree utility test', () => {
  it('should get [ 6, 3, 5, null, 2, 0, null, null, 1 ]', () => {
    assert.deepEqual([ 6, 3, 5, null, 2, 0, null, null, 1 ], leetcodeBfs(leetcodeArray2Node([ 6, 3, 5, null, 2, 0, null, null, 1 ])))
  })
  it('should get []', () => {
    assert.deepEqual([], leetcodeBfs(leetcodeArray2Node([])))
  })
  it('should get [1]', () => {
    assert.deepEqual([1], leetcodeBfs(leetcodeArray2Node([1])))
  })
})
