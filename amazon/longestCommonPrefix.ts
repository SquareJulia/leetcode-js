function longestCommonPrefix(strs: string[]): string {
  let stop,
    shouldStop = false;
  for (stop = 0; ; stop++) {
    if (stop === strs[0].length) {
      break;
    }
    const target = strs[0][stop];
    for (let i = 1; i < strs.length; i++) {
      if (stop === strs[i].length || strs[i][stop] !== target) {
        shouldStop = true;
        break;
      }
    }
    if (shouldStop) {
      break;
    }
  }
  return strs[0].slice(0, stop);
}
