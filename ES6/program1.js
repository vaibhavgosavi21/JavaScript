//1. destructing of array
let arr=["red","green","blue","yellow"];
let[a,b,c,d]=arr;
// let[a,,,d]=arr;
console.log(d);

//nested array
let arr1=[1,2,[4,5]];
let [p,q,[e,s]]=arr1;
console.log(e);
