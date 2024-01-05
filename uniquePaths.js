/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function uniquePaths(m, n) {
    // Create a 2D array to store the number of paths for each position
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the top row and left column with 1, as there is only one way to reach any cell in the first row or column
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Fill in the rest of the dp array using the recurrence relation: dp[i][j] = dp[i-1][j] + dp[i][j-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The result is stored in the bottom-right corner of the dp array
    return dp[m - 1][n - 1];
}

// Example usage:
const m = 3;
const n = 2;
const result = uniquePaths(m, n);
console.log(result);