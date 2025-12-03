//objects
//javascript object is a non primitive data type that allows you to store multiple collections of data.

//  object creation using object literals {} 
const person={
    name:"govind",
    age:22,
    loc:"pune",
    address:{
        city:"pune",
        state:"maharashtra",
        country:"india",
        pincode:411030
    }
}
console.log(person);

//update name
person.name="vaibhav"

//show only name
console.log(person.name);

//show only age
console.log(person.age);

//dot notation
console.log(person.name);

//Bracket notation
console.log(person["name"]); 

// add property 
person.company="wipro";
console.log(person);

//delete property
delete person.age;
console.log(person);

//access the nested property 
console.log(person.address);

//check if property exits in the object
console.log("name" in person);

//for in loop

//the for in loop allows you to access each property and
//  value of an object without knowing the specific name of the property.

//display properties
for(let prop in person){
    console.log(prop);
}

// display values
for(let prop in person){
    console.log(person[prop]);
}

//display both key and value
for(let prop in person){
    console.log(prop+":"+person[prop]);
}




//create object using new keyword

const person1=new Object();

person1.firstname="govind";
person1.lastname="pawar";
person1.age="22";

console.log(person1);

//function contructor
function employee(id,name,sal) {
    this.id=id;
    this.name=name;
    this.sal=sal;
}
let emp1=new employee(1,"govind",50000)
console.log(emp1);
let emp2=new employee(2,"rahul",40000)
console.log(emp2);

//nested object creation
let rohit={
    Test:{
        totalMatches:100,
        totalRuns:700
    },
    T20:{
        totalMatches:200,
        totalRuns:3000
    },
    ODI:{
        totalMatches:150,
        totalRuns:5000
    }
}
console.log(rohit.ODI);
console.log(rohit.ODI.totalMatches);
console.log(rohit.ODI.totalRuns);

//--------------------------------------------

// object keys , values , entries
const studentMarks={
    A:78,
    B:89,
    C:67
}
console.log(Object.keys(studentMarks));     //only show keys   A ,B,C
console.log(Object.values(studentMarks));   //only show values 78,89,67
console.log(Object.entries(studentMarks));  //key value pair   A:78, B:89, C:67

//ES6 rest & spread operator

//Rest

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c;
}
const result=addNumber(10,20,30)
console.log(result);

//spread 
var names=["govind","vaibhav","rahul"];

function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}
getNames(...names)


//rest in object
var students={
    name:"govind",
    age:22,
    hobbies:["trekking","travelling"]
}
const age =students;
console.log(age);