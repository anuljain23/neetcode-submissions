class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let l = 0
        let r = 1
        while(r<prices.length){
            if(prices[l] < prices[r]){
                const profit = prices[r] - prices[l]
                maxProfit = Math.max(maxProfit,profit)
            }else{
                l = r
            }
            r+=1
        }
        return maxProfit
    }
}
