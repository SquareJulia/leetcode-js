function maxProfit(prices: number[]): number {
  let a = prices[0],
    b = 0;
  for (let day = 1; day < prices.length; day++) {
    b = Math.max(b, prices[day] - a);
    a = Math.min(a, prices[day]);
  }
  return b;
}
