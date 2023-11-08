const textArea = document.getElementById('textArea');

textArea.focus();

// function createCursor() {
//     const cursor = document.createElement('span');
//     cursor.className = 'cursor';
//     cursor.textContent = '|';
//     return cursor;
// }

// textArea.appendChild(createCursor());

textArea.addEventListener('input', displayInputText);

function displayInputText() {
    // const cursor = textArea.querySelector('.cursor');
    // const text = textArea.textContent;
    // textArea.innerHTML = text;
    // textArea.appendChild(cursor);
}