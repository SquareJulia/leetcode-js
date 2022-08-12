function addStrings(num1: string, num2: string): string {
  let p1 = num1.length - 1,
    p2 = num2.length - 1,
    carry = 0;
  const ans = [];
  const zero = "0".charCodeAt(0);
  while (p1 >= 0 || p2 >= 0 || carry) {
    if (p1 >= 0) {
      carry += num1.charCodeAt(p1--) - zero;
    }
    if (p2 >= 0) {
      carry += num2.charCodeAt(p2--) - zero;
    }
    ans.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return ans.reverse().join("");
}
