
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const indegrees: number[] = Array(numCourses).fill(0);
  const res: number[] = [];
  const outDegrees: number[][] = [];
  for (let i = 0; i < numCourses; i++) {
    outDegrees[i] = [];
  }
  for (let [to, from] of prerequisites) {
    outDegrees[from].push(to);
    indegrees[to]++;
  }
  const queue: number[] = [];
  while (res.length < numCourses) {
    for (let i = 0; i < numCourses; i++) {
      if (res.indexOf(i) == -1 && indegrees[i] == 0) {
        queue.push(i);
      }
    }
    if (queue.length === 0) {
      break;
    }
    while (queue.length > 0) {
      const i = queue.shift() as number;
      res.push(i);
      for (const to of outDegrees[i]) {
        indegrees[to]--;
      }
    }
  }
  return res.length == numCourses ? res : [];
}

