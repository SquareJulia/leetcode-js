function isMatch(s: string, p: string): boolean {
    const match: (i: number, j: number) => boolean = (i, j) => {
      if (i >= 0 && j < 0) {
        return false;
      }
      if (i < 0) {
        while (j >= 0 && j % 2 === 1) {
          if (p[j] != "*") {
            return false;
          }
          j-=2;
        }
        return j < 0;
      }
      if (s[i] == p[j] || p[j] == ".") {
        return match(i - 1, j - 1);
      }
      if (p[j] != "*") {
        return false;
      }
      let res: boolean = match(i, j - 2); // match 'x*'
      if (p[j - 1] == "." || s[i] == p[j - 1]) {
        res ||= match(i - 1, j);
        res ||= match(i - 1, j - 2);
      }
      return res;
    };
    return match(s.length - 1, p.length - 1);
  }
  