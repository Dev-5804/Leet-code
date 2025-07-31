/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (let price of prices) {
        if(price < minPrice){
            minPrice = price;
        }
        else {
            if(profit < (price - minPrice)){
                profit = price - minPrice;
            }
            // instead of this Math.max(price, price - minPrice) can also be used
        }
    }
    return profit;
}