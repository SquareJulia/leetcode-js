function calculate(s: string): number {
  const signStack: number[] = [];
  let ans = 0,
    cur = 0,
    sign = 1;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "+":
      case "-":
        ans += cur * sign;
        sign *= s[i] == "+" ? 1 : -1;
        cur = 0;
        break;
      case "(":
        signStack.push(i == 0 || s[i - 1] == "+" ? 1 : -1);
        break;
      case ")":
        ans += cur * sign;
        cur = 0;
        sign *= signStack.pop() as number;
        break;
      default:
        cur *= 10;
        cur += Number(s[i]);
    }
  }
  return ans;
}
