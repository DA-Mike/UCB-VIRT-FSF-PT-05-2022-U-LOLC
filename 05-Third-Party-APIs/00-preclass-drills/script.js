// Add preclass drills here

// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

//more elegant but not necessarily more efficient
// function palindrome(str) {
//     // return str.split("").reverse().join("") === str;
//     var palVar = str.split("").reverse().join("");
//     if (str === palVar) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }

// palindrome("racecar");
// palindrome("horse");
// palindrome("noon");

// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

// Ex:
// Input: "the quick brown fox jumps over the calm kitten quietly"
// Output: "b"

// Input: "this hat is the greatest!"
// Output: "g"

// Input: "what a wonderful day it has been!"
// Output: "o"

// Less efficient than object solution
function isSolo(str) {
    for (i = 0; i < str.length; i++) {
        var letterVar = str[i];
        var letterCount = 0;
        for (n = 0; n < str.length; n++) {
            if (letterVar === str[n]) {
                letterCount++;
            }
        }
        if (letterCount === 1){
            return console.log(str[i]);
        }
    }
}

var fox = "the quick brown fox jumps over the calm kitten quietly";
var hat = "this hat is the greatest!";
var wonder = "what a wonderful day it has been!";

isSolo(fox);
isSolo(hat);
isSolo(wonder);

function isSolo2(str) {
    var charCount = {};
    var char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount == 1;
    }
}
