const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    const triggerPoint = window.innerHeight * 8 / 9;
    console.log(triggerPoint);
    boxes.forEach(b => {
        const box = b.getBoundingClientRect();
        if (box.top <= triggerPoint) {
            b.classList.add('show');
        } else {
            b.classList.remove('show');
        }
    })
}

window.onscroll = e => checkBoxes();
checkBoxes();


