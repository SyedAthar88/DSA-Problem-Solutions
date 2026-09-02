// You are given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Explanation:
// The array has two 0s, two 1s, and two 2s. Sorting them in-place places all 0s first, then all 1s, then all 2s.
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
// Explanation:
// The array has one each of 0, 1, and 2, arranged in-place in the order 0, 1, 2


function sort_colors(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++;
        } else if (nums[i] === 1) {
            count1++;
        } else {
            count2++;
        }
    }

    let idx = 0;
    for (let i = 0; i < count0; i++) {
        nums[idx] = 0;
        idx++;
    }
    for (let i = 0; i < count1; i++) {
        nums[idx] = 1;
        idx++;
    }
    for (let i = 0; i < count2; i++) {
        nums[idx] = 2;
        idx++;
    }
}

let nums = [2, 0, 2, 1, 1, 0];
sort_colors(nums);
console.log(nums);
// most optimized approach using dutch national flag algorithm 
function sortcolors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    while (mid <= high) {
        if (nums[mid] === 0) {
            // swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else {
            // swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}

console.log(sortcolors([2, 1, 2, 1, 0, 1, 2, 0, 1]));






