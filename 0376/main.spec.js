import { strictEqual } from 'assert'
import solution from './main'

describe('0376-solution', () => {
  it('should get [1,2,3,4,5,6,7,8,9] solution', () => {
    strictEqual(solution([2, 2, 3, 4, 5, 6, 7, 8, 9]), 2)
  })

  it('should get [1,17,5,10,13,15,10,5,16,8] solution', () => {
    strictEqual(solution([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]), 7)
  })

  it('should get [1,7,4,9,2,5] solution', () => {
    strictEqual(solution([1, 7, 4, 9, 2, 5]), 6)
  })

  it('should get [1] solution', () => {
    strictEqual(solution([1]), 1)
  })

  it('should get [] solution', () => {
    strictEqual(solution([]), 0)
  })
})
