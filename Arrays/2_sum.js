// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
//  brute force approach O(n2)

function find_sum(nums, target) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let first_element = nums[i];

        for (let j = i + 1; j < n; j++) {
            let second_element = nums[j];
            let sum = first_element + second_element;

            if (sum === target) {
                return [i, j]; // Return indices
            }
        }
    }

    return []; // Return empty array if no solution found
}

console.log(find_sum([2, 7, 11, 15], 9)); // [0, 1] ✅

// using hashmap for optimal approach 
//Time complexity O(n) space complexity O(n)
function two_sum(nums, target) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return []

}


console.log(two_sum([2, 7, 11, 15], 9))








