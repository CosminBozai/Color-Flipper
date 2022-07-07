//Make the background change color when you press flipButton
let randomColor;

//Function that takes 6 random character from the string, making a new string
//By appending # at the start of the string it creates a random hex color
function selectColor() {
  randomColor = "#";
  let characters = "0123456789abcdef";
  let charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    randomColor += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return randomColor;
}

randomColor = selectColor();
console.log(randomColor);

//Function that changes the background color when called
function changeBackground() {
  document.getElementById("body").style.background = randomColor;
}

//Call the function when flipButton is pressed
let flip = document.getElementById("flipButton");
flip.addEventListener("click", selectColor);
flip.addEventListener("click", changeBackground);

//Show what color the background is in whatColor
