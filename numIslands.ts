function numIslands(grid: string[][]): number {
  const markIsland = (i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }
    if (grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    markIsland(i - 1, j);
    markIsland(i + 1, j);
    markIsland(i, j - 1);
    markIsland(i, j + 1);
  };
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        res++;
        markIsland(i, j);
      }
    }
  }
  return res;
}
