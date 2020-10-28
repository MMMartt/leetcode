import { strictEqual } from 'assert'
import solution from './main'

describe('0466-solution', () => {
  it('should get "abc" 10 "abcccc" 2', () => {
    strictEqual(solution('abc', 10, 'abcccc', 2), 1)
  })
  it('should get "acb" 4 "ab" 2', () => {
    strictEqual(solution('acb', 4, 'ab', 2), 2)
  })
  it('should get "acb" 1 "acb" 1', () => {
    strictEqual(solution('acb', 1, 'acb', 1), 1)
  })
  it('should get "aaa" 3 "aa" 1', () => {
    strictEqual(solution('aaa', 3, 'aa', 1), 4)
  })
  it('should get "bacaba" 3 "abacab 1', () => {
    strictEqual(solution('bacaba', 3, 'abacab', 1), 2)
  })
  it(
    'should get' +
      '"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" 1000000 ' +
      '"a" 1000000',
    () => {
      strictEqual(
        solution(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          1000000,
          'a',
          1000000
        ),
        100
      )
    }
  )
  it('should get "nlhqgllunmelayl"' + '2' + '"lnl"' + '1', () => {
    strictEqual(solution('nlhqgllunmelayl', 2, 'lnl', 1), 3)
  })
})
