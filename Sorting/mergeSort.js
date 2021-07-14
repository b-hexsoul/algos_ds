// O(n log n)

// Trade off between efficiency and simplicity.
// Jonathan Van Nueman~

// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then builds up a newly sorted array
// splitting then merging

function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

const list1 = [1, 4, 5, 7];
const list2 = [2, 3, 6, 8, 10, 11];

console.log(merge(list1, list2));
