function minPathSum(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let min = 0;
      if (i > 0 && j > 0) {
        min = Math.min(grid[i][j - 1], grid[i - 1][j]);
      } else if (i > 0 || j > 0) {
        min = i > 0 ? grid[i - 1][j] : grid[i][j - 1];
      }
      grid[i][j] += min;
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}
