/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  let tmp: number;
  for (let a = 0; a < Math.floor(n / 2); a++) {
    // 旋转左上角是(a,a)的正方形框
    for (let i = 0; i < n - 2 * a - 1; i++) {
      tmp = matrix[a][a + i];
      matrix[a][a + i] = matrix[n - a - i - 1][a];
      matrix[n - a - i - 1][a] = matrix[n - a - 1][n - a - i - 1];
      matrix[n - a - 1][n - a - i - 1] = matrix[a + i][n - a - 1];
      matrix[a + i][n - a - 1] = tmp;
    }
  }
}
