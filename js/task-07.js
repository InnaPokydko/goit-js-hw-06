
const inputEl = document.querySelector("#font-size-control");

let text = document.querySelector("#text");
text.style.fontSize = inputEl.value + 'px';

function onInput() {
    text.style.fontSize = inputEl.value + "px";
}

inputEl.addEventListener("input", (event) => {
        return inputEl = onInput(`${event.currentTarget.value}px`);
     });


