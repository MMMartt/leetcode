/**
 * integer only
 * only first two numbers and the last one matters
 * @param {string} raw "1, 3..18" => [1, 3, 5, 7, 9, 11, 13, 15, 17]
 * @return {number[]}
 */
export const createArrayBySpread = raw => {
  const [arrays, end] = raw.split('..')
  const endNum = parseInt(end)
  const [a, b] = arrays.split(',').map(a => parseInt(a.trim()))
  const space = isNaN(b) ? 1 : b - a
  const result = []
  for (let i = 0; i * space + a <= endNum; i++) {
    result.push(a + i * space)
  }
  return result
}
