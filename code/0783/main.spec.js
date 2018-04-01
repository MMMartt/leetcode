const assert = require('assert')
const solution = require('./main')
const {leetcodeArray2Node, leetcodeBfs} = require('../utilities/tree')

describe('solution', () => {
  it('should get [4, 2, 6, 1, 3]', () => {
    assert.deepEqual(
      solution(leetcodeArray2Node([4, 2, 6, 1, 3])),
      1)
  })
})
