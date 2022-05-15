// Selection Sort!
// Places small values into sorted position one at a time. Moving from beginning to the end.
// Swap position of minimum with beginning of array.
// Make sure to increase the start of the array by 1.
// Time Complexity - Best/Worst/Average of O(n^2)
// Space Complexity - O(1)

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
};

let list = [4, 2, 5, 3, 11, 55, 33, 22];

console.log(selectionSort(list));
