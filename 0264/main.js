/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
  // const uglies = [1, 2, 3, 4, 5]
  const uglies = [2, 3, 4, 5]
  const ugly2 = [8, 10],
    ugly3 = [6, 9, 12, 15],
    ugly5 = [10, 15, 20, 25]
  // const ugly2 = [2, 4, 5, 8, 10], ugly3 = [3, 6, 9, 12, 15], ugly5 = [5, 10, 15, 20, 25]

  let len = 4,
    current
  const update = (arr, min, multi) => {
    if (arr[0] === min) {
      arr.shift()
    }
    arr.push(multi * min)
  }
  while (len < n - 1) {
    current = uglies[len - 1]
    const min = Math.min(ugly2[0], ugly3[0], ugly5[0])
    update(ugly2, min, 2)
    update(ugly3, min, 3)
    update(ugly5, min, 5)
    uglies.push(min)
    len++
  }
  return [1, ...uglies][n - 1]
}

export default nthUglyNumber
