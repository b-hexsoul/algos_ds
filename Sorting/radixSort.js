// A special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements!
// It exploits the fact that information about the size of a number is encoded in the number of digits

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// returns the number of digits in num
const countDigits = (num) => {
  return Math.abs(num).toString().length;
};

const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(arr[i]));
  }

  return maxDigits;
};

const list = [1234, 44444, 12, 1, 22, 555];

console.log(mostDigits(list));
