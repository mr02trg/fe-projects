const iframe1 = document.querySelector('#iframe1');
const messages = document.querySelector('.messages');
const button = document.querySelector('#btn');

window.addEventListener('message', e => {
    const divEl = document.createElement('div');
    divEl.textContent = e.data;
    messages.appendChild(divEl);
})

button.addEventListener('click', () => {
    iframe1.contentWindow.postMessage('this is from parent');
});
