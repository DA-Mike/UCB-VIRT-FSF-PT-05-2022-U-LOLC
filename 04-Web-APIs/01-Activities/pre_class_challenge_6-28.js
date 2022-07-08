// var max = function(num1, num2){
//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
//     return;
// }

// class solution

// var max = function(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;
// }

// console.log("6, 4: ", max(6,4));
// console.log("6, -4: ", max(6, -4));

// var oneToNumber = function(num) {
//     var i = 0;
//     var sum = 0;
//     while (i < num) {
//         sum += num - i;
//         i++;
//     }
//     return sum;
// }

// var onToNumber2 = function(num) {
//     var sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
// }

var arr = [1, 2, 3];
var maxArr = Math.max.apply(null, arr);

console.log(Math.max.apply(null, arr));