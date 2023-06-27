const ps5 = document.querySelector('.ps5');
const xbox = document.querySelector('.xbox');

ps5.addEventListener('mouseover', () => {
    ps5.classList.add('hover');
    xbox.classList.remove('hover');
});

xbox.addEventListener('mouseover', () => {
    ps5.classList.remove('hover');
    xbox.classList.add('hover');
})
