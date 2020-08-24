/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0, n = nums.length
    for(let fast = 1; fast < n; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow + 1
};
// @lc code=end

