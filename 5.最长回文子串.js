/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.43%)
 * Likes:    2575
 * Dislikes: 0
 * Total Accepted:    348.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length, res = ''
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            let left = i, right = i + j
            while (left >= 0 && right < n - 1 && s[left] === s[right]) {
                left--
                right++
            }
            let length = right - left - 1
            if (length > res.length)
                res = s.substring(left + 1, right)
        }
    }
    return res
};
// @lc code=end

