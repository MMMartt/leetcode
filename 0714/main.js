/*Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

  You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

  Example 1:
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
  Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
Note:

0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.*/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  let profit = 0
  let max = prices[0]
  let min = prices[0]
  let withStock = false
  for (let i = 0; i < prices.length; i++) {
    const current = prices[i]
    if (withStock) {
      if (current > max) {
        profit += current - max
        max = current
      } else if (max - current > fee) {
        withStock = false
        min = current
        max = current
      }
    } else {
      if (current > min + fee) {
        withStock = true
        profit += current - min - fee
        max = current
      } else if (current < min) {
        min = current
      }
    }
  }
  return profit
}

export default maxProfit
