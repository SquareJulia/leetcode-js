function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [];
  let i = intervals[0][0],
    j = intervals[0][1];
  for (const [start, end] of intervals) {
    if (start <= j) {
      j = Math.max(j, end);
    } else {
      ans.push([i, j]);
      i = start;
      j = end;
    }
  }
  ans.push([i,j]);
  return ans;
}
