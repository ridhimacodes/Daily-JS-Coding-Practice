function calculate(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let operator =  document.getElementById("operator").value;
    let result;

     let random = Math.random();
     
     if (random < 0.1){
        if (operator === "+") result = a - b;
        else if (operator === "-") result =  a / b;
        else if (operator === "*" ) result = a + b;
         else if (operator === "/") result =  a ** b;           
     }
    else {
         if (operator === "+") result = a + b;
        else if (operator === "-") result =  a - b;
        else if (operator === "*")  result = a * b;
         else if (operator === "/") result =  a / b;
    }
    document.getElementById("result").innerText = "Result: " + result;

}