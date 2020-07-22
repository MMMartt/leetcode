const assert = require('assert')
const solution = require('./main')
const { leetcodeBfs, leetcodeArray2Node } = require('../utilities/tree')

describe('0538-solution', () => {
  it('should get [2]', () => {
    assert.deepEqual(leetcodeBfs(solution(leetcodeArray2Node([2]))), [2])
  })
  it('should get [5, 2, 13]', () => {
    assert.deepEqual(leetcodeBfs(solution(leetcodeArray2Node([5, 2, 13]))), [
      18,
      20,
      13,
    ])
  })
})
