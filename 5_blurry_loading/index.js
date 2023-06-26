const bg = document.querySelector('.bg');
const percentage = document.querySelector('.percentage');
let intervalId = null;
let count = 0;

intervalId = setInterval(() => {
    if (count === 100) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }
    count++;
    percentage.textContent = count;
    percentage.style.opacity = 1 - count / 100;
    bg.style.filter = `blur(${10 - count / 10}px)`
}, 100);