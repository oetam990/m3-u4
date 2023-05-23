
const textArea = document.getElementById('textArea');
const contador = document.getElementById('contador');

function contarCaracteres() {
    const contenido = textArea.value;

    const numCaracteres = contenido.length;

    contador.textContent = `Número de caracteres: ${numCaracteres}`;
}


textArea.addEventListener('input', contarCaracteres);

