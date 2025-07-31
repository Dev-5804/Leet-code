/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((-1*(prices[i] - prices[j])) > profit) {
                profit = -1*(prices[i] - prices[j])
            }
        }
    }
    return profit;
};
