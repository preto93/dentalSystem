// Acciones de Login
document.getElementById("newuser").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario
    window.location.href = "#nuevousuario";
  });
  
  document.getElementById("ingresar").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    

    // Enviando al usuario al HOME
    window.location.href = "#home";
    console.log("Bienvenido @Usuario");
  });



  //>>>>>Acciones dentro de nuevo usuario><<<
  document.getElementById("registrarse").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > Home
    window.location.href = "#home";
    console.log("Bienvenido @User, gracias por registrarse");
  });

  document.getElementById("backinicio").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > INICIO
    window.location.href = "#inicio";
    alert('Redireccionando al inicio');
  });


  // Acciones de tablas > odontologos/pacientes, agregar, eliminar, editar
  function modificarElemento()
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
    alert('Elemento eliminado correctamente');
}

// Función para modificar un elemento
function modificarElemento() {
    var elementoModificar = document.getElementById('elementoModificar');
    elementoModificar.innerHTML = 'Elemento modificado';
}

// Desplegable Menu

const toggleCheckbox = document.getElementById('toggleCheckbox');

toggleCheckbox.addEventListener('change', function() {
  // No se necesita código JavaScript adicional en este caso
});

// Boton Confirmar turno
const okturnos = document.getElementById('okturno');

okturnos.addEventListener('click', function(event) {
  alert('El turno se ha reservado con éxito');
});