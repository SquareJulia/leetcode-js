function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => b - a);
  const res: number[][] = [];
  const tmp: number[] = [];
  const dfs: (fromIndex: number, sumLeft: number) => void = (
    fromIndex,
    sumLeft
  ) => {
    if (sumLeft == 0) {
      res.push([...tmp]);
      return;
    }
    while (fromIndex < candidates.length) {
      if (candidates[fromIndex] <= sumLeft) {
        tmp.push(candidates[fromIndex]);
        dfs(fromIndex, sumLeft - candidates[fromIndex]);
        tmp.pop();
      }
      fromIndex++;
    }
  };
  dfs(0, target);
  return res;
}
