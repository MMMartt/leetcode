import { strictEqual } from 'assert'
import solution from './main'

describe('0263-solution', () => {
  it('should get 10', () => {
    strictEqual(solution(10), true)
  })
  it('should get 2123366400', () => {
    strictEqual(solution(2123366400), true)
  })
})
