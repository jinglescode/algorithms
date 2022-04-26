/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let highestProfit = 0;
  let highestSellPrice = 0;

  for (let i = prices.length - 1; i >= 00; i--) {
    let thisPrice = prices[i];
    if (thisPrice > highestSellPrice) {
      highestSellPrice = thisPrice;
    } else if (highestSellPrice - thisPrice > highestProfit) {
      highestProfit = highestSellPrice - thisPrice;
    }
  }
  return highestProfit;
};
