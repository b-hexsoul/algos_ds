const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    console.log("-----------------");
    console.log(`Iteration ${i}`);
    console.log("currSum", currSum);
    console.log("maxSum", maxSum);
    maxSum = Math.max(maxSum, currSum);
  }
};

maxSubArray(list);
