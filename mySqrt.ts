function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }
  let low = 1,
    high = Math.floor(x / 2),
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (x == mid * mid) {
      return mid;
    }
    if (x < mid * mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low - 1;
}
