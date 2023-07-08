const container = document.querySelector('#container');
const boxes = document.querySelectorAll('.box');

const fill = document.querySelector('.fill');

function dragStart() {
    this.classList.add('dragging');
    setTimeout(() => {
        this.classList.remove('fill');
    }, 0);
}

function dragEnd() {
    this.classList.remove('dragging');
    this.classList.add('fill');
}

function dragEnter(e) {
    this.classList.add('hover');
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('hover');
}

function dropHandler() {
    this.classList.remove('hover');
    this.appendChild(fill);
}

// add event listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
boxes.forEach(b => {
    b.addEventListener('dragenter', dragEnter);
    b.addEventListener('dragover', e => {
        e.preventDefault();
    });
    b.addEventListener('dragleave', dragLeave);
    b.addEventListener('drop', dropHandler);
})




