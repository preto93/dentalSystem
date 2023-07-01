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
  
