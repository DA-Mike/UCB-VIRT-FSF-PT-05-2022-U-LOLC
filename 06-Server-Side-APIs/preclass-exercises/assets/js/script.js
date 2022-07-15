// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

function avgArray(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total/arr.length;
}

arr1 = [1,2,3,4,5];
arr2 = [10,20,30,40,50];

console.log(avgArray(arr1));
console.log(avgArray(arr2));