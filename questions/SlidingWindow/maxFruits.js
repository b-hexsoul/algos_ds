// medium
// Given an array of characters where each character represents a fruit tree,
// you are given two baskets, and your goal is to put maximum number of fruits in each basket.
// The only restriction is that each basket can have only one type of fruit.

const trees = ['A', 'B', 'C', 'A', 'C'];
const fruits_into_baskets = function (fruits) {
  let fruitBasket = {},
    windowStart = 0,
    maxFruits = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitBasket)) {
      fruitBasket[rightFruit] = 0;
    }
    fruitBasket[rightFruit]++;

    // decrease window if more than two type of fruit
    while (Object.entries(fruitBasket).length > 2) {
      let leftFruit = fruits[windowStart];
      fruitBasket[leftFruit]--;
      if (fruitBasket[leftFruit] === 0) {
        delete fruitBasket[leftFruit];
      }
      windowStart++;
    }
    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
};
