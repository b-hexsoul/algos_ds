const sumZeroImproved = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

const sumZeroMap = (arr) => {
  let map = {};
  for (let val of arr) {
    map[val] = true;
  }
  for (let val2 of arr) {
    let possible = 0 - val2;
    if (map[possible]) {
      return [val2, possible];
    }
  }
};
