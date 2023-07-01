
// Acciones de Login
// Acciones opción Ingresar
document.getElementById("button2").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  guardarAccion ();

  console.log("Bienvenido @Usuario");
  alert("Bienvenido @Usuario");
  window.location.href = "/home.html";
});

// Acciones opción Nuevo usuaurio
document.getElementById("button").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  alert('Debe crearse un usuario');
  window.location.href = "/registro.html";
});


// Guardando nuevo usuario 
function guardarAccion() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  const body = {
      usuario : username, 
      pw : password 
  }

  console.log(body);

  const url = "https://dentalsystem-production.up.railway.app/api/v1/usuario/registrar";
  const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
},
body: JSON.stringify(body)
};


fetch(url, options)
.then(response => {
  console.log(response.json());
})
  .catch(error => {
  console.error(error); 
});
}
