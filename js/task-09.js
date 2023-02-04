
const buttonChangeColor = document.querySelector(".change-color")
const bodyChangeColor = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bodyChangeColor.textContent = document.body.style.backgroundColor;
});



