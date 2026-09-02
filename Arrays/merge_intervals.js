// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.
function merge_intervals(intervals) {
    if (intervals.length <= 1) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0]);


    let result = [];
    let newInterval = intervals[0];
    result.push(newInterval);
    for (let interval of intervals) {
        if (interval[0] <= newInterval[1]) {
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        } else {
            newInterval = interval;
            result.push(newInterval)
        }
    }
    return result;
}


console.log(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]));












