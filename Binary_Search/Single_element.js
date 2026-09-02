// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.



// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

function single_element(arr) {
    let st = 0;
    let n = arr.length;
    let end = n - 1;
    if (n === 1) {
        return arr[0]
    }
    if (arr[0] != arr[1]) {
        return arr[0]
    } if (arr[n - 1] != arr[n - 2]) {
        return arr[n - 1]
    }
    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2);
        if (mid % 2 === 0) {
            if (arr[mid - 1] === arr[mid]) {
                end = mid - 1;
            }
            else {
                st = mid + 1
            }
        } else {
            if (arr[mid - 1] === arr[mid]) {
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1
}





console.log(single_element([1, 1, 2, 3, 3, 4, 4, 8, 8]));
// console.log(single_element([3, 3, 7, 7, 10, 11, 11]));







