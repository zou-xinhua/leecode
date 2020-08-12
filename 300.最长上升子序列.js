/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    if (n < 2) return n
    let tail = new Array(n), end = 0
    tail[0] = nums[0]

    for(let i = 1; i < n; i++) {
        let left = 0, right = end + 1
        while (left  < right) {
            let mid = (left + right) >> 1
            if (tail[mid] < nums[i])
                left = mid + 1
            else
                right = mid
        }
        console.log('left', left)
        tail[left] = nums[i]
        if (left === end + 1)
            end++
    }
    end++
    return end
};

console.log(lengthOfLIS([2,2]))
// @lc code=end

