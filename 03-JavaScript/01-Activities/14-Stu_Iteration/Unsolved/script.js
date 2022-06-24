//WRITE YOUR CODE BELOW

var students = ["Mike", "John", "PJ", "Abraham", "Maurice"];

console.log(students.length);

for (var i = 0; i < students.length; i++) {
    console.log("Great to see you " + students[i] + "!");
}

for (x in students) {
    console.log("Great to see you " + x + "!");
}

let n = 0;
while (n < students.length) {
    console.log(students[n]);
    n++;
}
