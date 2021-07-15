// Insertion Sort
// *** There are cases where this sorting method is useful!
// Builds up the sort by gradually creating a larger left half which is always sorted!

// Big O(n^2) - Average/Worst, Big O(n) is best case on nearly sorted data
// Space Complexity is O(1);
// Worst scenario is if the datA is in reverse!
// Works well in a scenario where data is live or streaming... current array will be sorted and it will insert accordingly.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const insertionSort = (arr) => {
  // Advancing the beginning of the unsorted array
  for (let i = 1; i < arr.length; i++) {
    //
    // starts at the end of the sorted (left) "array" and decreases until left number is no longer greater than
    // continue to swap while number to the left is greater than
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

const list = [4, 65, 33, 22, 15, 51, 333, 412];

console.log(insertionSort(list));
