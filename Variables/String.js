console.log("-----------------------------Strings--------------------");


//toUpperCase()
let a="hello";
console.log(a.toUpperCase())

//toLowerCase()
let b="VAIBHAV";
console.log(b.toLowerCase());

//indexof()
let c="vaibhav";
console.log(c.indexOf("b"));

//lastindexof()
let d="vaibhav";
console.log(d.lastIndexOf("v"));

//include()
let e="vaibhav";
console.log(e.includes("bha"));

//charAT(index) : find which character present at index 
let f="vaibhav";
console.log(f.charAt(5));

//substring():  return substring using array indexing
let g="Laxman";
console.log(g.substring(2,6));

console.log("---------------******************");

//slice():
let h="Rajaram";
console.log(h.slice(2, 5));

//replace(): replace the string
let i="Hello Vaibhav";
console.log(i.replace("Vaibhav","JavaScript"));

//replaceAll(): replace all the string
let j="aa bb cc aa";
console.log(j.replaceAll("aa","xx"));

//trim(): remove the white spaces
let k="Hello   Vaibhav   ";    
console.log(k.trim());      //"Vaibhav"

//concate()
let l="hello";
console.log(l.concat(" Dude"," ok"));


//split()
let m="India";
console.log(m.split(1,3));

//repeat()
let a1="hello";
console.log(a1.repeat(4));


//replace(): replace the string
let a2="hello Vg and Vg";
console.log(a2.replace("Vg", "NK"));

//replaceAll(): replace all the stri
let a3="aa bb cc aa";
console.log(a3.replaceAll("aa", "xx"));


//split
let a4="hello Vaibhav";
console.log(a4.split(" "));
