function calculate(operation) {

    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let result = 0;

    if (operation === 'add') {
        result = n1 + n2;
    } 
    else if (operation === 'sub') {
        result = n1 - n2;
    } 
    else if (operation === 'mul') {
        result = n1 * n2;
    } 
    else if (operation === 'div') {
        if (n2 === 0) {
            alert("Division by zero not allowed");
            return;
        }
        result = n1 / n2;
    }

    document.getElementById("result").innerText = result;
}
