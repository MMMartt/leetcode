import { deepStrictEqual } from 'assert'
import solution from './main'
import { leetcodeBfs, leetcodeArray2Node } from '../utilities/tree'

describe('0538-solution', () => {
  it('should get [2]', () => {
    deepStrictEqual(leetcodeBfs(solution(leetcodeArray2Node([2]))), [2])
  })
  it('should get [5, 2, 13]', () => {
    deepStrictEqual(leetcodeBfs(solution(leetcodeArray2Node([5, 2, 13]))), [
      18,
      20,
      13,
    ])
  })
})
