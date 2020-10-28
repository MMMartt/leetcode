import { strictEqual } from 'assert'
import solution from './main'

describe('0003-solution', () => {
  it('should get abcabcbb', () => {
    strictEqual(solution('abcabcbb'), 3)
  })
  it('should get bbbbb', function () {
    strictEqual(solution('bbbbb'), 1)
  })
  it('should get pwwkew', () => {
    strictEqual(solution('pwwkew'), 3)
  })
  it('should get empty', () => {
    strictEqual(solution(''), 0)
  })
  it('should get one single', () => {
    strictEqual(solution('a'), 1)
  })
  it('should get two', () => {
    strictEqual(solution('ab'), 2)
  })
})
