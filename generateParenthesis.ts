function generateParenthesis(n: number): string[] {
  let ans: string[] = [];
  gen("", n, n, ans);
  return ans;
}

function gen(cur: string, left: number, right: number, res: string[]): void {
  if (!left && !right) {
    res.push(cur);
    return;
  }
  if (left) {
    gen(cur + "(", left - 1, right, res);
  }
  if (right > left) {
    gen(cur + ")", left, right - 1, res);
  }
}
