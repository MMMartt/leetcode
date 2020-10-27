const assert = require('assert')
const solution = require('./main')

describe('0753-solution', () => {
  it('should get basic solution', () => {
    assert.equal(solution(1, 2), '01')
  })

  it('should get [2, 2] solution', () => {
    assert.equal(solution(2, 2), '00110')
  })

  it('should get [3, 2] solution', () => {
    assert.equal(solution(3, 2), '1000101110')
  })

  it('should get [3, 3] solution', () => {
    assert.equal(solution(3, 3), '10001011020021112012122022210')
  })
})
