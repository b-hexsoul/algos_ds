// What is recursion?
// A function that calls itself

// Why use it?
// It is everywhere! JSON.parse & JSON.stringify & DOM Traversal & More complex data structures
// Sometimes cleaner alternative to iteration

// Call Stack...

// Invoke the same funciton with a different input until you reach your base case!
// *Base Case* - You need a base case!

function countDown(num) {
  if (num <= 0) {
    console.log(num);
    return;
  }
  console.log(num);
  countDown(num - 1);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Factorial! 4! = 4 * 3 * 2 * 1
function factIter(num) {
  let value = 1;
  for (let i = num; i > 0; i--) {
    value *= i;
  }
  return value;
}

function factRecur(num) {
  if (num === 1) return 1;
  return num * factRecur(num - 1);
}

console.log(factRecur(4));
