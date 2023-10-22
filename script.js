const textInput = document.getElementById('input-text');
const textDisplay = document.getElementById('displayed-text');

textInput.addEventListener('input', displayWrittenText);

function displayWrittenText() {
    const writtenText = textInput.value;
    textDisplay.textContent = writtenText;
}