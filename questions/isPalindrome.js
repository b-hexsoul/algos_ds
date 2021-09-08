var isPalindrome = function (x) {
  if (x < 0) return false;
  let numStr = x.toString();
  if (numStr[0] === "-") return false;

  let single = 0;
  let multi = 0;

  let map = {};
  for (let i = 0; i < numStr.length; i++) {
    if (!map[numStr[i]]) {
      map[numStr[i]] = 1;
    } else {
      map[numStr[i]]++;
    }
  }

  for (const [key, value] of Object.entries(map)) {
    console.log(key);
    console.log(value);
    if (value === 1) {
      single++;
      if (single > 1) return false;
    }

    if (value > 1 && value % 2 !== 0) {
      multi++;
      if (multi > 1) return false;
    }
  }
  return true;
};

isPalindrome(10);
