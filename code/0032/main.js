/**
 * @param {string} str
 * @return {number}
 */
const longestValidParentheses = (arg) => {
  const characters = Array.from(arg)
  let stackParentheses = []
  let lastMax = 0
  let innerMax = 0
  let broken = false
  for (let i in characters) {
    const cha = characters[i]
    switch (cha) {
      case '(':
        broken = false
        stackParentheses.push(i)
        break
      case ')':
        if (stackParentheses.length > 0) {
          if (stackParentheses.length === 1) {
            if (!broken) {
              lastMax += i - stackParentheses[stackParentheses.length - 1] + 1
            } else {
              lastMax = Math.max(lastMax, i - stackParentheses[stackParentheses.length - 1] + 1)
            }
          } else {
            innerMax = i - stackParentheses[stackParentheses.length - 1] + 1
          }
          stackParentheses.pop()
        } else {
          return Math.max(lastMax, innerMax, longestValidParentheses(arg.slice(parseInt(i) + 1)))
        }
    }
  }
  if (stackParentheses.length > 0) {
    const max = stackParentheses.reduce((a, v, i) => {
      return Math.max(a, v - (i === 0 ? -1 : stackParentheses[i - 1]) - 1)
    }, characters.length - 1 - stackParentheses[stackParentheses.length - 1])
    return max
  }
  return Math.max(lastMax, innerMax)
}

module.exports = longestValidParentheses
