function threeSum(nums: number[]): number[][] {
  nums.sort((a,b)=>a-b);
  const len = nums.length;
  const ans: number[][] = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0 || (i > 0 && nums[i] === nums[i - 1])) {
      continue;
    }
    const target = -nums[i];
    for (let l = i + 1, r = len - 1; l < r; l++) {
      if (l > i + 1 && nums[l] === nums[l - 1]) { 
        continue;
      }
      while (l < r - 1 && nums[r - 1] + nums[l] >= target) {
        r--;
      }
      if (nums[r] + nums[l] === target) {
        ans.push([nums[i], nums[l], nums[r]]);
      }
    }
  }
  return ans;
}