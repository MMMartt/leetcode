import { strictEqual } from 'assert'
import solution from './main'

describe('0766-solution', () => {
  it('should get [[1,2,3,4],[5,1,2,3],[9,5,1,2]]', () => {
    strictEqual(
      solution([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
      ]),
      true
    )
  })
  it('should get [[1,2],[2,2]]', () => {
    strictEqual(
      solution([
        [1, 2],
        [2, 2],
      ]),
      false
    )
  })
  it('should get [[1]]', () => {
    strictEqual(solution([[1]]), true)
  })
  it('should get [[1],[1]]', () => {
    strictEqual(solution([[1], [1]]), true)
  })
})
