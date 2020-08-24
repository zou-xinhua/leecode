/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (49.07%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    74.2K
 * Total Submissions: 151.2K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 *
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 *
 *
 *
 * 示例:
 *
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let COUNT = 4, len = s.length, res = [], path = new Array(COUNT)
    if (len < COUNT || len > COUNT * 3)
        return []
    var dfs = function(s, i, index) {
        if (i === len) {
            if (index === 4) {
                res.push(path.join('.'))
            }
            return
        }
        if (index == 4)
            return
        if (s[i].charAt() === '0') {
            path[index] = '0'
            dfs(s, i + 1, index + 1)
        }
        let addr = 0
        for(let end = i; end < len; end++) {
            addr = addr * 10 + (s[end].charAt() - '0')
            if (addr > 0 && addr <= 255) {
                path[index] = addr
                dfs(s, end + 1, index + 1)
            } else
                break
        }
    }
    dfs(s, 0, 0)
    return res
};
// @lc code=end
