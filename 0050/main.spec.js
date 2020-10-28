import { strictEqual } from 'assert'
import solution from './main'

describe('0050-solution', () => {
  it('should get 2.00000, 10', () => {
    strictEqual(solution(2.0, 10), 1024.0)
  })
})
