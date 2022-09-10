function subsets(nums: number[]): number[][] {
  const ret: number[][] = [];
  const ans: number[] = [];
  const gen = (i: number) => {
    if (i === nums.length) {
      ret.push([...ans]);
      return;
    }
    gen(i + 1);
    ans.push(nums[i]);
    gen(i + 1);
    ans.splice(ans.length - 1, 1);
  };
  gen(0);
  return ret;
}
