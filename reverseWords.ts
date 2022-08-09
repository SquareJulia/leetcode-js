function reverseWords(s: string): string {
  let words: string[] = s.trim().split(/\s+/);
  return words.reverse().join(' ');
}

