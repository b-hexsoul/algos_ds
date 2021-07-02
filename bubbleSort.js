// big O of n^2

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let left = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = left;
      }
    }
  }
  return arr;
};

const list = [1, 4, 2, 5, 6, 77, 8, 2, 33];
console.log(bubbleSort(list));
