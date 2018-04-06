const assert = require('assert')
const solution = require('./main')

describe('0639-solution', () => {
  it('should get *', () => {
    assert.equal(solution('*'), 9)
  })
  it('should get 1*', () => {
    assert.equal(solution('1*'), 18)
  })
  it('should get (100*12)', () => {
    assert.equal(solution('12'.repeat(100)), 529309711)
  })
  it('should get (100*1*)', () => {
    assert.equal(solution('1*'.repeat(100)), 845170648)
  })
  it('should get *0**0', () => {
    assert.equal(solution('*0**0'), 36)
  })
  it('should get 100*10', () => {
    assert.equal(solution('10'.repeat(100)), 1)
  })
})
