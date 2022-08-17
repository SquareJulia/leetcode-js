function convertToTitle(columnNumber: number): string {
  const codes: number[] = [];
  while (columnNumber) {
    columnNumber--;
    codes.push(columnNumber % 26);
    columnNumber = Math.floor(columnNumber / 26);
  }
  const A = "A".charCodeAt(0);
  return String.fromCharCode(...codes.reverse().map((code) => code + A));
}
