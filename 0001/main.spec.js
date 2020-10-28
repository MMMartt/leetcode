import { deepStrictEqual } from 'assert'
import solution from './main'

describe('0001-solution', () => {
  it('should get [2, 7, 11, 15], 9', () => {
    deepStrictEqual(solution([2, 7, 11, 15], 9), [0, 1])
  })
  it('should get [2, 11, 7, 11, 15], 9', () => {
    deepStrictEqual(solution([2, 11, 7, 11, 15], 9), [0, 2])
  })
  it('should get [3, 2, 4], 6', () => {
    deepStrictEqual(solution([3, 2, 4], 6), [1, 2])
  })
})
