

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function intentoDeUsuario() {
    alert('Click desde el botón');
}

asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');