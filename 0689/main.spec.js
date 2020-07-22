const assert = require('assert')
const solution = require('./main')

describe('0689-solution', () => {
  it('should get [1, 2, 1, 2, 6, 7, 5, 1], 2', () => {
    assert.deepEqual(solution([1, 2, 1, 2, 6, 7, 5, 1], 2), [0, 3, 5])
  })
  it('should get [5, 1, 1, 2, 3, 4, 3], 2', () => {
    assert.deepEqual(solution([1, 5, 2, 1, 2, 3, 4, 3], 2), [1, 4, 6])
  })
})
