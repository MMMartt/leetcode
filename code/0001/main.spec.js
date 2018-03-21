const assert = require('assert')
const solution = require('./main')

describe('solution', () => {
  it('should get [2, 7, 11, 15], 9', () => {
    assert.deepEqual(solution([2, 7, 11, 15], 9), [0, 1])
  })
  it('should get [2, 11, 7, 11, 15], 9', () => {
    assert.deepEqual(solution([2, 11, 7, 11, 15], 9), [0, 2])
  })
  it('should get [3, 2, 4], 6', () => {
    assert.deepEqual(solution([3, 2, 4], 6), [1, 2])
  })
})
