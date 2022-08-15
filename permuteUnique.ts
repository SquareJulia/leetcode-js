function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const removeAndInsert: (removeIdx: number, insertIdx: number) => void = (
    removeIdx,
    insertIdx
  ) => {
    nums.splice(insertIdx, 0, ...nums.splice(removeIdx, 1));
  };
  const permute: (nums: number[], start: number) => number[][] = (
    nums,
    start
  ) => {
    if (start === nums.length) {
      return [[...nums]];
    }
    const ans: number[][] = [];
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      removeAndInsert(i, start);
      ans.push(...permute(nums, start + 1));
      removeAndInsert(start, i);
    }
    return ans;
  };
  return permute(nums, 0);
}