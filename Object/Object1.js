//what is object in js?
//Ans: An object is a collection of properties defined as key-value
//       pairs. It allows storing multiple values and behaviors together. 
//       Objects are used to represent real-world entities in JavaScript.
//We can create object usiing 3 ways: 1) curly braces 2) new keyword 3) function constructor


//create object using curly braces { }

let obj = {
    title: "harry potter",
    author: "jk rowling",
    display: function () {
        console.log(`${this.title} is written by ${this.author}`);
    }
}
console.log(typeof obj);
console.log(obj.display);
obj.display();
console.log(obj);



//create object using new keyword
let car= new Object();
car.cname="BMW";
car.color="blck"
console.log(car);

let company={
    cname:"TECH Solutions",
    noofemp:500,
    location:"pune"
}
console.log(company.location);
console.log(company);

company.ower="vg"
console.log(company);


//create object using function constructor
function addemployee(id, ename, salary){
    this.id=id;
    this.ename=ename;
    this.salary=salary;
}
let emp1=new addemployee(1,"Vaibhav",50000);
console.log(emp1);
let emp2=new addemployee(2,"Krishna", 50000);
console.log(emp2);


