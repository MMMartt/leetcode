import { strictEqual } from 'assert'
import {
  judgePoint24 as solution,
  getALlCombines,
  getAllTrees,
  calcTree,
} from './main'

describe('0679-utilities', () => {
  it('should work fine with getAllCombines [1,2,3,4]', () => {
    strictEqual(getALlCombines([1, 2, 3, 4]).length, 14)
  })
  it('should work fine with getAllTrees [1,2,3,4]', () => {
    strictEqual(getAllTrees([1, 2, 3, 4]).length, 7680)
  })
  it('should calcTree works 1', () => {
    strictEqual(calcTree(['*', '-', 9, 1, '+', 1, 2]), 24)
  })
  it('should calcTree works 2', () => {
    // 8/(3-8/3) = 24
    strictEqual(
      Math.abs(calcTree(['/', 8, '-', 3, '/', 8, 3], true) - 24) < 0.001,
      true
    )
  })
})

describe('0679-solution', () => {
  it('should get [4, 1, 8, 7] solution', () => {
    strictEqual(solution([4, 1, 8, 7]), true)
  })

  it('should get [1, 2, 1, 2] solution', () => {
    strictEqual(solution([1, 2, 1, 2]), false)
  })

  it('should get [1,5,9,1] solution', () => {
    strictEqual(solution([1, 5, 9, 1]), false)
  })
  it('should get [1,9,1,2] solution', () => {
    strictEqual(solution([1, 9, 1, 2]), true)
  })

  it('should get [3,3,8,8] solution', () => {
    strictEqual(solution([3, 3, 8, 8]), true)
  })
})
