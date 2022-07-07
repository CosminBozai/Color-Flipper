//Make the background change color when you press flipButton

//The color should be a random hexadecimal color
let colorArray = ["red", "blue", "yellow"];
let randomColor;

//Call the function when flipButton is pressed
let flip = document.getElementById("flipButton");
flip.addEventListener("click", selectColor);
flip.addEventListener("click", changeBackground);

//Function that selects a random element from colorArray
//and store it in randomColor
function selectColor() {
  randomColor = Math.floor(Math.random(colorArray) * colorArray.length);
}

//Function that changes the background color when called
function changeBackground() {
  document.getElementById("body").style.background = colorArray[randomColor];
}

//Show what color the background is in whatColor
