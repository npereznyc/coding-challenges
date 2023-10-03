// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices){
 //instantiate two variables for buy and sell, each at 0
    //find samllest number in array, increment buy by that number
    //iterate from that index to the end; if prices[i+1]>prices[i], increment sell by prices[i+1]
    //subtract buy from sell

    //if there are fewer than 2 values, return 0:
    if(prices.length<2){
        return 0
    }

    //instantiate variable 'buy' as minimum number in prices:
    let buy=Math.min(...prices)
    console.log('buy:', buy)

    //instantiate variable 'sell' as 0:
    let sell=0


    for(let i=buy; i<prices.length; i++){
        if(prices[prices.length-1]===buy){
            return 0
        }
        if(prices[i]<prices[i+1]){
            sell=prices[i+1]
           
        } else if (prices[i]>prices[i+1]) {
            sell=prices[i]
        }
    } console.log(sell)

    return sell-buy
}

maxProfit([7,1,5,3,6,4])