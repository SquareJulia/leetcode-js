function minWindow(s: string, t: string): string {
  const dictT: Map<string, number> = new Map();
  const dictS: Map<string, number> = new Map();
  for (const c of t) {
    dictT.set(c, dictT.has(c) ? (dictT.get(c) as number) + 1 : 1);
  }
  let i = 0;
  let ans = s + " ";
  let toMatch = dictT.size;
  for (let j = 0; j < s.length; j++) {
    if (dictT.has(s[j])) {
      dictS.set(s[j], dictS.has(s[j]) ? (dictS.get(s[j]) as number) + 1 : 1);
      if (dictS.get(s[j]) == dictT.get(s[j])) {
        toMatch--;
      }
      if (toMatch == 0) {
        while (
          i < j &&
          (!dictT.has(s[i]) ||
            (dictS.get(s[i]) as number) > (dictT.get(s[i]) as number))
        ) {
          dictS.set(s[i], (dictS.get(s[i]) as number) - 1);
          i++;
        }
        if (j - i + 1 < ans.length) {
          ans = s.substring(i, j + 1);
        }
      }
    }
  }
  return ans.length > s.length ? "" : ans;
}
