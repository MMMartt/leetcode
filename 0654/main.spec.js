import { deepStrictEqual } from 'assert'
import solution from './main'
import { leetcodeBfs } from '../utilities/tree'

describe('0654-solution', () => {
  it('should get [3,2,1,6,0,5]', () => {
    deepStrictEqual(leetcodeBfs(solution([3, 2, 1, 6, 0, 5])), [
      6,
      3,
      5,
      null,
      2,
      0,
      null,
      null,
      1,
    ])
  })
  it('should get []', () => {
    deepStrictEqual(leetcodeBfs(solution([])), [])
  })
  it('should get [1]', () => {
    deepStrictEqual(leetcodeBfs(solution([1])), [1])
  })
})
