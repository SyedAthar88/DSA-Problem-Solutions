// // Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// // Each student receives atleast one book.
// // Each student is assigned a contiguous sequence of books.
// // No book is assigned to more than one student.
// // All books must be allocated.
// // The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum. If it is not possible to allocate books to all students, return -1;



// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// => [12] and [34, 67, 90] Maximum Pages = 191
// => [12, 34] and [67, 90] Maximum Pages = 157
// // => [12, 34, 67] and [90] Maximum Pages = 113.





// for finding is mid our valid or not 
function isValidElement(arr, n, m, maxAllowedPages) {
    let student = 1;
    let pages = 0;

    for (let i = 0; i < n; i++) {
        // ✅ Check if single book exceeds limit
        if (arr[i] > maxAllowedPages) {
            return false;
        }

        // If we can add this book to current student
        if (pages + arr[i] <= maxAllowedPages) {
            pages += arr[i];
        } else {
            // Give this book to next student
            student++;
            pages = arr[i];
        }
    }

    // ✅ Return true if students used <= available students
    return student <= m;
}

function allocation(arr, m) {
    let n = arr.length;

    // Edge case: More students than books
    if (m > n) {
        return -1;
    }

    // Calculate sum of all pages
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let st = 0;
    let end = sum;
    let ans = -1;  // ✅ Define ans outside the loop

    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2);

        // ✅ Pass correct parameters: (arr, n, m, mid)
        if (isValidElement(arr, n, m, mid)) {
            ans = mid;        // ✅ Store the answer
            end = mid - 1;    // Try to find smaller maximum
        } else {
            st = mid + 1;     // Need more pages per student
        }
    }

    return ans;  // ✅ Return the final answer
}

// Test
console.log(allocation([12, 34, 67, 90], 2));  // 113 ✅
console.log(allocation([10, 20, 30, 40], 2));  // 60 ✅
console.log(allocation([5, 10, 15, 20, 25], 3));  // 30 ✅
console.log(allocation([10, 20], 3));  // -1 ✅