// WRITE YOUR CODE HERE

var names = ["Mike", "John", "PJ", "Abraham"];

console.log("Welcome to the class " + names);

names.unshift("Rose");

console.log("Welcome to the class " + " " + names);

console.log(names.length);

if (names[0]==="PJ") {
    console.log("Not in class");
} else {
    console.log(names[0] + " is in class.");
}

var namesLength = names.length;

console.log("The last student is " + names[namesLength-1]);

for (x in names) {
    console.log("Welcome to the class " + names[x]);
}

