const assert = require('assert')
const solution = require('./main')

describe('0659-solution', () => {
  it('should get [1,2,3,3,4,5]', () => {
    assert.equal(solution([1, 2, 3, 3, 4, 5]), true)
  })
  it('should get [1,2,3,3,4,4,5,5]', () => {
    assert.equal(solution([1, 2, 3, 3, 4, 4, 5, 5]), true)
  })
  it('should get [1,2,3,4,4,5]', () => {
    assert.equal(solution([1, 2, 3, 4, 4, 5]), false)
  })
  it('should get [1,2,2,3,3,3,4,4,5]', () => {
    assert.equal(solution([1, 2, 2, 3, 3, 3, 4, 4, 5]), true)
  })
  it('should get [1,2,2,3,3,3,3,4,4,4,5,5,6]', () => {
    assert.equal(solution([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6]), true)
  })
  it('should get [1,2,3,5,6]', () => {
    assert.equal(solution([1, 2, 3, 5, 6]), false)
  })
  it('should get [1]', () => {
    assert.equal(solution([1]), false)
  })
  it('should get [3,4,4,5,6,7,8,9,10,11]', () => {
    assert.equal(solution([3, 4, 4, 5, 6, 7, 8, 9, 10, 11]), false)
  })
  it('should get [1,8,9,10,11,12,13,14,15,16]', () => {
    assert.equal(solution([1, 8, 9, 10, 11, 12, 13, 14, 15, 16]), false)
  })
  it('should get [5,6,7,25,26,27]', () => {
    assert.equal(solution([5, 6, 7, 25, 26, 27]), true)
  })
})
