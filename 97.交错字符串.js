/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 *
 * https://leetcode-cn.com/problems/interleaving-string/description/
 *
 * algorithms
 * Hard (45.24%)
 * Likes:    322
 * Dislikes: 0
 * Total Accepted:    34.2K
 * Total Submissions: 75.6K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出：true
 *
 *
 * 示例 2：
 *
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出：false
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length //m为行，n为列
    if (m+n !== s3.length)
        return
    // 一维dp
    let dp = new Array(n + 1)
    dp[0] = true
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            let p = i + j - 1
            if (i > 0)
                dp[j] = dp[j] && s1.charAt(i - 1) === s3.charAt(p)
            if (j > 0)
                dp[j] = dp[j] || (dp[j - 1] && s2.charAt(j - 1) === s3.charAt(p))
        }
    }
    return dp[n]

    // 二维dp
    // let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill())
    // dp[0][0] = true
    // for(let i = 0 ; i <= m; i++) {
    //     for(let j = 0; j <= n; j++) {
    //         let p = i + j - 1
    //         if (i > 0)
    //             dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(p))
    //         if (j > 0)
    //             dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt(p))
    //     }
    // }
    // return dp[m][n]
};
console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
// @lc code=end
