// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1
// Brute_force Approach
// but will do this souliton  in O(n2) using nested loops
function single_array(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count === 1) {  // ✅ Check AFTER counting all elements
            return nums[i];
        }
    }
    return -1; // Element not found (shouldn't happen for valid input)
}
console.log(single_array([2, 2, 1]));
// ==============================================Optimal Approach===============================================
function optimal_one(nums) {
    let ans = 0;
    for (let num of nums) {
        ans ^= num
    }
    return ans
}


console.log(optimal_one([2, 2, 1]));