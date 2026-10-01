//binary search using recursion techniques

function binarySearch(arr, target, st, end) {

  // base case 1 — target not found, pointers crossed
  if (st > end) return -1;

  let mid = st + Math.floor((end - st) / 2);

  // base case 2 — found it
  if (arr[mid] === target) return mid;   // ✅ arr[mid], not mid

  // recursive case — go right
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  }

  // recursive case — go left
  return binarySearch(arr, target, st, mid - 1);
}

// ✅ start=0, end=arr.length-1
console.log(binarySearch([1, 2, 3, 4, 5], 5, 0, 4)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 1, 0, 4)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 9, 0, 4)); // -1 (not found)