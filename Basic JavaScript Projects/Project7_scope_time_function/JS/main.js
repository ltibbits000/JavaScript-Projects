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