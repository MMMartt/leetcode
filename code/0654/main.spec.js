const assert = require('assert')
const solution = require('./main')
const leetcodeBfs = require('../utilities/tree').leetcodeBfs

describe('0654-solution', () => {
  it('should get [3,2,1,6,0,5]', () => {
    assert.deepEqual(leetcodeBfs(solution([3, 2, 1, 6, 0, 5])), [6, 3, 5, null, 2, 0, null, null, 1])
  })
  it('should get []', () => {
    assert.deepEqual(leetcodeBfs(solution([])), [])
  })
  it('should get [1]', () => {
    assert.deepEqual(leetcodeBfs(solution([1])), [1])
  })
})
