function minimumTotal(triangle: number[][]): number {
    const rowLen = triangle.length;
    const dp = new Array(rowLen);
    dp[0] = triangle[0][0];
    for (let row = 1; row < rowLen; row++) {
      dp[row] = dp[row - 1] + triangle[row][row];
      for (let col = row - 1; col > 0; col--) {
        dp[col] = triangle[row][col] + Math.min(dp[col - 1], dp[col]);
      }
      dp[0] += triangle[row][0];
    }
    
    return dp.reduce((prev, cur) => Math.min(prev, cur));
  }
  