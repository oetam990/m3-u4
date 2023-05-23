var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4

    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];


function mostrarAlumnosAprobados(alumnos) {
    let alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);

    const lista = document.getElementById('listaAprobados');

    lista.innerHTML = '';

    console.log(alumnosAprobados)

    alumnosAprobados.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = alumno.nombre;
        lista.appendChild(li);
    });
}
