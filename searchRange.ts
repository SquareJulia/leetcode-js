function searchRange(nums: number[], target: number): number[] {
  const firstGreaterThanOrEqual: (
    i: number,
    j: number,
    target: number
  ) => number = (i, j, target) => {
    if (i > j) {
      return i;
    }
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] >= target) {
      if (mid == i || nums[mid - 1] < target) {
        return mid;
      }
      return firstGreaterThanOrEqual(i, mid - 1, target);
    } else {
      return firstGreaterThanOrEqual(mid + 1, j, target);
    }
  };
  const start = firstGreaterThanOrEqual(0, nums.length - 1, target);
  return start == -1 || nums[start] != target
    ? [-1, -1]
    : [start, firstGreaterThanOrEqual(0, nums.length - 1, target + 1) - 1];
}
