function generatenumber(){
    let num = Number(document.getElementById("input-no").value);

    if ( num % 2 == 0){
       document.getElementById("message").innerText =  "This is an even number"
    }
else{
    document.getElementById("message").innerText =  "This is an odd number"
}
}