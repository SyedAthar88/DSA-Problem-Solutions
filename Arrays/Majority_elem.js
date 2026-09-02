// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// find majority element = n/2? ===> 3/2 =1.5 =>2 
// Brute force Apprach O(n2)
// o(1) SC
function Majority_element(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
            if (count > n / 2) {
                return nums[i]
            }
        }
    }


}
// console.log(Majority_element([2, 2, 1, 1, 1, 2, 2]))
// console.log(Majority_element([3,2,3]))

// Tc O(nlogn)
function Majority_Element(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums[mid];
}


// console.log(Majority_Element([2, 2, 1, 1, 1, 2, 2]));


// Optimal approach using Moyer voting algorithm
// same element freq ++
// diff one freq --
// TC ----> O(n)
// sc-----> O(1)
function M_element(nums) {
    let freq = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (freq === 0) {
            ans = nums[i];
        }
        if (ans === nums[i]) {
            freq++
        }
        else{
            freq --;
        }
    }
    return ans

}

console.log(M_element([3,2,3]))
