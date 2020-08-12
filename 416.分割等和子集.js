/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let n = nums.length
    if (n % 2 !== 0) return false
    let sum = 0, dp = new Array(sum + 1).fill(false)
    for(let num of nums)
        sum += num
    sum = sum / 2
    dp[0] = true
    for(let i = 0; i < n; i++) {
        for(let j = sum; j >= 0; j--) {
            if (nums[i] <= j)
                dp[j] = dp[j] || dp[j - nums[i]]
        }
    }
    return dp[sum]
};
// @lc code=end

