const assert = require('assert')
const solution = require('./main')

describe('0263-solution', () => {
  it('should get 10', () => {
    assert.equal(solution(10), true)
  })
  it('should get 2123366400', () => {
    assert.equal(solution(2123366400), true)
  })
})
