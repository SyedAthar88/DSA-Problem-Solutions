//check if an array is sorted or not 
function isSorted(arr,n){
    if(n===0 || n===1) return true;
return arr[n-1]>=arr[n-2] && isSorted(arr,n-1)
}
console.log(isSorted([1,2,3,4,5,6],6));
