function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  let l = intervals[0][0],
    r = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (r < intervals[i][0]) {
      ans.push([l, r]);
      l = intervals[i][0];
      r = intervals[i][1];
    } else {
      r = Math.max(r, intervals[i][1]);
    }
  }
  ans.push([l, r]);
  return ans;
}
