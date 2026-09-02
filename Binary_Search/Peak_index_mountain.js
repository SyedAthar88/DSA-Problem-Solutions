// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.



// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

function peak_index(arr) {
    let st = 1;
    let n = arr.length;
    let end = n - 2;
    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2);

        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            st = mid + 1;
        }
        else {
            end = mid - 1;
        }

    }
    return -1;
}
console.log(peak_index([0, 1, 0]));



















