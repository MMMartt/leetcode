/**
 * @param {string} str
 * @return {number}
 */
const longestValidParentheses = (str) => {
  const characters = Array.from(str)
  let stackParentheses = []
  let max = 0
  for (let i = 0; i < characters.length; i++) {
    const cha = characters[i]
    switch (cha) {
      case '(':
        broken = false
        stackParentheses.push(i)
        break
      case ')':
        if (stackParentheses.length > 0) {
          if (stackParentheses.length === 1) {
            max += i - stackParentheses[stackParentheses.length - 1] + 1
          }
          stackParentheses.pop()
        } else {
          return Math.max(max, longestValidParentheses(str.slice(i + 1)))
        }
    }
  }
  if (stackParentheses.length > 0) {
    return stackParentheses.reduce((a, v, i) => {
      return Math.max(a, v - (i === 0 ? -1 : stackParentheses[i - 1]) - 1)
    }, characters.length - 1 - stackParentheses[stackParentheses.length - 1])
  }
  return max
}

module.exports = longestValidParentheses
