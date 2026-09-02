// Given an array arr[] and an integer k, where the array represents the boards and each element denotes the length of a board, and k painters are available to paint these boards. Each unit length of a board takes 1 unit of time to paint. Find the minimum time required to paint all the boards such that each painter paints only contiguous sections of the array. A painter can paint boards like [2, 3, 4], [1], or even no board, but cannot paint non-contiguous boards like [2, 4, 5].

// Examples:

// Input: arr[] = [5, 10, 30, 20, 15], k = 3
// Output: 35
// Explanation: The most optimal way will be: Painter 1 allocation : [5,10], Painter 2 allocation : [30], Painter 3 allocation : [20, 15], Job will be done when all painters finish i.e. at time = max(5 + 10, 30, 20 + 15) = 35

// Input: arr[] = [10, 20, 30, 40], k = 2
// Output: 60
// Explanation: The most optimal way to paint: Painter 1 allocation : [10, 20, 30], Painter 2 allocation : [40], Job will be complete at time = 60
function isValidMid(arr, n, m, maxallowdtime) {
    let painter = 1;
    let time = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxallowdtime) {
            return false;
        }

        if (time + arr[i] <= maxallowdtime) {
            time += arr[i];
        } else {
            painter++;
            time = arr[i];
        }
    }

    return painter <= m;
}

function painter_partition(arr, m) {
    let n = arr.length;
    if (m > n) {
        return -1;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let st = 0;
    let end = sum;
    let ans = -1;

    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2);

        // ✅ Fixed parameter order: (arr, n, m, mid)
        if (isValidMid(arr, n, m, mid)) {
            ans = mid;
            end = mid - 1;  // ✅ FIXED: Added '='
        } else {
            st = mid + 1;
        }
    }

    return ans;  // ✅ Added return statement
}

console.log(painter_partition([10, 20, 30, 40], 2));  // 60 ✅