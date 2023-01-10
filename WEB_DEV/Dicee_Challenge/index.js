var random1 = Math.ceil(Math.random() * 6);

var random2 = Math.ceil(Math.random() * 6);

document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
} else if(random2 > random1) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}