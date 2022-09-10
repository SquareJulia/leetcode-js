function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const nodes: number[][] = Array();
  let node = 0;
  const map: { [K: string]: number } = {};
  const addWord = (word: string) => {
    const node_ = node++;
    nodes.push([]);
    map[word]=node_;
    for(let i=0;i<word.length;i++){
        const tmp=word[i];
        word.splice(i,1,'*');

    }
  };
}
