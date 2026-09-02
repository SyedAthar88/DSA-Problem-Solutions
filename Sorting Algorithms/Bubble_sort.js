// // Bubble sort is basicallly a sorting technique for sorting our array in ascending order 
// // the time complexity for that is O(n^2)
// Bubble Sort is the simplest sorting algorithm. It works by repeatedly swapping adjacent elements if they are in the wrong order.

// Think of it like: Bubbles in a glass of soda - the bigger bubbles rise to the top!

// How it works:
// Compare adjacent elements

// If they're in the wrong order, swap them

// After each pass, the largest element "bubbles up" to the end

// Repeat until the array is sorted

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;  // Track if any swap happened

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps happened, array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Test
console.log(bubbleSort([5, 3, 8, 4, 2]));  // [2, 3, 4, 5, 8]








