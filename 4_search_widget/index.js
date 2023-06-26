const input = document.querySelector('#input');
const button = document.querySelector('#button');

let showInput = false;

button.addEventListener('click', () => {
    showInput = !showInput;
    if (showInput) {
        input.classList.add('show-input');
        button.classList.add('show-input');
    } else {
        input.classList.remove('show-input');
        button.classList.remove('show-input');
    }
})