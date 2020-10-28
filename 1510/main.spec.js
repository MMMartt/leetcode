import { strictEqual } from 'assert'
import solution from './main'

describe('1510-solution', () => {
  it('should get 1', () => {
    strictEqual(solution(1), true)
  })

  it('should get 2', () => {
    strictEqual(solution(2), false)
  })

  it('should get 5', () => {
    strictEqual(solution(5), false)
  })

  it('should get 7', () => {
    strictEqual(solution(7), false)
  })

  it('should get 17', () => {
    strictEqual(solution(17), false)
  })

  it('should get 600', () => {
    strictEqual(solution(600), false)
  })

  it('should get 1000', () => {
    strictEqual(solution(1000), true)
  })

  it('should get 100000', () => {
    strictEqual(solution(100000), true)
  })
})
