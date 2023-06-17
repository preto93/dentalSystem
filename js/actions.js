// Acciones de Login
document.getElementById("newuser").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario
    window.location.href = "newuser.html";
  });
  
  document.getElementById("ingreso").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    

    // Enviando al usuario al HOME
    window.location.href = "home.html";
    console.log("Bienvenido @Usuario");
  });

  //Acciones dentro de nuevo usuario
  document.getElementById("registro").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > Home
    window.location.href = "home.html";
    console.log("Bienvenido @User, gracias por registrarse");
  });

  document.getElementById("backinicio").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > INICIO
    window.location.href = "inicio.html";
    console.log("Regresando al inicio");
  });



  //

  document.getElementById("registro").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > Home
    window.location.href = "home.html";
    console.log("Redireccionando al home");
  });
  

  // Acciones de tablas > odontologos/pacientes, agregar, eliminar, editar

function agregarElemento() {
    var div = document.getElementById('actions');
    var nuevoElemento = document.createElement('p');
    nuevoElemento.innerHTML = 'Nuevo elemento agregado';
    div.appendChild(nuevoElemento);
}

// Función para eliminar un elemento
function eliminarElemento() {
    var elementoEliminar = document.getElementById('elementoEliminar');
    var padre = elementoEliminar.parentNode;
    padre.removeChild(elementoEliminar);
}

// Función para modificar un elemento
function modificarElemento() {
    var elementoModificar = document.getElementById('elementoModificar');
    elementoModificar.innerHTML = 'Elemento modificado';
}

