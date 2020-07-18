const assert = require('assert')
const { solution } = require('./main')

describe('0052-solution', () => {
  it('should get basic solution', () => {
    assert.equal(solution(0), 0)
  })
  it('should get n=8 solution', () => {
    assert.equal(solution(8), 92)
  })
})
