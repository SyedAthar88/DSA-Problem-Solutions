// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
//  brute force approch using O (n^2) time complexity

function productExceptSelf(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
}
// console.log(productExceptSelf([1, 2, 3, 4]));
// optimal approach using O(n) time complexity and o(1) space complexity
function product(nums) {
    let ans = new Array(nums.length).fill(1);
    let n = nums.length;
    // prefix => ans[i] = prod(0,i-1)
    for (let i = 1; i < n; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }
    // suffix 
    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }
    return ans;
}


console.log(product([1, 2, 3, 4]));





