const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
prevBtn.disabled = true;

let progress = 0;
let activeStep = 0;
const totalSteps = steps.length - 1;

function updateStep(n) {
    activeStep += n;

    // update button disabled state
    if (activeStep === totalSteps) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    if (activeStep === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }


    // update active step
    steps.forEach((s, i) => {
        if (i <= activeStep) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    })


    // update progress
    progress = activeStep / totalSteps * 100;
    progressBar.style.width = `${progress}%`;
}

prevBtn.addEventListener('click', () => updateStep(-1));
nextBtn.addEventListener('click', () => updateStep(1));


