/* On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'

懒得整理了

*/

/**
 * @param {string[][]} board
 * @return {number}
 */
const numRookCaptures = function (board) {
  let result = 0
  for (let i = 0; i < 8; i++) {
    let met = -1

    let last = '.'
    let count = 0
    for (let j = 0; j < 8; j++) {
      const curr = board[i][j]

      if (curr === 'B') {
        if (last === 'R') {
          break
        }
        last = 'B'
      }

      if (curr === 'p') {
        if (last === 'R') {
          count++
          break
        }
        last = 'p'
      }

      if (curr === 'R') {
        met = j
        if (last === 'p') {
          count++
        }
        last = 'R'
      }
    }
    if (met > -1) {
      result += count
      last = '.'
      count = 0
      for (let j = 0; j < 8; j++) {
        const curr = board[j][met]

        if (curr === 'B') {
          if (last === 'R') {
            break
          }
          last = 'B'
        }

        if (curr === 'p') {
          if (last === 'R') {
            count++
            break
          }
          last = 'p'
        }

        if (curr === 'R') {
          if (last === 'p') {
            count++
          }
          last = 'R'
        }
      }
      result += count
      break
    }
  }
  return result
}

export default numRookCaptures
