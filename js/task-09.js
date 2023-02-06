 
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color")
const bodyChangeColor = document.querySelector(".color")

buttonChangeColor.addEventListener("click", () => {
  bodyChangeColor.textContent = document.body.style.
  backgroundColor = getRandomHexColor()
 
})



