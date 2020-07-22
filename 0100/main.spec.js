const assert = require('assert')
const solution = require('./main')

describe('0100-solution', () => {
  const makeTree = ([first, left, right]) => {
    return {
      val: first,
      left: left && left.length ? makeTree(left) : null,
      right: right && right.length ? makeTree(right) : null,
    }
  }
  it('should get [1,2,null]', () => {
    assert.equal(
      solution(
        makeTree([1, [2, null, null], null]),
        makeTree([1, [2, null, null], null])
      ),
      true
    )
  })
  it('should get [1,2,null] [1,null,2]', () => {
    assert.equal(
      solution(
        makeTree([1, null, [2, null, null]]),
        makeTree([1, [2, null, null], null])
      ),
      false
    )
  })
})
