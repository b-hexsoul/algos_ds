// A good hash function;
// 1. Easy to caluclate the hash value ( low time complexity );
// 2. Chance of collision is low
// 3. All possible values are utilized approx. equally. Try to distribute uniformly

// Simple Hash Function for strings ( NOT perfect );
function stringHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// Problems with above. ONLY strings. Is NOT o(n). Could be more random..
// Hash functions almost always take advantage of PRIME NUMBERS.

// Dealing with Collisions...
// 1. Separate Chaining
// 2. Linear Probing

// Separate Chaining
// At each index in our array we store values using a more sophisticated DS like a linked list

// Linear Probing
// When we find a collision, we search through for the next empty slot

// Hash Table insertion, deletion, access on average is O(1) constant time.
