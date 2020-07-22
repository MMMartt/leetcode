const assert = require('assert')
const solution = require('./main')

describe('0264-solution', () => {
  it('should get 10', () => {
    assert.equal(solution(10), 12)
  })
  it('should get 1', () => {
    assert.equal(solution(1), 1)
  })
  it('should get 100', () => {
    assert.equal(solution(100), 1536)
  })
  it('should get 1690', () => {
    assert.equal(solution(1690), 2123366400)
  })
})
