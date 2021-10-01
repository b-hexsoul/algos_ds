// Given an array of sorted numbers and a target sum,
// find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair)
// such that they add up to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2 + 4 = 6

const pair_with_targetsum = function (arr, target_sum) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    // return indexes of sum pair
    if (sum === target_sum) return [left, right];
    if (sum < target_sum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
};
