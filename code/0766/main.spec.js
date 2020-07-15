const assert = require('assert')
const solution = require('./main')

describe('0766-solution', () => {
  it('should get [[1,2,3,4],[5,1,2,3],[9,5,1,2]]', () => {
    assert.equal(
      solution([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
      ]),
      true
    )
  })
  it('should get [[1,2],[2,2]]', () => {
    assert.equal(
      solution([
        [1, 2],
        [2, 2],
      ]),
      false
    )
  })
  it('should get [[1]]', () => {
    assert.equal(solution([[1]]), true)
  })
  it('should get [[1],[1]]', () => {
    assert.equal(solution([[1], [1]]), true)
  })
})
