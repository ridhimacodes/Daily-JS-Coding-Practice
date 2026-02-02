function showresult(){
let mathsmarks = 60 ;
let engmarks = 76;
let sciencemarks = 66;

document.getElementById("mathsmarks").innerText = "Maths: "+ mathsmarks;
document.getElementById("engmarks").innerText = "English: "+ engmarks;
document.getElementById("sciencemarks").innerText = "Science: "+ sciencemarks;

if(mathsmarks >=  40 && engmarks >=  40 && sciencemarks >=  40){
    document.getElementById("result").innerText = "Result: PASS" ;
    result.className = "pass";
}
else {
    document.getElementById("result").innerText = "Result: FAIL" ;
     result.className = "fail";
}


let highest = mathsmarks;
let subject = "Maths";

if (engmarks >= highest){
 highest = engmarks;
 subject = "English";
}
if (sciencemarks >= highest){
 highest = sciencemarks;
 subject = "Science";
}
 document.getElementById("highestmarks").innerText = "Highest Marks: " + subject + "("+highest+")" ;


let total = 300;
let obtainedmarks = mathsmarks + engmarks + sciencemarks;
let percentage = (obtainedmarks/total) * 100;
percentage = percentage.toFixed(2);
document.getElementById("percentage").innerText = "Percentage: " + percentage + "%";


let grades = document.getElementById("grade");
percentage  = Number(percentage);

if(percentage >= 80){
 grades.innerText = "Grade: A"  ;
}
else if(percentage >= 65){
 grades.innerText = "Grade: B"  ;
}
else if(percentage >= 50){
 grades.innerText = "Grade: C"  ;
}
else if(percentage >= 40){
 grades.innerText = "Grade: D"  ;
}
else{
     grades.innerText = "Grade: Fail"  ;
}

}