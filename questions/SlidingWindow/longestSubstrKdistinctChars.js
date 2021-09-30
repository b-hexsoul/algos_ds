const longest_substring_with_k_distinct = function (str, k) {
  let substringLength = 0,
    windowStart = 0;
  let charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (charMap[str[windowEnd]]) {
      charMap[str[windowEnd]]++;
    } else {
      charMap[str[windowEnd]] = 1;
    }

    // shrink the sliding window, until we are left with 'k' distinct characters in the charMap
    while (Object.keys(charMap).length > k) {
      if (charMap[str[windowStart]] > 1) {
        charMap[str[windowStart]]--;
      } else {
        delete charMap[str[windowStart]];
      }
      windowStart++;
    }

    substringLength = Math.max(substringLength, windowEnd - windowStart + 1);
  }

  return substringLength;
};
