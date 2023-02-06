
const btnCreate = document.querySelector('[data-action="create"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const arr = new Array(Number(amount)).fill("");
  const markup = arr.map((value, index) => {
    value + `<div style=
    width: ${30 + index * 10}px
    height: ${30 + index * 10}px
    backgroundcolor: ${getRandomHexColor()}>
    </div>`
  }).join("");
  return divToAppend.innerHTML = markup;
}



// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//     const itemsList = [];
    
//     amount = Number(typeEl.value);
//     itemsList.length = amount;

//     itemsList.fill("").map((element, index) => {
//         itemsList.forEach((item) => {
//             element = document.createElement('div')
//             element.style.width = 30 + index * 10 + 'px';
//             element.style.height = 30 + index * 10 + 'px';
//             element.style.backgroundColor = getRandomHexColor();
//         })
//         itemsList[index] = element;
//     })
//     randomBoxes.append(...itemsList);
//     console.log(itemsList)
// }

// function destroyBoxes(amount) {
//     randomBoxes.innerHTML = '';
//     typeEl.value = '';
// }
