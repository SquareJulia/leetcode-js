function numDecodings(s: string): number {
  let prev = 1,
    cur = s[0] === "0" ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    let nxt = s[i] === "0" ? 0 : cur;
    if (s[i - 1] != "0" && parseInt(s[i - 1] + s[i]) <= 26) {
      nxt += prev;
    }
    prev = cur;
    cur = nxt;
  }
  return cur;
}
