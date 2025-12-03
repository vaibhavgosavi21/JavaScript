console.log("Conditional Statement");
//
let age=19;
if(age<=18){
    console.log("Eligible for vote");
}else{
    console.log("Not eligible for vote");
}

//
let marks=77;
if(marks>90){
    console.log("Grade: A");
}else if(marks>80){
    console.log("Grade: B");
}else  if(marks>70){
    console.log("Grade: C");
}else if(marks>60){
    console.log("Grade: D");
}else{
    console.log("Fail");
    
}

console.log("--------Switch Statement----------");
let day=3;

switch(day){
    case 1: 
    console.log("Monday");
    break;
    case 3:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");    
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");  
    break;
    default:
        console.log("INVALID DAYS");
        
}
