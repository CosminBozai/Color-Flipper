//Make the background change color when you press flipButton
let randomColor;

//Function that takes 6 random character from the string, making a new string
//By appending # at the start of the string it creates a random hex color
function selectColor() {
  randomColor = "#";
  const characters = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    randomColor += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomColor;
}

randomColor = selectColor();

//Function that changes the background color when called
function changeBackground() {
  document.getElementById("body").style.background = randomColor;
}

//Call the function when flipButton is pressed
const flip = document.getElementById("flipButton");
flip.addEventListener("click", selectColor);
flip.addEventListener("click", changeBackground);
flip.addEventListener("click", seeColor);

//Show what color the background is in whatColor
function seeColor() {
  document.getElementById("whatColor").innerHTML = randomColor.toUpperCase();
}
