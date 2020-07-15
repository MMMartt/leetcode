const assert = require('assert')
const solution = require('./main')

describe('0045-solution', () => {
  it('should get [2,3,1,1,4]', () => {
    assert.equal(solution([2, 3, 1, 1, 4]), 2)
  })
  it('should get [2,3,2,1,1,5,1,1,4]', () => {
    assert.equal(solution([2, 3, 2, 1, 1, 5, 1, 1, 4]), 4)
  })
  it('should get [1,3,2]', () => {
    assert.equal(solution([1, 3, 2]), 2)
  })
  it('should get [1,2,3]', () => {
    assert.equal(solution([1, 2, 3]), 2)
  })
  it('should get [3,1,9,0,4,4,8,4,7,0,8,4,3,1,2]', () => {
    assert.equal(solution([3, 1, 9, 0, 4, 4, 8, 4, 7, 0, 8, 4, 3, 1, 2]), 3)
  })
})
