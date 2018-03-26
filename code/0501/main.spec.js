const assert = require('assert')
const solution = require('./main')

describe('solution', () => {
  const makeTree = ([val, left, right]) => {
    return {
      val,
      left: left && left.length ? makeTree(left) : left,
      right: right && right.length ? makeTree(right) : right
    }
  }
  it('should get [1,null,[2,null,2]]', () => {
    assert.equal(solution(makeTree([1,null,[2,null,2]])), [2])
  })
})
