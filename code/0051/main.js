/**
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * Example:
 *
 * Input: 4
 * Output: [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 *
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 */

// TODO: 递归有机会可以优化一下

/**
 * @param {number} n
 * @returns {number[]}
 */
const createChessBoard = n => Array.from(new Array(n * n)).map((_, i) => i)

/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @returns {boolean}
 */
const isConflicted = (a, b, n) => {
  const aRow = Math.floor(a / n)
  const bRow = Math.floor(b / n)
  const aCol = a % n
  const bCol = b % n
  return (
    aCol === bCol ||
    aRow === bRow ||
    aCol - bCol === aRow - bRow ||
    aCol - bCol === bRow - aRow
  )
}

/**
 * @param {number[]} remains
 * @param {number} n
 * @param {number} position
 * @returns {number[]}
 */
const getSelectableSquare = (remains, position, n) => {
  return remains.filter(i => !isConflicted(i, position, n))
}

/**
 * @param {number[]} remainSquares
 * @param {number} remainQueens
 * @param {number} n
 * @returns {number[][]}
 */
const findResults = (remainSquares, remainQueens, n) => {
  // console.log(remainSquares, remainQueens, n)
  if (remainQueens === 1) {
    return remainSquares.map(a => [a])
  }
  if (remainSquares.length === 0) {
    return []
  }
  /**
   * @param {number[][]} acc
   * @param {number} curr
   * @param {number} i
   * @return {number[][]}
   */
  const reduceFn = (acc, curr, i) => {
    return [
      ...acc,
      ...findResults(
        getSelectableSquare(remainSquares.slice(i + 1), curr, n),
        remainQueens - 1,
        n
      )
        .filter(a => a.length === remainQueens - 1)
        .map(a => [curr, ...a]),
    ]
  }
  return remainSquares.reduce(reduceFn, [])
}

/**
 * @param {number[]} board
 * @param {number} n
 * @returns {string[]}
 */
const printChess = (board, n) => {
  let remains = n
  return Array.from(new Array(n)).map((_, i) =>
    Array.from(new Array(n))
      .map((_, j) => {
        if (board[n - remains] === i * n + j) {
          remains--
          return 'Q'
        }
        return '.'
      })
      .join('')
  )
}
/**
 * @param {number} n
 * @return {string[][]}
 */
const solution = n => {
  const chessBoard = createChessBoard(n)
  // console.log(findResults(chessBoard, n, n))
  return findResults(chessBoard, n, n).map(board => printChess(board, n))
}

module.exports = {
  solution,
  getSelectableSquare,
  createChessBoard,
}
