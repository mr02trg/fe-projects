const messages = document.querySelector('.messages');

window.addEventListener('message', (e) => {
    if (e && e.data) {
        const divEl = document.createElement('div');
        divEl.textContent = e.data;
        messages.append(divEl);

        // reply
        const reply = 'Ack!!. This is iframe page 1';

        // careful!! not to post message to yourself lol
        if (e.data.includes('page 2')) {
            window.parent.frames[1].postMessage(reply);
        } else {
            window.parent.postMessage(reply);
        }
    }
});