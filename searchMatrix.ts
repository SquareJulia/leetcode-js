function searchMatrix(matrix: number[][], target: number): boolean {
  const go: (i: number, j: number) => boolean = (i, j) => {
    if (j < 0 || i >= matrix.length) {
      return false;
    }
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
    return go(i, j);
  };
  return go(0, matrix[0].length -  1 )
}
