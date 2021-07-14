// Write a funciton called power which accepts a base and an exponent. The functions should return the power of the base to the exponent.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
