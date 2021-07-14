// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  let newStr = '';
  if (str === '') return '';

  newStr += str.slice(-1) + reverse(str.slice(0, -1));
  return newStr;
}
