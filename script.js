const textArea = document.getElementById('textArea');

textArea.focus();

function createCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    return cursor;
}

textArea.appendChild(createCursor());