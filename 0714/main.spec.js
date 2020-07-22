const assert = require('assert')
const solution = require('./main')

describe('0714-solution', () => {
  it('should get [1, 3, 2, 8, 4, 9], 2', () => {
    assert.equal(solution([1, 3, 2, 8, 4, 9], 2), 8)
  })
  it('should get [1, 2, 8, 4, 9], 2', () => {
    assert.equal(solution([1, 2, 8, 4, 9], 2), 8)
  })
  it('should get [1, 5], 2', () => {
    assert.equal(solution([1, 5], 2), 2)
  })
  it('should get [1, 3], 2', () => {
    assert.equal(solution([1, 3], 2), 0)
  })
  it('should get [1, 2, 3, 4, 5], 1', () => {
    assert.equal(solution([1, 2, 3, 4, 5], 1), 3)
  })
  it('should get [1, 2, 3, 1, 5], 1', () => {
    assert.equal(solution([1, 2, 3, 1, 5], 1), 4)
  })
})
