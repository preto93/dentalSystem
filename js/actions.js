function agregarElemento() {
    var div = document.getElementById('actions');
    var nuevoElemento = document.createElement('p');
    nuevoElemento.innerHTML = 'Nuevo elemento agregado';
    div.appendChild(nuevoElemento);
}

// Función para eliminar un elemento
function eliminarElemento() {
    var elementoEliminar = document.getElementById('elementoModificar');
    var padre = elementoEliminar.parentNode;
    padre.removeChild(elementoEliminar);
}

// Función para modificar un elemento
function modificarElemento() {
    var elementoModificar = document.getElementById('elementoModificar');
    elementoModificar.innerHTML = 'Elemento modificado';
}