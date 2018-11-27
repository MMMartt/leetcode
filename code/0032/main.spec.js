const assert = require('assert')
const solution = require('./main')

describe('0032-solution', () => {
  it('should get ((', () => {
    assert.equal(solution('(('), 0)
  })
  it('should get ()', () => {
    assert.equal(solution('()'), 2)
  })
  it('should get ()()', () => {
    assert.equal(solution('()()'), 4)
  })
  it('should get (()())', () => {
    assert.equal(solution('(()())'), 6)
  })
  it('should get (()())()', () => {
    assert.equal(solution('(()())()'), 8)
  })
  it('should get (()', () => {
    assert.equal(solution('(()'), 2)
  })
  it('should get )()())', () => {
    assert.equal(solution(')()())'), 4)
  })
  it('should get )()())', () => {
    assert.equal(solution(')()())'), 4)
  })
  it('should get )(((((()())()()))()(()))(', () => {
    assert.equal(solution(')(((((()())()()))()(()))('), 22)
  })
  it('should get (()()', () => {
    assert.equal(solution('(()()'), 4)
  })
  it('should get ()(()', () => {
    assert.equal(solution('()(()'), 2)
  })
  it('should get )()(((())))(', () => {
    assert.equal(solution(')()(((())))('), 10)
  })
  it('should get ")(())))(())())"', () => {
    assert.equal(solution(')(())))(())())'), 6)
  })

})
