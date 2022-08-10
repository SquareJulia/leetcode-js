// sum2-sum1=k => sum2-k=sum1
function subarraySum(nums: number[], k: number): number {
  const map = new Map();
  map.set(0, 1);
  let sum = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res += map.has(sum - k) ? map.get(sum - k) : 0;
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }
  return res;
}
