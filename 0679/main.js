/* You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

Example 1:
Input: [4, 1, 8, 7]
Output: True
Explanation: (8-4) * (7-1) = 24
Example 2:
Input: [1, 2, 1, 2]
Output: False
Note:
The division operator / represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
Every operation done is between two numbers. In particular, we cannot use - as a unary operator. For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
You cannot concatenate numbers together. For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12. */

/**
 * @param {number[]} l
 * @param {number} n
 * @returns {number[][]}
 */
const pickN = (l, n) => {
  if (l === []) return []
  if (n === 0) return []
  return l
    .map((c, i) => {
      if (n === 1) return [[l[i]]]
      return pickN(l.slice(i + 1), n - 1).map(choice => [l[i], ...choice])
      // return [l[i], ...pickN(l.slice(i + 1), n - 1)]
    })
    .reduce((a, c) => [...a, ...c], [])
    .filter(c => c.length === n)
}

/**
 * @param {number[]} list
 * @return {number[][][]}
 */
const getALlCombines = list => {
  if (list.length < 2) return null
  const possibleLens = Array.from(new Array(list.length))
    .map((_, i) => i)
    .slice(1)
  return possibleLens
    .map(num => {
      return pickN(
        list.map((_, i) => i),
        num
      )
    })
    .reduce((a, c) => [...a, ...c], [])
    .map(a => [a.map(i => list[i]), list.filter((_, i) => !a.includes(i))])
}

/** cuz only numbers can be leaf node, tree may be described as '* 4 - 1 / 2 3' */
/**
 * @param {number[]} remains
 * @returns {Array<'*'|'-'|'/'|'+'|number>[]}
 */
const getAllTrees = remains => {
  /* TODO: necessary??? */ if (remains.length === 0) return []
  if (remains.length === 1) return [remains]
  const combines = getALlCombines(remains)
  const result = ['*', '/', '-', '+'].reduce((acc, op) => {
    const result = combines.reduce((acc, [l, r]) => {
      return [
        ...acc,
        ...getAllTrees(l).reduce(
          /**
           * @param {Array<string|number>[]} acc
           * @returns {Array<string|number>[]}
           */
          (acc, lr) => {
            return [
              ...acc,
              ...getAllTrees(r).reduce(
                /**
                 * @param {Array<string|number>[]} acc
                 * @returns {Array<string|number>[]}
                 */
                (acc, rr) => {
                  return [...acc, [op, ...lr, ...rr]]
                },
                []
              ),
            ]
          },
          []
        ),
      ]
    }, [])
    return [...acc, ...result]
  }, [])
  return result
}

const calcTree = (tree, c) => {
  const stack = []
  const calc = op =>
    ({
      '*': (a, b) => a * b,
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '/': (a, b) => a / b,
    }[op])
  return tree.reduceRight((acc, curr) => {
    if (c) console.log(stack, c)
    if (isNaN(curr)) {
      acc = calc(curr)(stack.pop(), stack.pop())
      stack.push(acc)
    } else stack.push(curr)
    return acc
  }, null)
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = nums => {
  const result = getAllTrees(nums).find(tree => {
    /** cuz only numbers can be leaf node, tree may be described as '* 4 - 1 / 2 3' */
    return Math.abs(24 - calcTree(tree)) < 0.001
  })
  // (9-1)*(1+2)
  console.log(result)
  return !!result
}

module.exports = {
  judgePoint24,
  getAllTrees,
  getALlCombines,
  calcTree,
}
