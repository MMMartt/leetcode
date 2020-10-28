/*A message containing letters from A-Z is being encoded to numbers using the following mapping way:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Beyond that, now the encoded string can also contain the character '*', which can be treated as one of the numbers from 1 to 9.

Given the encoded message containing digits and the character '*', return the total number of ways to decode it.

Also, since the answer may be very large, you should return the output mod 109 + 7.

Example 1:
Input: "*"
Output: 9
Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".
Example 2:
Input: "1*"
Output: 9 + 9 = 18
Note:
The length of the input string will fit in rang e [1, 105].
The input string will only contain the character '*' and digits '0' - '9'.*/
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = s => {
  const pos = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '*': 10,
  }
  //            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, *],
  const one = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  const two = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]
  const times = [
    //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, *],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], // ${v}
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], // 1${v}
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 6], // 2${v}
  ]
  let preValue = pos[s[0]]
  let firCount = 1 // C n-2
  let secCount = times[0][pos[s[0]]] // C n-1
  for (let i = 1; i < s.length; i++) {
    const curr = pos[s[i]]
    // console.log(firCount, secCount, preValue, curr)
    let currResult = secCount * times[0][curr]
    currResult += firCount * one[preValue] * times[1][curr]
    currResult += firCount * two[preValue] * times[2][curr]
    // console.log(currResult)
    if (currResult > 1000000007) {
      currResult = currResult % 1000000007
    }
    firCount = secCount
    secCount = currResult
    preValue = curr
  }
  return secCount
}

export default numDecodings
