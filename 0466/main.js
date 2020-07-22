/*Define S = [s,n] as the string S which consists of n connected strings s. For example, ["abc", 3] ="abcabcabc".

  On the other hand, we define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. For example, “abc” can be obtained from “abdbec” based on our definition, but it can not be obtained from “acbbe”.

You are given two non-empty strings s1 and s2 (each at most 100 characters long) and two integers 0 ≤ n1 ≤ 106 and 1 ≤ n2 ≤ 106. Now consider the strings S1 and S2, where S1=[s1,n1] and S2=[s2,n2]. Find the maximum integer M such that [S2,M] can be obtained from S1.

  Example:

Input:
  s1="acb", n1=4
s2="ab", n2=2

Return:
  2
*/
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
const getMaxRepetitions = (s1, n1, s2, n2) => {
  // position to index array

  /**
   * @example: p2i("abaacb", "aabcc") == [[0, 2, 3], [0, 2, 3], [1, 5], [4]]
   * @param {string[], string[]} srcString
   * @param {string[], string[]} desString
   * @returns [numbers[]]
   */
  const p2i = (srcString, desString) => {
    const findAllIndexIn = array => value => {
      return array
        .map((v, i) => [v, i])
        .filter(v => v[0] === value)
        .map(([v, i]) => i)
    }
    return desString.map(findAllIndexIn(srcString))
  }
  const indexesOfValue = p2i(Array.from(s1), Array.from(s2))
  if (indexesOfValue.findIndex(positions => positions.length === 0) !== -1) {
    return 0
  }
  // where one cycle ends while cycle started at that index
  const ends = []
  // we need to access to value of array multi times in a single loop, forEach is not that good to express (emmm)
  for (let i = 0; i < indexesOfValue[0].length; i++) {
    let currentPosition = indexesOfValue[0][i]
    let cycleCount = 0
    for (let j = 1; j < indexesOfValue.length; j++) {
      const valueFound = indexesOfValue[j].find(
        position => position > currentPosition
      )
      if (valueFound === undefined) {
        cycleCount++
        currentPosition = indexesOfValue[j][0]
      } else {
        currentPosition = valueFound
      }
    }
    ends.push([indexesOfValue[0][i], currentPosition, cycleCount])
  }
  const points = ends.map(([outIndex, position, cycle]) => {
    const next = ends.findIndex(([inIndex]) => inIndex > position)
    if (next === -1) {
      return [outIndex, position, cycle, 0, 1]
    }
    return [outIndex, position, cycle, next, 0]
  })
  let m = -1
  let currentPosition = 0
  let cycleCount = 0
  let newCycle = 0
  let arrived = indexesOfValue[0].map(() => [])

  let findCircle = false
  while (cycleCount < n1) {
    cycleCount += newCycle

    m++
    let current = points[currentPosition]
    cycleCount += current[2]
    currentPosition = current[3]
    newCycle = current[4]
    if (!findCircle) {
      if (arrived[currentPosition].length === 2) {
        findCircle = true
        let circleMStep = m - arrived[currentPosition][0]
        let circleCStep = cycleCount - arrived[currentPosition][1]
        const restCycle = n1 - cycleCount - 1
        const circleRunTimes =
          (restCycle - (restCycle % circleCStep)) / circleCStep
        cycleCount += circleRunTimes * circleCStep
        m += circleRunTimes * circleMStep
      } else {
        arrived[currentPosition].push(m, cycleCount)
      }
    }
    // console.log('cycleCount ', cycleCount, ' currentPos ', currentPosition, ' new ', newCycle)
  }
  // console.log(indexesOfValue)
  // console.log(ends)
  // console.log((m - m % n2) / n2)
  return (m - (m % n2)) / n2
}

module.exports = getMaxRepetitions
