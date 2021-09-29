// leetcode medium
// Given an array of intervals where intervals[i] = [starti, endi]
// merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

const merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  const sortedIntervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let result = [];

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let previous = result.pop();
    let current = intervals[i];
    // merge
    if (previous[1] >= current[0]) {
      result.push([previous[0], Math.max(previous[1], current[1])]);
    } else {
      result.push(previous);
      result.push(current);
    }
  }

  return result;
};
