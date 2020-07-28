/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length
    if (n < 1) return 0
    let dp_pre = nums[0]
    let dp_current = 0, res = dp_pre
    for(let i = 1; i < n; i++) {
        dp_current = Math.max(nums[i], nums[i] + dp_pre)
        dp_pre = dp_current
        res = Math.max(res, dp_current)
    }
    return res
};
// @lc code=end

