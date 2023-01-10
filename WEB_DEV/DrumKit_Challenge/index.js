// Using function call like handleClick() instead of handleClick in the below line of code, will executet the function directly on page load itself.
//document.querySelector("button").addEventListener("click", handleClick());

// Use this instead
/*document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!!!!!!");
});*/

// Or this
/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
}*/

/*
Higher Order Functions Example

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
*/

/*
Use of Javascript Objects and Constructor Functions

Example of JS Objects

var bellBoy1 = {
    name: "ABCD",
    age: 20,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitCase: function() {
        alert("Moved Suitcase!");
    }
}

Example of Constructor Function to create multiple objects
Constructor Function does not follow camel case naming standard. It starts with capital letter.

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitCase = function() {
        alert("Moved Suitcase!");
    }
}

Calling ConstructorFunction to create JS Objects

var bellBoy1 = new BellBoy("ABCD", 20, true, ["French", "English"]);
var bellBoy2 = new BellBoy("XYZ", 19, true, ["English"]);

*/

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        buttonAnimation(this.innerHTML);
        audioSelect(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);
    audioSelect(event.key);
})



function audioSelect(item) {
    /*if (this.innerHTML === "w") {
            new Audio("sounds/tom-1.mp3").play();
        } else if (this.innerHTML === "a") {
            new Audio("sounds/tom-2.mp3").play();
        } else if (this.innerHTML === "s") {
            new Audio("sounds/tom-3.mp3").play();
        } else if (this.innerHTML === "d") {
            new Audio("sounds/tom-4.mp3").play();
        } else if (this.innerHTML === "j") {
            new Audio("sounds/snare.mp3").play();
        } else if (this.innerHTML === "k") {
            new Audio("sounds/crash.mp3").play();
        } else if (this.innerHTML === "l") {
            new Audio("sounds/kick-bass.mp3").play();
        }*/
        switch (item) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;
            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;
            case "j":
                new Audio("sounds/snare.mp3").play();
                break;
            case "k":
                new Audio("sounds/crash.mp3").play();
                break;
            case "l":
                new Audio("sounds/kick-bass.mp3").play();
                break;
            default:
                console.log(item);
        }
}

function buttonAnimation(key) {
    if (document.querySelector("." + key)) {
         document.querySelector("." + key).classList.add("pressed");
        setTimeout(function () {
            document.querySelector("." + key).classList.remove("pressed");
        }, 100);   
    }
}
    