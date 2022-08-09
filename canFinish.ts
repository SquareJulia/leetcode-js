function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const out: Map<number, Set<number>> = new Map<number, Set<number>>();
  const inDegrees: number[] = Array(numCourses).fill(0);
  let inDegreeTotal = 0;
  for (const [to, from] of prerequisites) {
    inDegrees[to]++;
    inDegreeTotal++;
    if (!out.has(from)) {
      out.set(from, new Set());
    }
    out.get(from).add(to);
  }
  let flag = true;
  while (inDegreeTotal && flag) {
    flag = false;
    for (const [key, value] of out.entries()) {
      if (inDegrees[key] === 0) {
        flag = true;
        inDegreeTotal -= value.size;
        for (const keyTo of value.values()) {
          inDegrees[keyTo]--;
        }
        out.delete(key);
      }
    }
  }
  return !inDegreeTotal;
}
