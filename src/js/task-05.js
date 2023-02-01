
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (textInput.value === '') {
        textOutput.innerHTML = 'Anonymous';
     } else{
        textOutput.innerHTML = textInput.value;
     }
  });