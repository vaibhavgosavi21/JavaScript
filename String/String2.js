let str1="hello";
let str2='hello';

let str3='${str1} world a+b'
console.log(str3);

//immutable
let str="hello";
str[0]='H';
console.log(str);

//normal way for iterating string
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

//for of loop
for(let ch of str){
    console.log(ch);
    
}


//inbuit method
let str4="I am a string";
console.log(str4[0]);
console.log(str4.charAt(0));

console.log("---------------");

//
let str5="hello2world";
for(let c of str5){
    if(!isNaN){
    console.log(c);
    }
    
    
}

