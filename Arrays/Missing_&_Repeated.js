// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.



// Example 1:

// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].
// Example 2:

// Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

function missing_and_repeated(grid) {
    const n = grid.length;
    const ans = [0, 0];
    const count = new Array(n * n + 1).fill(0);
    
    // Find repeated number
    for (const row of grid) {
        for (const val of row) {
            count[val]++;
            if (count[val] === 2) {
                ans[0] = val;  // Found the repeated number
            }
        }
    }
    
    // Find missing number
    for (let i = 1; i <= n * n; i++) {
        if (count[i] === 0) {
            ans[1] = i;  // Found the missing number
            break;
        }
    }
    
    return ans;  // ✅ ADD THIS!
}

console.log(missing_and_repeated([[9, 1, 7], [8, 9, 2], [3, 4, 6]]));
// Output: [9, 5] ✅