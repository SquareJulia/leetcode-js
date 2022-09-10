function restoreIpAddresses(s: string): string[] {
  const SEGMENTS = 4;
  const ans: string[] = [],
    arr: number[] = Array(SEGMENTS);
  const gen: (seg: number, cur: number) => void = (seg, cur) => {
    if (seg === SEGMENTS) {
      if (cur === s.length) {
        ans.push(arr.join("."));
      }
      return;
    }
    if (cur >= s.length) {
      return;
    }
    if (s[cur] === "0") {
      arr[seg] = 0;
      gen(seg + 1, cur + 1);
    } else {
      for (let nxt = cur + 1; nxt <= cur + 3; nxt++) {
        const num = Number(s.slice(cur, nxt));
        if (num <= 0xff) {
          arr[seg] = num;
          gen(seg + 1, nxt);
        }
      }
    }
  };
  gen(0, 0);
  return ans;
}
