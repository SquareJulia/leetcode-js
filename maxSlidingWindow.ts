// 单调不增
function maxSlidingWindow(nums: number[], k: number): number[] {
  const stack: number[] = [],
    ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop();
    }
    stack.push(i);
    if (stack[0] + k < i + 1) {
      stack.shift();
    }
    if (i + 1 >= k) {
      ans.push(nums[stack[0]]);
    }
  }
  return ans;
}
