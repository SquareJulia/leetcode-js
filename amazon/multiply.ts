function multiply(A: number, B: number): number {
  let ans = 0;
  if (A > B) {
    [A, B] = [B, A];
  }
  while (A) {
    if (A & 1) {
      ans += B;
    }
    A >>= 1;
    B <<= 1;
  }
  return ans;
}
