const list = [2, 3, 4, 1, 5];

const maxSumSubArray = (list, k) => {
  let maxSum = -Infinity;

  for (let i = 0; i < list.length - k + 1; i++) {
    let windowSum = 0;
    for (let j = i; j < i + k; j++) {
      windowSum += list[j];
      maxSum = Math.max(maxSum, windowSum);
    }
  }
  return maxSum;
};

const maxSumSubArray2 = (list, k) => {
  let maxSum = -Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < list.length; windowEnd++) {
    windowSum += list[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      console.log(maxSum);
      windowSum -= list[windowStart];
      windowStart++;
    }
  }
  return maxSum;
};

console.log(maxSumSubArray2(list, 2));
