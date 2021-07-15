// Largest value will "Bubble" to the top. One at a time.
// Each loop, the end of the array becomes the largest value of that pass. So we don't have to loop through the entire array each parent loop.
// You can optimize and check if during a loop there was a swap or not.
// Best Case O(n) if nearly sorted.
// Worst/Average Case O(n^2)
// Space of O(1)

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

const list = [1, 4, 2, 5, 6, 77, 8, 2, 33];
console.log(bubbleSort(list));
