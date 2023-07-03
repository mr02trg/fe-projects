const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if (accordion.classList.contains('open')) {
            accordion.classList.remove('open');
        } else {
            accordion.classList.add('open');
        }
    })
});

