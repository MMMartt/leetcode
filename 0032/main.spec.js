import { strictEqual } from 'assert'
import solution from './main'

describe('0032-solution', () => {
  it('should get ((', () => {
    strictEqual(solution('(('), 0)
  })
  it('should get ()', () => {
    strictEqual(solution('()'), 2)
  })
  it('should get ()()', () => {
    strictEqual(solution('()()'), 4)
  })
  it('should get (()())', () => {
    strictEqual(solution('(()())'), 6)
  })
  it('should get (()())()', () => {
    strictEqual(solution('(()())()'), 8)
  })
  it('should get (()', () => {
    strictEqual(solution('(()'), 2)
  })
  it('should get )()())', () => {
    strictEqual(solution(')()())'), 4)
  })
  it('should get )()())', () => {
    strictEqual(solution(')()())'), 4)
  })
  it('should get )(((((()())()()))()(()))(', () => {
    strictEqual(solution(')(((((()())()()))()(()))('), 22)
  })
  it('should get (()()', () => {
    strictEqual(solution('(()()'), 4)
  })
  it('should get ()(()', () => {
    strictEqual(solution('()(()'), 2)
  })
  it('should get )()(((())))(', () => {
    strictEqual(solution(')()(((())))('), 10)
  })
  it('should get )(())))(())())', () => {
    strictEqual(solution(')(())))(())())'), 6)
  })
})
