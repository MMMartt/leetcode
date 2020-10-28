import { strictEqual } from 'assert'
import solution from './main'

describe('0264-solution', () => {
  it('should get 10', () => {
    strictEqual(solution(10), 12)
  })
  it('should get 1', () => {
    strictEqual(solution(1), 1)
  })
  it('should get 100', () => {
    strictEqual(solution(100), 1536)
  })
  it('should get 1690', () => {
    strictEqual(solution(1690), 2123366400)
  })
})
