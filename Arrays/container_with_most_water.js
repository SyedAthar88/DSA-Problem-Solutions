// // You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// // Find two lines that together with the x-axis form a container, such that the container contains the most water.
// // Return the maximum amount of water a container can store.
// // Notice that you may not slant the container.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:
// Input: height = [1,1]
// // Output: 1

function max_area(height) {
    let n = height.length;
    let lp = 0;
    let rp = n - 1;
    let max_area = 0;
    while (lp < rp) {
        let w = rp - lp;
        let h = Math.min(height[lp], height[rp]);
        area = w * h;
        max_area = Math.max(area, max_area);
        height[lp] < height[rp] ? lp++ : rp--;
    }
    return max_area
}



console.log(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]));











