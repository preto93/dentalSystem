// Acciones del HOME 
// Turnos
document.getElementById("buttonturno").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario
    window.location.href = "/turno.html";
  });
  
  //Odontologos
  document.getElementById("buttonodontologo").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario
    window.location.href = "/odontologo.html";
  });
  
  //Paciente
  document.getElementById("buttonpaciente").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario
    window.location.href = "/paciente.html";
  });
  
  // Cerrar Sesion
const salirButton = document.getElementById("cerrarsesion");

// Agregar el evento de clic al botón "Salir"
salirButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  // Lógica para cerrar sesión
  cerrarSesion();
  
  // Redireccionar al usuario a la página de inicio
  window.location.href = "index.html";
});

// Función para cerrar sesión
function cerrarSesion() {
  // Realizar las acciones necesarias para cerrar la sesión

  // Mostrar una alerta de cierre de sesión
  alert("Sesión cerrada exitosamente");
}
