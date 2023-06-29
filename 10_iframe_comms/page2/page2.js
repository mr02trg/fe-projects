const messages = document.querySelector('.messages');
const btn = document.querySelector('#btn');

// we know that parent window only contain 1 iframe, which is frame 1
const iframe1 = window.parent.frames[0];

btn.addEventListener('click', () => {
    iframe1.postMessage('This is from page 2!!');
})

window.addEventListener('message', (e) => {
    if (e && e.data) {
        const divEl = document.createElement('div');
        divEl.textContent = e.data;
        messages.append(divEl);
    }
});