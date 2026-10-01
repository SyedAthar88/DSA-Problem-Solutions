// created a function of factorial using recursion

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// console.log(factorial(4));
// print numbers using recursion
function printNums(n) {
    if (n == 1) {
        console.log(n);
        return;
    }
    console.log(n);
    printNums(n - 1)
}
// printNums(10)
// sum of n numbers 
function addNum(n) {
    if (n === 1) {
        return 1;
    }
    return n + addNum(n-1)
}
console.log(addNum(4));

