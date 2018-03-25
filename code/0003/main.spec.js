const assert = require('assert')
const solution = require('./main')

describe('solution', () => {
  it('should get abcabcbb', () => {
    assert.equal(solution('abcabcbb'), 3)
  })
  it('should get bbbbb', function () {
    assert.equal(solution('bbbbb'), 1)
  })
  it('should get pwwkew', () => {
    assert.equal(solution('pwwkew'), 3)
  })
  it('should get empty', () => {
    assert.equal(solution(''), 0)
  })
  it('should get one single', () => {
    assert.equal(solution('a'), 1)
  })
  it('should get two', () => {
    assert.equal(solution('ab'), 2)
  })
})
