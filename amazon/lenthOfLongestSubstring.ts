function lengthOfLongestSubstring(s: string): number {
    const map: { [K: string]: number } = {};
    let l = 0,
      len = 0;
    for (let r = 0; r < s.length; r++) {
      if (map[s[r]]!==undefined) {
        l = Math.max(l, map[s[r]] + 1);
      }
      len = Math.max(len, r - l + 1);
      map[s[r]] = r;
    }
    return len;
  }
  