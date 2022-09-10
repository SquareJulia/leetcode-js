function permute(nums: number[]): number[][] {
  const ret: number[][] = [],
    ans: number[] = Array(nums.length);
  const swap = (i: number, j: number) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };
  const dfs = (i: number) => {
    if (i === nums.length) {
      ret.push([...ans]);
      return;
    }
    for (let ii = i; ii < nums.length; ii++) {
      swap(ii, i);
      ans[i] = nums[i];
      dfs(i + 1);
      swap(ii, i);
    }
  };
  dfs(0);
  return ret;
}
