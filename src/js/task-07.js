
const inputEl = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

function onInput() {
    text.style.fontSize = inputEl.value + "px";
}

inputEl.addEventListener("input", (event) => {
        return inputEl = onInput(`${event.currentTarget.value}px`);
     });
