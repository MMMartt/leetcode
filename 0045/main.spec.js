import { strictEqual } from 'assert'
import solution from './main'

describe('0045-solution', () => {
  it('should get [2,3,1,1,4]', () => {
    strictEqual(solution([2, 3, 1, 1, 4]), 2)
  })
  it('should get [2,3,2,1,1,5,1,1,4]', () => {
    strictEqual(solution([2, 3, 2, 1, 1, 5, 1, 1, 4]), 4)
  })
  it('should get [1,3,2]', () => {
    strictEqual(solution([1, 3, 2]), 2)
  })
  it('should get [1,2,3]', () => {
    strictEqual(solution([1, 2, 3]), 2)
  })
  it('should get [3,1,9,0,4,4,8,4,7,0,8,4,3,1,2]', () => {
    strictEqual(solution([3, 1, 9, 0, 4, 4, 8, 4, 7, 0, 8, 4, 3, 1, 2]), 3)
  })
})
