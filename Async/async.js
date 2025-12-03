//async javascript: 

console.log("1");
console.log("2");

function FetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("User data fetched");
        },2000);
    });
}

FetchUserData().then((msg)=>{
    console.log("MSG: ",msg);
}).catch((r=err)=>{
    console.log("Error: ",err);
    
})

console.log("3");
