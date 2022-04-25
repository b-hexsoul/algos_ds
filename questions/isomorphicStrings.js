// Given two strings, determine if they are isomorphic.
// Two strings are "isomorphic" if each unique character from the first string can be replaced to match the second string,
// without changing the ordering of the characters.

// 1 <= str1.length, str2.length <= 5

// Example
// egg
// tll
// true

// Example
// wow
// all
// false

function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = new Map();
  const used = new Set();

  for (let i = 0; i < str1.length; i++) {
    if (!map.has(str1[i]) && used.has(str2[i])) return false;
    if (map.has(str1[i]) && map.get(str1[i]) !== str2[i]) return false;
    if (!map.has(str1[i]) && !used.has(str2[i])) {
      map.set(str1[i], str2[i]);
      used.add(str2[i]);
    }
  }

  return true;
}

// Key here is to use a Map of { str1: str2 } and use a Set which will track unique values of str2 that have been used!
// if you don't have the str1 value in the map then check if it has been used. If you have the str1 value in the map, check if the corresponding value
// is the same as the current str2 value
// if there is not the value in the map and you haven't used it yet then add to both data structures.
