function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;

    let correctuser="vaibhav";
    let correctpass="2020";

    if(user=== correctuser && pass === correctpass){
        document.getElementById("login").innerHTML="Login Successful...";
        document.getElementById("login").style.color="green";
    }else{
        document.getElementById("login").innerHTML="Invalid uername or passwrod";
        document.getElementById("login").style.color="red";
    }
}