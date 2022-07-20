// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

// function avgArray(arr) {
//     var total = 0;
//     for (i = 0; i < arr.length; i++) {
//         total = total + arr[i];
//     }
//     return Math.round(total/arr.length);
// }

// function avgArray2 (arr) {
//     return arr.reduce(function (ele, acc)
//     {
//         return ele + acc;
//     }, 0) / arr.length;
// }

// arr1 = [1,2,3,4,5];
// arr2 = [10,20,30,40,50];
// arr3 = [1,3,7];
// arr4 = [10, 5];
// arr5 = [1.5,3,2.5,1];

// console.log(avgArray2(arr1));
// console.log(avgArray2(arr2));
// console.log(avgArray2(arr3));
// console.log(avgArray2(arr4));
// console.log(avgArray2(arr5));

// var sample = function(){
//     var a = b = 3;
// }
// sample();
// console.log("Is a defined?", typeof a !== "undefined");
// console.log("Is b defined?", typeof b !== "undefined");

// Write a function that takes in an input and returns true if it's an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false

// function isInt(x) {
//     if (typeof x === 'number' && x % 1 == 0){        
//         return true;
//     } 
//     return false;
// }

// function isInt(val) {
//     return typeof val === 'number' && val % 1 == 0;
// }

function isInt(val) {
    return parseInt(val) === val;
}

console.log(isInt("7"));
console.log(isInt(7));
console.log(isInt(4.3));
