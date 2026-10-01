//find the nth term of fibonnaci series as we know our first two elements of fibonacci are 0,1 than
function fibonacci(n){
    if(n===0 || n===1) return n;    
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6)) //> 5
// 0,1,1,2,3,5,8,13,21.....