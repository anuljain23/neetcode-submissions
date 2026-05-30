class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length
        const realSum = n*(n+1)/2;
        let sum = 0;
        for(let i = 0; i<n; i++){
            sum = sum+nums[i];
        }
        return realSum-sum
    }
}
