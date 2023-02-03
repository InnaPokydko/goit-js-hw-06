
const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', () => {
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.remove("invalid");
        return textInput.classList.add("valid");
    } else
    return textInput.classList.add("invalid");
});