// Form Registration
function registerUser() {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const mobile = prompt("Enter mobile number:");
    const password = prompt("Create password:");
    const reenterPassword = prompt("Re-enter password:");
    
    // Password validation
    const isValidPassword = password.length >= 8 && 
                           /[A-Z]/.test(password) && 
                           /\d/.test(password) && 
                           /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password !== reenterPassword) {
        console.log("Passwords do not match");
    } else if (isValidPassword) {
        console.log("Account created successfully");
    } else {
        console.log("Password is too weak");
    }
}

registerUser();
