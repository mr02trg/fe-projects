const cards = document.querySelectorAll('.card');

const expandCard = (targetCard) => {
    cards.forEach(c => {
        if (c !== targetCard) {
            c.classList.remove('active');
        } else {
            c.classList.add('active');
        }
    })
}

cards.forEach(c => {
    c.addEventListener('click', () => expandCard(c));
})

