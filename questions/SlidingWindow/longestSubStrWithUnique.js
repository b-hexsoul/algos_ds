// hard

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings with distinct characters are "abc" & "cde".

const non_repeat_substring = function (str) {
  let maxSubstring = 0,
    windowStart = 0,
    charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charMap[rightChar] + 1);
    }
    charMap[rightChar] = windowEnd;
    maxSubstring = Math.max(maxSubstring, windowEnd - windowStart + 1);
  }

  // TODO: Write your code here
  return maxSubstring;
};

non_repeat_substring('aabccbb');
