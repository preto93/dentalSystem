
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


