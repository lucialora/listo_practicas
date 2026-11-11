// Formulario de tareas: cuenta los caracteres del título y valida antes de enviar.

const formulario = document.getElementById("tarea");
const campoTitulo = document.getElementById("title");
const contador = document.getElementById("contador");
const maximo = 120;

function actualizarContador() {
    const largo = campoTitulo.value.length;
    contador.textContent = `${largo}/${maximo}`;
    contador.classList.toggle("contador-pasado", largo > maximo);
}

// Al cargar la página (al editar, el título ya trae texto) y a cada tecla
actualizarContador();
campoTitulo.addEventListener("input", actualizarContador);