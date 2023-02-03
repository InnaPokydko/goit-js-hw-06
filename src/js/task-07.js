
const inputEl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

function onInput() {
    text.style.fontSize = inputEl.value + "px";
}


