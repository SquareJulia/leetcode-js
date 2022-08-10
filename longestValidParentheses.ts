function longestValidParentheses(s: string): number {
  const len = s.length;
  const rights: number[] = Array(len).fill(len);
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      break;
    }
    if (s[i] == "(" && s[i + 1] == ")") {
      res = 2;
      rights[i] = i + 1;
    }
  }
  for (let l = 2; l < len; l++) {
    for (let i = 0; i + l < len; i++) {
      const j = i + l;
      if (s[i] != "(" || s[j] != ")") {
        continue;
      }
      if (
        rights[i + 1] == j - 1 ||
        (rights[i] < len && rights[rights[i] + 1] == j)
      ) {
        rights[i] = j;
        res = l + 1;
      }
    }
  }
  return res;
}
