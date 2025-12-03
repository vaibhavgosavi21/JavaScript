console.log("-------Loops-----");
//print 1 to 10 numbers

//for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//while loop
let a=0;
// while(a<5){
//     console.log(a);
//     a++;
    
// }

//do..while loop
do{
    console.log(a);
    a++;
}while(a<8);


//for..in loop: Used to iterate through keys/properties of an object
//Returns the keys (property names) of the object
let obj={
    name:"Vaibhav",
    age:22,
    city:"Mumbai"
}
for (const key in obj) {
    const element=obj[key];
    console.log(key, element); //prints: name Vaibhav, age 22, city Mumbai
}

//for..of loop: Used to iterate through values of iterable objects (arrays, strings, etc.)
//Returns the actual values, not the keys/indices
let arr = ["apple", "banana", "orange"];
for (const value of arr) {
    console.log(value); //prints: apple, banana, orange
}

//for..of with string
let str = "Hello";
for (const char of str) {
    console.log(char); //prints: H, e, l, l, o
}

