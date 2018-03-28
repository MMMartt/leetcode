const assert = require('assert')
const solution = require('./main')

describe('solution', () => {
  const makeTree = ([val, ...other]) => {
    return val ? {
      val,
      left: makeTree(other.filter(a => a <= val)),
      right: makeTree(other.filter(a => a > val)),
    } : null
  }
  it('should get [1]', () => {
    assert.deepEqual(solution(makeTree([1])), [1])
  })
  it('should get [2147483647]', () => {
    assert.deepEqual(solution(makeTree([2147483647])), [2147483647])
  })
  it('should get [1,null,2]', () => {
    assert.deepEqual(solution(makeTree([1,null,2])), [1,2])
  })
  it('should get [11,11,1,1,null,2,2]', () => {
    assert.deepEqual(solution(makeTree([11,11,1,1,null,2,2])), [1,2,11])
  })
  it('should get [1,null,2,2]', () => {
    assert.deepEqual(solution(makeTree([1, null, 2, 2])), [2])
  })
  it('should get [12,1,4,5, null, 2, 2,23,23,23,23,45]', () => {
    assert.deepEqual(solution(makeTree([12,1,4,5, null, 2, 2,23,23,23,23,45])), [23])
  })
  it('should get []', () => {
    assert.deepEqual(solution(makeTree([])), [])
  })
})
