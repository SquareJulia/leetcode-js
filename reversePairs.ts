function reversePairs(nums: number[]): number {
  let ans = 0;
  const mergeSort = (i: number, j: number) => {
    if (i >= j) {
      return;
    }
    const k = Math.floor((i + j) / 2);
    mergeSort(i, k);
    mergeSort(k + 1, j);
    merge(i, k + 1, j);
  };

  const merge = (i: number, j: number, last: number) => {
    let ii = i,
      jj = j;
    const buf: number[] = [];
    while (ii < j || jj <= last) {
      if (ii == j || jj > last) {
        if (ii == j) {
          buf.push(...nums.slice(jj, last + 1));
        } else {
          buf.push(...nums.slice(ii, j));
        }
        break;
      }
      if (nums[ii] <= nums[jj]) {
        buf.push(nums[ii++]);
      } else {
        buf.push(nums[jj++]);
        ans += j - ii;
      }
    }
    nums.splice(i, buf.length, ...buf);
  };
  mergeSort(0, nums.length - 1);
  return ans;
}
