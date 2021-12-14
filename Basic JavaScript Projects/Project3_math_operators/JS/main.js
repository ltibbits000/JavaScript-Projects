//Addition 
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("sum").innerHTML= "2 + 2 = " + addition;
}

//Subtraction
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("minuend").innerHTML= "5 - 2 = " + subtraction;
}

//Multiplication
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("product").innerHTML = " 8 * 6 = " + simple_Math;
}

//Division
function division() {
    var division = 48 / 6;
    document.getElementById("quotient").innerHTML = "48 / 6 = " + division;
}

// ++ 
Var X = 5;
X++;
document.write(X);

// -- 
Var Y = 5.25;
Y--;
document.write(Y);

//%
function remainder() {
    var remainder = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a 
    remainder of: " + remainder;
}



//random math
window.alert(Math.random());