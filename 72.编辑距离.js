/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n1 = word1.length, n2 = word2.length
    let dp = new Array(n1 + 1).fill().map(() => new Array(n2 + 1))
    dp[0][0] = 0
    for(let i = 1; i <= n1; i++) {
        dp[i][0] = i
    }
    for(let j = 1; j <= n2; j++) {
        dp[0][j] = j
    }

    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            // dp从1开始计算，字符串从0开始
            if (word1[i - 1] === word2[j - 1])
                dp[i][j] = dp[i-1][j-1]
            else
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
    }
    return dp[n1][n2]
};
// @lc code=end

