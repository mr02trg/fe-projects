const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

labels.forEach(label => {
    label.innerHTML = label.textContent.split('').map((t, i) => {
        const delay = 0.05 * (i + 1);
        return `<span style="transition-delay: ${delay}s;">${t}</span>`
    }).join('');
});
