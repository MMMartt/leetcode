const assert = require('assert')
const solution = require('./main')

describe('solution', () => {
  it('should get basic solution', () => {
    /*     [
      [".Q..",  // Solution 1
       "...Q",
       "Q...",
       "..Q."],
      ["..Q.",  // Solution 2
       "Q...",
       "...Q",
       ".Q.."]
     ] */
    // const result = solution(4)
    assert.deepEqual
    assert.equal(solution(4).sort(), [
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
    ])
  })
})
