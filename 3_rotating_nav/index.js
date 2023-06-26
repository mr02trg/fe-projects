const openNavBtn = document.querySelector('.bars');
const closeNavBtn = document.querySelector('.xmark');
const container = document.querySelector('.container');
const circleContainer = document.querySelector('.circle-container');
const nav = document.querySelector('#nav');


const toggleNav = (showNav) => {
    if (showNav) {
        container.classList.add('show-nav');
        circleContainer.classList.add('show-nav');
        nav.classList.add('show-nav');
    } else {
        container.classList.remove('show-nav');
        circleContainer.classList.remove('show-nav');
        nav.classList.remove('show-nav');
    }
}

openNavBtn.addEventListener('click', () => toggleNav(true));
closeNavBtn.addEventListener('click', () => toggleNav(false));