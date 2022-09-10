function coinChange(coins: number[], amount: number): number {
  const MAX = amount + 1;
  const dp = new Array(MAX).fill(MAX);
  dp[0] = 0;
  for (let amount_ = 1; amount_ <= amount; amount_++) {
    for (const coin of coins) {
      if (amount_ - coin >= 0) {
        dp[amount_] = Math.min(dp[amount_], dp[amount_ - coin] + 1);
      }
    }
  }
  return dp[amount] === MAX ? -1 : dp[amount];
}
