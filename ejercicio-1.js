const divs = document.querySelectorAll('div.cuadrado-1,div.cuadrado-2,div.cuadrado-3');

function cambiarColor(color) {
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
}

divs.forEach(function (div) {
    div.addEventListener('click', function () {
        const color = window.getComputedStyle(div).backgroundColor;
        cambiarColor(color);
    });
});
