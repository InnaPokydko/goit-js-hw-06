
const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', () => {
    if (textInput.value.trim().length === Number(textInput.dataset.length)) {
        return textInput.classList.add("valid");
    } else
    return textInput.classList.replace("valid", "invalid");
});

