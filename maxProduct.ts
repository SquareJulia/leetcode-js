function maxProduct(nums: number[]): number {
  let pos = 0,
    neg = 0,
    posMax = 0,
    negMax = -Infinity;
  for (const num of nums) {
    if (num < 0) {
      let tmp = pos;
      pos = neg * num;
      neg = Math.min(tmp * num, num);
    } else {
      pos = Math.max(pos * num, num);
      neg *= num;
    }
    posMax = Math.max(posMax, pos);
    negMax = Math.max(negMax, neg);
  }
  return posMax > 0 ? posMax : negMax;
}
