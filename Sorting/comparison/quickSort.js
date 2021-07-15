// Just like merge sort, it exploits the fact that arrays of 0 or 1 elements are always sorted
// QuickSort works by selecting one element (called the "pivot") and finding the index
// where the pivot should end up in the sorted array. All numbers less than to the left and all numbers greater than to the right
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// responsible for arranging elements in an array on either side of a pivot.
// Given an array, this helper function should designate an element as the pivot.
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot,
// and all values greater than the pivot are moved to the right of the pivot.
// *Do not make a new array
// *Return the index of the pivot
// *** How you pick the pivot has consequences!

// at start, store current pivot index
const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }

  // swap the pivot
  [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];

  return pivotIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

const list3 = [1, 2, 4, 32, 44, 959, 111, 42, 532, 41];

console.log(quickSort(list3));

// Big O Complexity
// Best - O(n log n)
// Average - O(n log n)
// Worst - O(n^2) - if pivot chosen is the minimum element or the maximum element

// Space complexity O(log n)

// *** Another implementation with larger space complexity
const quickSort2 = (arr) => {
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort2(list3));
