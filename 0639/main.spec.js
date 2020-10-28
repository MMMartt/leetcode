import { strictEqual } from 'assert'
import solution from './main'

describe('0639-solution', () => {
  it('should get *', () => {
    strictEqual(solution('*'), 9)
  })
  it('should get 1*', () => {
    strictEqual(solution('1*'), 18)
  })
  it('should get (100*12)', () => {
    strictEqual(solution('12'.repeat(100)), 529309711)
  })
  it('should get (100*1*)', () => {
    strictEqual(solution('1*'.repeat(100)), 845170648)
  })
  it('should get *0**0', () => {
    strictEqual(solution('*0**0'), 36)
  })
  it('should get 100*10', () => {
    strictEqual(solution('10'.repeat(100)), 1)
  })
})
