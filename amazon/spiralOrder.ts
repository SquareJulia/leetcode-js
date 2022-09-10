function spiralOrder(matrix: number[][]): number[] {
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  let row = 0,
    col = 0;
  const ans = [];
  while (true) {
    while (col <= right) {
      ans.push(matrix[top][col++]);
    }
    if ((row = ++top) > bottom) break;
    while (row <= bottom) {
      ans.push(matrix[row++][right]);
    }
    if ((col = --right) < left) break;
    while (col >= left) {
      ans.push(matrix[bottom][col--]);
    }
    if ((row = --bottom) < top) break;
    while (row >= top) {
      ans.push(matrix[row--][left]);
    }
    if ((col = ++left) > right) break;
  }
  return ans;
}
