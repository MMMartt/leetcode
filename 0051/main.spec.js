import { deepStrictEqual, strictEqual } from 'assert'
import { createChessBoard, getSelectableSquare, solution } from './main'

describe('0051-solution', function () {
  this.timeout(0)
  it('getSelectablePos should work', () => {
    deepStrictEqual(getSelectableSquare(createChessBoard(2), 0, 2), [])
    deepStrictEqual(getSelectableSquare(createChessBoard(2), 0, 1), [])
    deepStrictEqual(getSelectableSquare([2, 3], 1, 2), [])
    deepStrictEqual(getSelectableSquare(createChessBoard(3), 0, 3), [5, 7])
    deepStrictEqual(getSelectableSquare(createChessBoard(4), 0, 4), [
      6,
      7,
      9,
      11,
      13,
      14,
    ])
  })

  it('should get no solution while n = 1', () => {
    strictEqual(solution(1).length, 1)
  })

  it('should get no solution while n = 2', () => {
    deepStrictEqual(solution(2), [])
  })

  it('should get no solution while n = 3', () => {
    strictEqual(solution(3).length, 0)
  })

  it('should get 92 solutions while n = 8', () => {
    strictEqual(solution(8).length, 92)
  })

  it('should get solution while n = 9', () => {
    strictEqual(solution(9).length, 352)
  })

  it('should get solution while n = 10', () => {
    strictEqual(solution(10).length, 724)
  })

  // it('should get 14200 solution while n = 12', () => {
  //   assert.strictEqual(solution(12).length, 14200)
  // })
  it('should get solution while n = 4', () => {
    deepStrictEqual(
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
