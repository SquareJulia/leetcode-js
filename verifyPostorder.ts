function verifyPostorder(postorder: number[]): boolean {
  const verify: (i: number, j: number, low: number, high: number) => boolean = (
    i,
    j,
    low,
    high
  ) => {
    if (i > j) {
      return true;
    }
    if (postorder[j] <= low || postorder[j] >= high) {
      return false;
    }
    let pivot = i;
    while (pivot < j && postorder[pivot] < postorder[j]) {
      pivot++;
    }
    return (
      verify(i, pivot - 1, low, postorder[pivot]) &&
      verify(pivot, j - 1, postorder[j], high)
    );
  };
  return verify(0, postorder.length - 1, -Infinity, Infinity);
}
