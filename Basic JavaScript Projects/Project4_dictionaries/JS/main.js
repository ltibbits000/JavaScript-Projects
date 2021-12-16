function my_Dictionary() { 
    var Animal = {          //assigning variables
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;    //delete animal sound value 
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}