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
  return countDigits(Math.max(...arr));
};

const radixSort = (arr) => {
  const largest = mostDigits(arr);
  for (let i = 0; i < largest; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
};

const list = [1234, 44444, 12, 1, 22, 555];

console.log(radixSort(list));
