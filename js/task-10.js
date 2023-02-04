
const btnCreate = document.querySelector('[data-action="create"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30px;
 
  for (let i = 1; i < amount; i += 1) {
    let sizeNext = boxSize + (i + 10);

    const div = document.createElement("div");
    div.style.width = `width: ${sizeNext}px;`   
    div.style.height = `height: ${sizeNext}px;`
    div.style.background-color =  getRandomHexColor();
  }
  boxes.appendChild(createBoxes);
}

function destroyBoxes() {

}


// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

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
