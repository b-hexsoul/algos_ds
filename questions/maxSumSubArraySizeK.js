const list = [100, 50, 150, 400, 300, -100, 600];

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
  for (let i = 0; i < list.length - k; i++) {
    windowSum += list[i];

    if (i >= k) {
      windowSum -= list[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  }
  return maxSum;
};

console.log(maxSumSubArray2(list, 2));
