function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let l = 0,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) >= l) {
      res = Math.max(res, i - l);
      l = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
  }
  res = Math.max(res, s.length - l);
  return res;
}
