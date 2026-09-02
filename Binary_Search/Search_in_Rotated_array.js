// 33. Search in Rotated Sorted Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
// the time complexity of this function is O(log n) because we are dividing the array in half in each step ;

function search_in_rotated(arr, target) {
    let st = 0;
    let n = arr.length;
    let end = n - 1;
    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        // left search sorted part if 
        if (arr[st] <= arr[mid]) {
            if (arr[st] <= target && target <= arr[mid]) {
                end = mid - 1;
            }
            else {
                st = mid + 1;
            }
        }
        else {
            if (arr[mid] <= target && target <= arr[end]) {
                st = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }

    }
    return -1;
}












console.log(search_in_rotated([4, 5, 6, 7, 0, 1, 2], 0));

















