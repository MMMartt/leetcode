import { deepStrictEqual } from 'assert'
import solution from './main'

describe('0689-solution', () => {
  it('should get [1, 2, 1, 2, 6, 7, 5, 1], 2', () => {
    deepStrictEqual(solution([1, 2, 1, 2, 6, 7, 5, 1], 2), [0, 3, 5])
  })
  it('should get [5, 1, 1, 2, 3, 4, 3], 2', () => {
    deepStrictEqual(solution([1, 5, 2, 1, 2, 3, 4, 3], 2), [1, 4, 6])
  })
})
