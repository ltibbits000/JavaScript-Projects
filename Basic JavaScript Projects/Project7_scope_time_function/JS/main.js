function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

    //time function
    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time";
        }
        else if (Time >= 12 == Time < 18) {
            Reply = "It is afternoon.";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }

var greeting = "Hello from Global Vairable" //assigning global variable

function helloWorld() {
    var greeting = "Hello from Local Variable"
    greeting += "???";
    document.write(greeting);
}

greeting += "!!!";

helloWorld();
document.write("<br/>");

document.write(greeting);

// messed up console.log 
function Add_numbers_2() {
    var X = 12;
    console.log(11 + X);
}
function Add_Numbers_3() {
    console.log(X + 1000);
}
Add_numbers_2();
Add_Numbers_3();