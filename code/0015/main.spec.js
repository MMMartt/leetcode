const assert = require('assert')
const solution = require('./main')

describe('0015-solution', () => {
  it(`should get [-1, 0, 1, 2, -1, -4] solution`, () => {
    assert.deepEqual(
      solution([-1, 0, 1, 2, -1, -4]).sort(),
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ].sort()
    )
  })
  it(`should get [-1, 0, 0, 1, 0, 2, -1, -4] solution`, () => {
    assert.deepEqual(
      solution([-1, 0, 0, 1, 0, 2, -1, -4]).sort(),
      [
        [-1, 0, 1],
        [0, 0, 0],
        [-1, -1, 2],
      ].sort()
    )
  })
  it(`should get [3,0,-2,-1,1,2] solution`, () => {
    assert.deepEqual(
      solution([3, 0, -2, -1, 1, 2]).sort(),
      [
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, 0, 1],
      ].sort()
    )
  })
})
