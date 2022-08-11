function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    const target = Math.abs(nums[i]) - 1;
    if (target < n) {
      nums[target] = -Math.abs(nums[target]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
}
