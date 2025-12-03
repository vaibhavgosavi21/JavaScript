//there are 7 function js
//
function sum(a,b){
    console.log(a+b);
}

sum(3,4);

//
function abc(name){
    console.log("my name is: "+name);
}
abc("Vaibhav");
abc("shivam");


//arrow function
const func1=(x)=>{
    console.log("I am an arrow function", x);
}
func1(34);


//1. function expression
let fn1=function f1(){
    console.log("Function expression");
}
 fn1();


 //2.anonymous function: it does not have function name
 let fn2=function(){
    console.log("Anonymous function");
 }
 fn2();

 //3.IIFE: Immediately Invoked Function Expression
 (function(){
    console.log("Immediately Invoked Function Expression");
 })
 ();

 //4.higher order function and callback function: 
 function fname(a,b){        // the function which call another function is called high order function
    console.log(a);
    b();
 }
 function fname2(){
    console.log("fname2");     /// function which is call is called callback functio
 }
 fname(90, fname2);


