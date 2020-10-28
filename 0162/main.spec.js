import { strictEqual } from 'assert'
import solution from './main'

describe('0162-solution', () => {
  it('should get [5,4,3,2,1]', () => {
    strictEqual(solution([5, 4, 3, 2, 1]), 0)
  })
  it('should get [2,5,4,3,2,1]', () => {
    strictEqual(solution([2, 5, 4, 3, 2, 1]), 1)
  })
  it('should get [1,2,3,4,5]', () => {
    strictEqual(solution([1, 2, 3, 4, 5]), 4)
  })
  it('should get [1,2,3,4,5,2,1]', () => {
    strictEqual(solution([1, 2, 3, 4, 5, 2, 1]), 4)
  })
  it('should get [1,2]', () => {
    strictEqual(solution([1, 2]), 1)
  })
})
