const assert = require('assert')
const solution = require('./main')
const leetcodeArray2Node = require('../utilities/tree').leetcodeArray2Node

describe('0098-solution', () => {
  it('should get [1,2,3]', () => {
    assert.equal(solution(leetcodeArray2Node([1, 2, 3])), false)
  })
  it('should get [2,1,3]', () => {
    assert.equal(solution(leetcodeArray2Node([2, 1, 3])), true)
  })
  it('should get [2,1,null]', () => {
    assert.equal(solution(leetcodeArray2Node([2, 1, null])), true)
  })
  it('should get [2]', () => {
    assert.equal(solution(leetcodeArray2Node([2])), true)
  })
  it('should get []', () => {
    assert.equal(solution(leetcodeArray2Node([])), true)
  })
  it('should get [4,3,4,1,2,null,6]', () => {
    assert.equal(solution(leetcodeArray2Node([4, 3, 4, 1, 2, null, 6])), false)
  })
  it('should get [4,3,5,1,2,null,6]', () => {
    assert.equal(solution(leetcodeArray2Node([4, 3, 5, 1, 2, null, 6])), false)
  })
  it('should get [4,3,5,1,null,null,6]', () => {
    assert.equal(solution(leetcodeArray2Node([4, 3, 5, 1, null, null, 6])), true)
  })
  it('should get [10,5,15,null,null,6,20]', () => {
    assert.equal(solution(leetcodeArray2Node([10,5,15,null,null,6,20])), false)
  })
})
