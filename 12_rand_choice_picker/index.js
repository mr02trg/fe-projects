const textarea = document.querySelector('textarea');
const choiceContainters = document.querySelector('.choice-containers');
const MAX_TICKS = 20;

const tick = (count, cb) => {
    if (count === 0) {
        return;
    }
    const timeOut = (MAX_TICKS - count) * 50;
    cb();
    setTimeout(() => {
        count -= 1;
        tick(count, cb);
    }, timeOut);
}

textarea.addEventListener('input', e => {
    const value = e.target.value;
    const choices = value.split(',');
    choiceContainters.innerHTML = null;
    choices.forEach(c => {
        if (c.trim() !== '') {
            const choice = document.createElement('div');
            choice.classList.add('choice')
            choice.textContent = c;
            choiceContainters.appendChild(choice);
        }
    })
});

textarea.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        // clear text area
        textarea.value = '';
        e.preventDefault();

        tick(MAX_TICKS, () => {
            const choices = choiceContainters.querySelectorAll('.choice');
            choices.forEach(c => c.classList.remove('active'));
            const rand = Math.floor(Math.random() * choices.length);
            const activeChoice = choices[rand];
            activeChoice.classList.add('active');
        });
    }
});
