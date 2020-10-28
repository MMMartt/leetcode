import { strictEqual } from 'assert'
import solution from './main'

/**
 * @param {string[]} ps
 */
const getIndex = ps =>
  ps.map(p => (parseInt(p[0]) - 1) * 8 + 'abcdefgh'.indexOf(p[1]))

/**
 * @returns {string[]}
 */
const createIndexes = (as, bs) =>
  as.map(a => Array.from(bs).map(b => a + b)).reduce((a, c) => a.concat(c))

/**
 * board => [rook, bishops, pawns]
 * @param {[number[], number[], number[]]} board
 * @returns {string[][]}
 */
const createBoard = board => {
  return Array.from(new Array(8)).map((_, i) =>
    Array.from(new Array(8)).map((_, j) => {
      const index = i * 8 + j
      return board[0].includes(index)
        ? 'R'
        : board[1].includes(index)
        ? 'B'
        : board[2].includes(index)
        ? 'p'
        : '.'
    })
  )
}

describe('0999-solution', () => {
  it('should get basic solution', () => {
    strictEqual(solution(createBoard([[0], [], []])), 0)
  })

  it('should get example 1 solution', () => {
    strictEqual(solution(createBoard([[19], [], [11, 23, 51]])), 3)
  })

  it('should get example 2 solution', () => {
    strictEqual(
      solution(
        createBoard([
          getIndex(['5d']),
          getIndex(['6d', '4d', '5c', '5e']),
          getIndex(
            createIndexes([3, 4, 5, 6, 7], 'bcdef').filter(
              a => !['6d', '4d', '5c', '5e', '5d'].includes(a)
            )
          ),
        ])
      ),
      0
    )
  })

  it('should get example 3 solution', () => {
    strictEqual(
      solution([
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'B', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
      3
    )
  })

  it('should get 3 solutions', () => {
    strictEqual(
      solution([
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', 'R', '.', '.', '.', 'p'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
      3
    )
  })
})
