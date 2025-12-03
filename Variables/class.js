class form{
    submit(){
        console.log("Form submitted");
    }
    cancel(){
        console.log("Form is cancelled");
    }
    fill(name,age){
        this.name=name;
        this.age=age;
        console.log("Hello "+name);
        
    }
}

let rohan=new form();
rohan.submit();
rohan.cancel();
rohan.fill("Vaibhav", 22);