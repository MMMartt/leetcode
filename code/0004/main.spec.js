const assert = require('assert')
const solution = require('./main')
const { createArrayBySpread } = require('../utilities/array')

describe('0004-solution', () => {
  it('should get [] [1] solution', () => {
    assert.equal(solution([], [1]), 1)
  })

  it('should get [] [-10..12] solution', () => {
    assert.equal(solution([], createArrayBySpread('-10..12')), 1)
  })

  it('should get [1] [] solution', () => {
    assert.equal(solution([1], []), 1)
  })

  it('should get [0] [0] solution', () => {
    assert.equal(solution([0], [0]), 0)
  })
  it('should get [1,3], [2] solution', () => {
    assert.equal(solution([1, 3], [2]), 2)
  })

  it('should get [1, 2], [3, 4] solution', () => {
    assert.equal(solution([1, 2], [3, 4]), 2.5)
  })

  it('should get [1..10], [11..44] solution', () => {
    assert.equal(
      solution(createArrayBySpread('1..10'), createArrayBySpread('11..44')),
      22.5
    )
  })

  it('should get [1, 3..10], [-100, -98..44] solution', () => {
    assert.equal(
      solution(
        createArrayBySpread('1, 3..10'),
        createArrayBySpread('-100, -98..44')
      ),
      -23
    )
  })

  it('should get [1, 3..10], [1, 5..44] solution', () => {
    assert.equal(
      solution(
        createArrayBySpread('1, 3..10'),
        createArrayBySpread('1, 5..44')
      ),
      11
    )
  })
})
