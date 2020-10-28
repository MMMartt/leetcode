/*Given a string, find the length of the longest substring without repeating characters.

  Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let usedSet = {}
  let max = 0
  let startIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (usedSet[s[i]] !== undefined && usedSet[s[i]] >= startIndex) {
      startIndex = usedSet[s[i]] + 1
    }
    if (i - startIndex + 1 > max) {
      max = i - startIndex + 1
    }
    usedSet[s[i]] = i
  }
  return max
}

export default lengthOfLongestSubstring
