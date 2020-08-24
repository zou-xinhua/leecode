/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (43.08%)
 * Likes:    460
 * Dislikes: 0
 * Total Accepted:    100.7K
 * Total Submissions: 226K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length
    let res = new Array(m + n).fill(0)
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            // p1是高位，p2是低位
            let p1 = i + j, p2 = i + j + 1
            let sum = (num1[i] - '0') * (num2[j] - '0') + res[p2]
            res[p2] = sum % 10
            res[p1] += parseInt(sum / 10)
        }
    }
    let i = 0
    while (i === 0) {
        if (res[i] === 0) {
            res.shift()
        } else
            break
    }
    return res.length ? res.join('') : '0'
};
// @lc code=end

