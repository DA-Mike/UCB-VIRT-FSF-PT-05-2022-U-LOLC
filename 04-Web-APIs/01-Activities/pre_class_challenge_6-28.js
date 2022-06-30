// var max = function(num1, num2){
//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
//     return;
// }

// class solution

var max = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

console.log("6, 4: ", max(6,4));
console.log("6, -4: ", max(6, -4));