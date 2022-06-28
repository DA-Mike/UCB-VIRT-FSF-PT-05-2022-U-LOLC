//WRITE YOUR CODE BELOW

var customerOrder = {
    drinkName: "Mike",
    sugars: 3,
    ready: false,
};

console.log("Customer: " + customerOrder.drinkName + ";" + " " + "Sugars: " + customerOrder.sugars)

if (customerOrder.ready) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
};

for (x in customerOrder) {
    console.log(x, customerOrder[x]);
};