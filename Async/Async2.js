//There are 3 ways to use asynchronous js

//1. Callback
// console.log("Start");
// function getdata(cb){
//     setTimeout(() => {
//         cb(`data not received with id 1`);
//     }, 4000);
// }

// getdata((result)=>{
//     console.log(result);
// })
// console.log("End");


//2. promise
// console.log("Start");
// function getdata(id){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej(`data not received`);
//             res(`data received`);
//         },3000)
//     })
// }

// getdata(1).then((msg)=>{
//     console.log(msg);
    
// }).catch((err)=>{
//     console.log("Error:"+err);
    
// })

// console.log("End");


//3. async await
console.log("Start");

function getdata(id){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            rej(`data not received`);
        },3000)
    })
}

 async function FetchUserData(){
   try{
    let data=await getdata(1);
    console.log(data);
    
   } catch(err){
    console.log(err);
    
   }
}

FetchUserData();
console.log("End");

