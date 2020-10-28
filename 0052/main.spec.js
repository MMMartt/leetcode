import { strictEqual } from 'assert'
import { solution } from './main'

describe('0052-solution', () => {
  it('should get basic solution', () => {
    strictEqual(solution(0), 0)
  })
  it('should get n=8 solution', () => {
    strictEqual(solution(8), 92)
  })
})
