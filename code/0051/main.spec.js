const assert = require('assert')
const { solution, getSelectableSquare, createChessBoard } = require('./main')

describe('0051-solution', function () {
  this.timeout(0)
  it('getSelectablePos should work', () => {
    assert.deepEqual(getSelectableSquare(createChessBoard(2), 0, 2), [])
    assert.deepEqual(getSelectableSquare(createChessBoard(2), 0, 1), [])
    assert.deepEqual(getSelectableSquare([2, 3], 1, 2), [])
    assert.deepEqual(getSelectableSquare(createChessBoard(3), 0, 3), [5, 7])
    assert.deepEqual(getSelectableSquare(createChessBoard(4), 0, 4), [
      6,
      7,
      9,
      11,
      13,
      14,
    ])
  })

  it('should get no solution while n = 1', () => {
    assert.equal(solution(1).length, 1)
  })

  it('should get no solution while n = 2', () => {
    assert.deepEqual(solution(2), [])
  })

  it('should get no solution while n = 3', () => {
    assert.equal(solution(3).length, 0)
  })

  it('should get 92 solutions while n = 8', () => {
    assert.equal(solution(8).length, 92)
  })

  it('should get solution while n = 9', () => {
    assert.equal(solution(9).length, 352)
  })

  it('should get solution while n = 10', () => {
    assert.equal(solution(10).length, 724)
  })

  // it('should get 14200 solution while n = 12', () => {
  //   assert.equal(solution(12).length, 14200)
  // })
  it('should get solution while n = 4', () => {
    assert.deepEqual(
      solution(4)
        .map(a => a.join(''))
        .sort(),
      [
        // [1,7, 8, 14]
        [
          '.Q..', // Solution 1
          '...Q',
          'Q...',
          '..Q.',
        ],
        [
          '..Q.', // Solution 2
          'Q...',
          '...Q',
          '.Q..',
        ],
      ]
        .map(a => a.join(''))
        .sort()
    )
  })
})
