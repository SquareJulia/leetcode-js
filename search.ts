function search(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (
      (nums[low] <= nums[mid] && nums[low] <= target && nums[mid] >= target) ||
      (nums[mid + 1] <= nums[high] &&
        (nums[mid + 1] > target || nums[high] < target))
    ) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return nums[low] == target ? low : -1;
}
