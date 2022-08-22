function nextPermutation(nums: number[]): void {
  const swap = (i: number, j: number) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };
  let i = nums.length - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }
  if (!i) {
    nums.reverse();
    return;
  }
  let j = nums.length - 1;
  while (nums[j] <= nums[i - 1]) {
    j--;
  }
  swap(j, i - 1);
  nums = [...nums.slice(0, i), ...nums.slice(i).reverse()];
}
