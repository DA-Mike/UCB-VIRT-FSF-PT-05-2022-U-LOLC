// TODO: What does 'this' refer to?
// window object
console.log(this);

// TODO: What does 'this' refer to?
// object window
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log?
// 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log?
// 5750 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

// Math.floor()
var random = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.floor(Math.random() * random.length));