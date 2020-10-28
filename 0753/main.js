// There is a box protected by a password. The password is a sequence of n digits where each digit can be one of the first k digits 0, 1, ..., k-1.

// While entering a password, the last n digits entered will automatically be matched against the correct password.

// For example, assuming the correct password is "345", if you type "012345", the box will open because the correct password matches the suffix of the entered password.

// Return any password of minimum length that is guaranteed to open the box at some point of entering it.

// Example 1:

// Input: n = 1, k = 2
// Output: "01"
// Note: "10" will be accepted too.
// Example 2:

// Input: n = 2, k = 2
// Output: "00110"
// Note: "01100", "10011", "11001" will be accepted too.

// Note:

// n will be in the range [1, 4].
// k will be in the range [1, 10].
// k^n will be at most 4096.

/**
 * @param {{[k: string]: {[path: string]: string}}} graph
 * @param {string} start
 * @return {string}
 */
const traversalGraph = (graph, start = null) => {
  const keys = Object.keys(graph)
  // console.log(graph, start)
  if (keys.length === 0) return ''

  const key = start === null ? keys.find(k => graph[k] !== undefined) : start
  if (graph[key] === undefined) return null
  const paths = Object.keys(graph[key])

  let result = null
  let attempt = 0
  // attempt to find available path
  while (attempt < paths.length) {

    const path = paths[attempt]
    // console.log(key, ' to ', paths, 'attempt', attempt, path)
    const toStart = graph[key][path]

    // delete path and node
    const { [key]: pathToKey, ...other } = graph
    const { [path]: des, ...otherP } = pathToKey
    const newGraph = paths.length === 1 ? other : { [key]: otherP, ...other }

    // console.log(newGraph)
    result = traversalGraph(newGraph, toStart)

    if (result !== null) break
    attempt++
  }
  // console.log(key, paths, attempt, paths[attempt], result)
  // trace back
  if (result === null) return null

  return (start === null ? key : '') + paths[attempt] + result
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const crackSafe = (n, k) => {
  if (n === 1)
    return Array.from(new Array(k))
      .map((_, i) => i)
      .join('')
  const graph = Array.from(new Array(n - 1))
    .reduce(
      acc => {
        return acc.reduce((acc, curr) => {
          return [...acc, ...Array.from(new Array(k)).map((_, k) => curr + k)]
        }, [])
      },
      ['']
    )
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Array.from(new Array(k)).reduce(
          (acc, _, k) => ({ ...acc, [k]: key.slice(1) + k }),
          {}
        ),
      }
    }, {})
  return traversalGraph(graph)
}

export default crackSafe
