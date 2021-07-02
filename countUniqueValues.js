const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let counter = 0;
  let map = {};
  for (let val of arr) {
    if (map[val]) {
      continue;
    } else {
      map[val] = true;
      counter++;
    }
  }
  return counter;
};

const countUniqueValues2 = (arr) => {
  let p1 = 0;
  let p2 = 1;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[p1] !== arr[p2]) {
      counter++;
      p1 = p2;
      p2++;
    } else if (arr[p1] === arr[p2]) {
      p2++;
    }
  }
  return counter;
};
