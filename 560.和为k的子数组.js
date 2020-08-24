/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.81%)
 * Likes:    556
 * Dislikes: 0
 * Total Accepted:    65.8K
 * Total Submissions: 146.7K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例 1 :
 *
 *
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 *
 *
 * 说明 :
 *
 *
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n = nums.length, map = new Map()
    let res = 0, total_i = 0
    map.set(0, 1)
    for(let i = 0; i < n; i++) {
        total_i += nums[i]
        let total_j = total_i - k
        if (map.has(total_j))
            res += map.get(total_j)
        if (map.has(total_i))
            map.set(total_i, map.get(total_i) + 1)
        else
            map.set(total_i, 1)
    }
    return res
};
// @lc code=end

