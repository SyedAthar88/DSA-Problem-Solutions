// lets create an array and perfrom a binary search on it 
// but keep it in mind that binary search can only work on sorted arrays 


let arr = [-1, 0, 3, 4, 5, 8, 12];
let target = 12;

function Binary_search(arr, target) {
    let st = 0;
    let end = arr.length - 1;

    while (st <= end) {
        // ✅ Correct: (st + end) / 2
        let mid = Math.floor((st + end) / 2);

        // ✅ Compare VALUE at mid with target
        if (arr[mid] === target) {
            return mid;  // Found!
        } else if (arr[mid] < target) {
            st = mid + 1;  // ✅ Search right half
        } else {
            end = mid - 1;  // ✅ Search left half
        }
    }

    return -1;  // Not found
}

console.log(Binary_search(arr, target)); // 6 ✅