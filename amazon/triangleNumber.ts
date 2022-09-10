function triangleNumber(nums: number[]): number {
  let ans = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let k = i + 1;
    for (let j = i + 1; j < nums.length - 1 && k < nums.length; j++) {
      const sum = nums[i] + nums[j];
      while (k < j || (k + 1 < nums.length && nums[k + 1] < sum)) {
        k++;
      }
      ans += k - j;
    }
  }
  return ans;
}
