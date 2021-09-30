const smallest_subarray_with_given_sum = function (s, arr) {
  let windowSum = 0,
    smallestSub = Infinity,
    windowEnd = 0,
    windowStart = 0;

  while (windowEnd <= arr.length) {
    if (windowSum >= s) {
      smallestSub = Math.min(windowEnd - windowStart, smallestSub);
      windowSum -= arr[windowStart];
      windowStart++;
    } else {
      windowSum += arr[windowEnd];
      windowEnd++;
    }
  }

  return smallestSub;
};
