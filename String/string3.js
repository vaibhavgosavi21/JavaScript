// string -collection of charcaters
// let str1="hello";
// let str2='hello';
// let a=10,b=20;
// // template literals
// // let str3=str1+" world"+str2+" dfghjk";
// let str3=`${str1} world ${a+b}`
// console.log(str3);

// // string immutable in nature
// let str5="hello world";
// // console.log(str5);//hello
// // str5[0]="w";
// // console.log(str5);//wello hello
// //normal way
// for(let i=0;i<str5.length;i++){
//    console.log(str5[i]);
   
// }
// // for of loop
// for(let ch of str5){
//     console.log(ch);
   
// }

// inbuilt methods
let str=" hello world ";
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.includes("he"));
console.log("HELLO".toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat(" extra word"));
console.log(str.endsWith('e'));
console.log(str.startsWith('h'));
console.log(str.indexOf('h'));
// hello world
// 01234
console.log(str.replace('l','w'));
console.log(str.replaceAll('l','w'));
console.log(str.slice(1,4));//el
console.log(str.split(" "));
console.log("hello c Progammin".split(" ").length);
console.log("hello"-10);//hello10 error
console.log(str.substring(1,4));
console.log(str);
console.log(str.trimStart());
console.log(str.trimEnd());




let str1="hello2world";
for(let c of str1){
    if(!isNaN(c)){
    console.log("Number found");
    break;
    }
   
}
