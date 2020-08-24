/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map()
    for(let num of nums) {
        map.set(num, 1)
    }
    let longestLength = 0
    for(let num of nums) {
        if (!map.has(num - 1)) {
            let currentNum = num
            let currentLength = 1
            while(map.has(currentNum + 1)) {
                currentNum++
                currentLength++
            }
            longestLength = Math.max(currentLength, longestLength)
        }
    }
    return longestLength
};
// @lc code=end

