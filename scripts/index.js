const text = document.getElementById('viewport');

window.addEventListener('resize', updateWidth)

function updateWidth() {
    document.getElementById('viewport').innerText = document.documentElement.clientWidth;
}
