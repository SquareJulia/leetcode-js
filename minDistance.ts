function minDistance(word1: string, word2: string): number {
  if (word1.length === 0 || word2.length === 0) {
    return word1.length === 0 ? word2.length : word1.length;
  }
  const dp: number[][] = Array.from(
    { length: word1.length + 1 },
    () => Array.from({ length: word2.length + 1 }),
    () => 0
  );
  for (let i = 1; i <= word2.length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  dp[0][0] = 0;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      const fromReplace =
        dp[i - 1][j - 1] + (word1[i - 1] == word2[j - 1] ? 0 : 1);
      dp[i][j] = Math.min(dp[i][j], fromReplace);
    }
  }
  return dp[word1.length][word2.length];
}
