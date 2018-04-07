const assert = require('assert')
const solution = require('./main')

describe('0050-solution', () => {
  it('should get 2.00000, 10', () => {
    assert.equal(solution(2.00000, 10), 1024.00000)
  })
})
