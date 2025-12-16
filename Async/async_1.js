console.log("1");
console.log("2");

function FetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                resolve({ id: 1, name:"Vaibhav", pass:"123", developer:true });
            } else {
                reject("data not found");
            }
        }, 2000);
    });
}

// Using Promises
FetchUserData(1)
    .then((msg) => {
        console.log("MSG:", msg);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

console.log("3");

// Using async/await
async function getUser() {
    try {
        const user = await FetchUserData(1);
        console.log("Async User:", user);
    } catch (errr) {
        console.log("Async Error:", errr);
    }
}
getUser();

