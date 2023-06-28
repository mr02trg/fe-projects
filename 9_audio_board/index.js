
const audios = document.querySelectorAll('audio');
const container = document.querySelector('.buttons');

audios.forEach(audio => {
    const button = document.createElement('button');
    button.innerText = audio.id.toUpperCase();
    button.classList.add('btn');
    button.addEventListener('click', () => {
        audios.forEach(a => a.pause());
        audio.play()
    });

    container.appendChild(button);
});
