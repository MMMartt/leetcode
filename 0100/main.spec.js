import { strictEqual } from 'assert'
import solution from './main'

describe('0100-solution', () => {
  const makeTree = ([first, left, right]) => {
    return {
      val: first,
      left: left && left.length ? makeTree(left) : null,
      right: right && right.length ? makeTree(right) : null,
    }
  }
  it('should get [1,2,null]', () => {
    strictEqual(
      solution(
        makeTree([1, [2, null, null], null]),
        makeTree([1, [2, null, null], null])
      ),
      true
    )
  })
  it('should get [1,2,null] [1,null,2]', () => {
    strictEqual(
      solution(
        makeTree([1, null, [2, null, null]]),
        makeTree([1, [2, null, null], null])
      ),
      false
    )
  })
})
