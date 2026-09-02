// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.



function maxSubArray(nums) {
    let curr_sum = 0;
    let max_sum = -Infinity;
    for (let num of nums) {
        curr_sum += num;
        max_sum = Math.max(curr_sum, max_sum);
        if (curr_sum < 0) {
            curr_sum = 0;   // Agar negative ho gaya to reset!
            // Kyun? Negative sum future ko aur negative karega
        }
    }
    return max_sum
}


console.log(maxSubArray([5, 4, -1, 7, 8]));





