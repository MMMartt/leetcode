import { leetcodeBfs, leetcodeArray2Node } from './tree'
import { deepStrictEqual } from 'assert'

describe('tree utility test', () => {
  it('should get [ 6, 3, 5, null, 2, 0, null, null, 1 ]', () => {
    deepStrictEqual(
      [6, 3, 5, null, 2, 0, null, null, 1],
      leetcodeBfs(leetcodeArray2Node([6, 3, 5, null, 2, 0, null, null, 1]))
    )
  })
  it('should get []', () => {
    deepStrictEqual([], leetcodeBfs(leetcodeArray2Node([])))
  })
  it('should get [1]', () => {
    deepStrictEqual([1], leetcodeBfs(leetcodeArray2Node([1])))
  })
})
