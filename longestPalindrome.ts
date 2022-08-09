function longestPalindrome(s: string): string {
  const len = s.length;
  const memo: boolean[][] = Array.from(
    { length: len },
    () => Array.from({ length: len }),
    () => false
  );
  for (let i = 0; i < len; i++) {
    memo[i][i] = true;
  }
  let left = 0,
    right = 1;
  for (let i = 0; i < len - 1; i++) {
    if (s[i] == s[i + 1]) {
      left = i;
      right = i + 2;
      memo[i][i + 1] = true;
    }
  }
  for (let d = 2; d < len; d++) {
    for (let i = 0; i + d < len; i++) {
      if (s[i] == s[i + d] && memo[i + 1][i + d - 1]) {
        left = i;
        right = i + d + 1;
        memo[i][i + d] = true;
      }
    }
  }
  return s.substring(left, right);
}
