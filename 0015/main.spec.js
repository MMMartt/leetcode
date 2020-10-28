import { deepStrictEqual } from 'assert'
import solution from './main'

describe('0015-solution', () => {
  it(`should get [-1, 0, 1, 2, -1, -4] solution`, () => {
    deepStrictEqual(
      solution([-1, 0, 1, 2, -1, -4]).sort(),
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ].sort()
    )
  })
  it(`should get [-1, 0, 0, 1, 0, 2, -1, -4] solution`, () => {
    deepStrictEqual(
      solution([-1, 0, 0, 1, 0, 2, -1, -4]).sort(),
      [
        [-1, 0, 1],
        [0, 0, 0],
        [-1, -1, 2],
      ].sort()
    )
  })
  it(`should get [3,0,-2,-1,1,2] solution`, () => {
    deepStrictEqual(
      solution([3, 0, -2, -1, 1, 2]).sort(),
      [
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, 0, 1],
      ].sort()
    )
  })
})
