function groupAnagrams(strs) {
  const map = new Map();
  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (map.has(sortedWord)) {
      const existing = map.get(sortedWord);
      map.set(sortedWord, [...existing, word]);
    } else {
      map.set(sortedWord, [word]);
    }
  }
  return Array.from(map.values());
}
