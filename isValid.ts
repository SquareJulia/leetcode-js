function isValid(s: string): boolean {
  type rightPar = "}" | "]" | ")";
  const dict: { [key in rightPar]: string } = { "}": "{", "]": "[", ")": "(" };
  const stack: string[] = [];
  for (const c of s) {
    if (!(c in dict)) {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack.pop() != dict[c as rightPar]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
