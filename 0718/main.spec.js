import { strictEqual } from 'assert'
import solution from './main'

describe('0718-solution', () => {
  it('should get basic solution', () => {
    strictEqual(solution([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3)
  })

  it('should get corner 1', () => {
    strictEqual(solution([1, 2, 3, 2, 1], [3]), 1)
  })
  it('should get corner 2', () => {
    strictEqual(solution([1], [3]), 0)
  })
  it('should get corner 3', () => {
    strictEqual(solution([1], [1]), 1)
  })
  it('should get result while A shorter than B', () => {
    strictEqual(solution([1, 2], [1, 3, 1, 1, 2, 1]), 2)
  })
  it('should get result while A longer than B', () => {
    strictEqual(solution([1, 3, 1, 1, 2, 1], [1, 2]), 2)
  })
  it('should get solution [2,1,2,3,4,5] [1,2,3,5,1,2,3,4]', () => {
    strictEqual(solution([2, 3, 1, 2, 3, 4, 5], [1, 2, 3, 5, 8, 2, 3, 4, 5]), 4)
  })
  it('should get result while result is complex', () => {
    strictEqual(
      solution(
        [79, 3, 1, 4, 2, 4, 78, 4, 79, 1, 4, 78, 79, 1, 4, 78, 1, 2, 1],
        [1, 4, 79, 1, 4, 78, 79, 1]
      ),
      7
    )
  })
})
