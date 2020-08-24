/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 *
 * https://leetcode-cn.com/problems/super-pow/description/
 *
 * algorithms
 * Medium (43.52%)
 * Likes:    79
 * Dislikes: 0
 * Total Accepted:    6.3K
 * Total Submissions: 14.5K
 * Testcase Example:  '2\n[3]'
 *
 * 你的任务是计算 a^b 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
 *
 * 示例 1:
 *
 * 输入: a = 2, b = [3]
 * 输出: 8
 *
 *
 * 示例 2:
 *
 * 输入: a = 2, b = [1,0]
 * 输出: 1024
 *
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const base = 1337
var superPow = function(a, b) {
    if (!b.length) return 1
    let last = b.pop()
    let last_part1 = mypow(a, last)
    let last_part2 = mypow(superPow(a, b), 10)
    return (last_part1 * last_part2) % base
};
let mypow = function(a, k) {
    a = a % base
    let res = 1
    for(let i = 0; i < k; i++) {
        res = res * a
        res = res % base
    }
    return res
}
// @lc code=end

