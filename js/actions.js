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
    alert("Bienvenido @Usuario");
  });



  

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


function vaciarFormulario() {
  document.getElementById("username2").value = "";
  document.getElementById("password2").value = "";
  document.getElementById("roles").selectedIndex = -1;
}



// Acciones del HOME 
// Turnos
document.getElementById("buttonturno").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  // Pagina a redirecccionar al usuario
  window.location.href = "#turno";
});

//Odontologos
document.getElementById("buttonodontologo").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  // Pagina a redirecccionar al usuario
  window.location.href = "#odontologo";
});

//Paciente
document.getElementById("buttonpaciente").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  // Pagina a redirecccionar al usuario
  window.location.href = "#paciente";
});


