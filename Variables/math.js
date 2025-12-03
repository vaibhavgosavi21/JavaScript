//Q: What is the use of the Math object in JavaScript?
// Answer:
// The Math object in JavaScript is a built-in object that provides mathematical constants and functions.
//  It is used to perform common mathematical tasks like rounding numbers, finding maximum and minimum values, 
// generating random numbers, calculating powers and roots, and performing trigonometric operations. 
// It does not need to be created manually; all methods are accessed directly using Math.methodName().

console.log(Math.sqrt(9));

console.log(Math.max(23,45,21));

console.log(Math.min(21,56,23,11,56));

//Rounds a number to the nearest integer.
console.log(Math.round(4.6));      // 5
console.log(Math.round(4.4));       // 4
console.log(Math.round(5.5));


//Math.floor(): Always rounds down.
console.log(Math.floor(4.9));

//Math.ceil(): Always rounds up.
console.log(Math.ceil(77.8));

//math.random(): Return Random number between 0 and 1
console.log(Math.random());
console.log(Math.random()*10+1);    //generate number between 0 to 10
console.log(Math.random()*100+1);   // generate number between 10 to 100
console.log(Math.random()*30000);

//Math.abs(): Returns the absolute (positive) value.
console.log(Math.abs(-7));
console.log(Math.abs(-44));

//math.trunc(): Removes the decimal part of a number.
console.log(Math.trunc(4.6));
console.log(Math.trunc(99.7));

//math.pow(): Returns the value of a base raised to a power.
console.log(Math.pow(2,3));
console.log(Math.pow(11,2));

//math.sign(): Returns the sign of a number (-1 for negative, 0 for zero, 1 for positive).
console.log(Math.sign(55));
console.log(Math.sign(-22));
console.log(Math.sign(00));

//math.pi: Returns the value of PI.
console.log(Math.PI);




