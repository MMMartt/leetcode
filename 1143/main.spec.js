const assert = require('assert')
const solution = require('./main')

describe('1143-solution', () => {
  it('should get basic solution1', () => {
    assert.equal(solution('abced', 'ace'), 3)
  })
  it('should get basic solution2', () => {
    assert.equal(solution('abc', 'abc'), 3)
  })
  it('should get basic solution3', () => {
    assert.equal(solution('abc', 'def'), 0)
  })

  it('should get big string solution', () => {
    assert.equal(solution('abc'.repeat(300), 'abc'.repeat(300)), 900)
  })

  it('should get solution ', () => {
    assert.equal(solution('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'), 6)
  })
})
