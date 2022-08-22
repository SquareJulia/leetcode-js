function restoreIpAddresses(s: string): string[] {
  const SEG_COUNT = 4;
  const segments: number[] = Array(SEG_COUNT);
  const res: string[] = [];
  const CHAR_CODE_ZERO = "0".charCodeAt(0);
  const dfs: (start: number, segLeft?: number) => void = (
    start,
    segLeft = SEG_COUNT
  ) => {
    if (segLeft === 0) {
      if (start === s.length) {
        res.push(segments.join("."));
      }
      return;
    }
    if (s[start] == "0") {
      segments[SEG_COUNT - segLeft] = 0;
      dfs(start + 1, segLeft - 1);
    } else {
      let cur = 0;
      for (let digits = 0; digits < 3 && start < s.length; digits++) {
        cur *= 10;
        cur += s[start++].charCodeAt(0) - CHAR_CODE_ZERO;
        if (cur <= 0xff) {
          segments[SEG_COUNT - segLeft] = cur;
          dfs(start, segLeft - 1);
        }
      }
    }
  };
  dfs(0, SEG_COUNT);
  return res;
}
