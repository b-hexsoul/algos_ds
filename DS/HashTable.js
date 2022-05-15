// A good hash function;
// 1. Easy to caluclate the hash value ( low time complexity );
// 2. Chance of collision is low
// 3. All possible values are utilized approx. equally. Try to distribute uniformly

// Simple Hash Function for strings
function stringHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
