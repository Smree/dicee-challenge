//for image 1-
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImg = "dice" + randomNumber1 + ".png"; 

var randomImgSource = "images/"+ randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSource);

//for img2 we have to do similar steps as img 1 
//but it can also be done as-
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImgSource2 = "images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

//to chage title of page depending on dice roll result-
//we change innerhtml of h1 by comparing 2 results -
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}