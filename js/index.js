
// Acciones de Login
// Acciones opción Ingresar
document.getElementById("button2").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  guardarAccion ();

  
 
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
      username : username, 
      password : password 
  }

  console.log(body);

  const url = "https://dentalsystem-production.up.railway.app/api/v1/usuario/login";
  const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
},
body: JSON.stringify(body)
};


fetch(url, options)
.then(response => response.json())
.then(response => {
 // console.log(response);
      if(response.jwt){
          alert("Bienvenido @"+username)
          console.log(response.jwt);
          localStorage.setItem('jwt', response.jwt );
          //location.replace('home.html');
          window.location.href = "/home.html";
      } else {
          alert('Usuario no encontrado, debe registrarse '+ response);

      };
})
  .catch(error => {
  console.error(error); 
});
}
