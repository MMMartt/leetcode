import { deepStrictEqual } from 'assert'
import solution from './main'

describe('0501-solution', () => {
  const makeTree = ([val, ...other]) => {
    return val
      ? {
          val,
          left: makeTree(other.filter(a => a <= val)),
          right: makeTree(other.filter(a => a > val)),
        }
      : null
  }
  it('should get [1]', () => {
    deepStrictEqual(solution(makeTree([1])), [1])
  })
  it('should get [2147483647]', () => {
    deepStrictEqual(solution(makeTree([2147483647])), [2147483647])
  })
  it('should get [1,null,2]', () => {
    deepStrictEqual(solution(makeTree([1, null, 2])), [1, 2])
  })
  it('should get [11,11,1,1,null,2,2]', () => {
    deepStrictEqual(solution(makeTree([11, 11, 1, 1, null, 2, 2])), [1, 2, 11])
  })
  it('should get [1,null,2,2]', () => {
    deepStrictEqual(solution(makeTree([1, null, 2, 2])), [2])
  })
  it('should get [12,1,4,5, null, 2, 2,23,23,23,23,45]', () => {
    deepStrictEqual(
      solution(makeTree([12, 1, 4, 5, null, 2, 2, 23, 23, 23, 23, 45])),
      [23]
    )
  })
  it('should get []', () => {
    deepStrictEqual(solution(makeTree([])), [])
  })
})
