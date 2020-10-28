import { strictEqual } from 'assert'
import solution from './main'

describe('1143-solution', () => {
  it('should get basic solution1', () => {
    strictEqual(solution('abced', 'ace'), 3)
  })
  it('should get basic solution2', () => {
    strictEqual(solution('abc', 'abc'), 3)
  })
  it('should get basic solution3', () => {
    strictEqual(solution('abc', 'def'), 0)
  })

  it('should get big string solution', () => {
    strictEqual(solution('abc'.repeat(300), 'abc'.repeat(300)), 900)
  })

  it('should get solution ', () => {
    strictEqual(solution('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'), 6)
  })
})
