// array

const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log(days);
console.log("lenght of array "+days.length);
console.log(days[4]);

days[5]="holiday"
console.log(days);

//typeof
console.log(typeof(days));

//toString
let a=[1,7,5,9];
console.log(a.toString);
console.log(a);

//join
let arr=[5,6,32,2];
console.log(arr.join(" and "));     //5 and 6 and 32 and 2


//reverse
let arr1=[5,6,32,2];
console.log(arr1);
console.log(arr1.reverse());
console.log("****");


//pop
let arr2=[5,6,32,2];
arr2.pop();
console.log(arr2);

//push
let arr3=[5,6,32,2];
arr3.push(10);
console.log(arr3);

//splice
let arr4=[5,6,32,2];
arr4.splice(2,1,100,600);
console.log(arr4);

//slice
let arr5=[5,6,32,2,6,8];
console.log(arr5.slice(2));

//sort
let arr6=[3,1,6,2];
console.log(arr6.sort());

//shift
let arr7=[3,1,6,2];
console.log(arr7.shift());
console.log(arr7);


//unshift
let arr8=[3,1,6,2];
console.log(arr8.unshift(77));
console.log(arr8);

//delete
let arr9=[3,1,6,2];
delete arr9[2];
console.log(arr9);

//concat
let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
console.log(a1.concat(a2,a3));

