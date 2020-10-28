import { deepStrictEqual } from 'assert'
import solution from './main'
import { leetcodeArray2Node } from '../utilities/tree'

describe('0783-solution', () => {
  it('should get [4, 2, 6, 1, 3]', () => {
    deepStrictEqual(solution(leetcodeArray2Node([4, 2, 6, 1, 3])), 1)
  })
})
