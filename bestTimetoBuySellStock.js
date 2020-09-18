//leetcode 121 Best Time to Buy and Sell Stock
//Sept. 17, 2020
var maxProfit = function(prices) {
    // let maxProfit=0;
    // for(let i=0; i<prices.length-1; i++){
    //     for(let j=i+1; j<prices.length; j++){
    //         if (prices[j]-prices[i] > maxProfit) {
    //             maxProfit = prices[j] - prices[i];
    //         }
    //     }
    // } return maxProfit;
    //^ this is O(N^2)
    
    // for faster runtime O(N)
    let maxProfit = 0;
    let low=prices[0];
    for(let i=0; i<prices.length; i++){
        if (prices[i] < low) low = prices[i]
        else if (prices[i]-low > maxProfit) maxProfit = prices[i]-low;
    } return maxProfit;
};