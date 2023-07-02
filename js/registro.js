// Desplegable Menu ROL

const toggleCheckbox = document.getElementById('toggleCheckbox');

toggleCheckbox.addEventListener('change', function() {
});

// Seleccionar Rol
function expandirSeleccion(checkbox) {
  var seleccion = document.getElementById("seleccion");
  
  if (checkbox.checked) {
    seleccion.removeAttribute("disabled");
    seleccion.classList.add("expandido");
  } else {
    seleccion.setAttribute("disabled", "disabled");
    seleccion.classList.remove("expandido");
  }
}

/*//>>>>>Acciones dentro de nuevo usuario><<<
document.getElementById("registrarse").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    guardarAccion ();

    // Pagina a redirecccionar al usuario > Home
    window.location.href = "/home.html";
    console.log("Bienvenido @User, gracias por registrarse");
    alert("Bienvenido @User, gracias por registrarse");
  });


  document.getElementById("backinicio").addEventListener("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Pagina a redirecccionar al usuario > INICIO
    window.location.href = "#inicio";
    alert('Redireccionando al inicio');
  });


  // Guardando nuevo usuario 
function guardarAccion() {
    var usuario = document.getElementById("username2").value;
    var pw = document.getElementById("password2").value;
    var rol = Array.from(document.getElementById("roles").selectedOptions).map(option => option.value);
    
    const body = {
        username : usuario, 
        password : pw, 
        rol : rol [0]
    }


    const url = "http://localhost:8086/api/v1/usuario/registrar";
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
  };




};
*/

const form = document.querySelector('form');   

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.info('✉');
  //const nombre =  document.getElementById("username2").value
  //const apellido = normalizarTexto( inputApellido.value );
  const username =  document.getElementById("username2").value
  //const email = document.getElementById;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  var rol = Array.from(document.getElementById("roles").selectedOptions).map(option => option.value);
  

  if ( !compararContrasenias( password1, password2 )){
      alert('Las contraseñas No son iguales');
      return;
  }

  const datos = {
     // nombre: nombre,
    //  apellido: apellido,
      username: username,
      email: null,
      rol: rol[0],
      password: password1
  }

  realizarRegister(datos);
});

function compararContrasenias(contrasenia_1, contrasenia_2) {
  if( contrasenia_1 === contrasenia_2){
      return true;
  } else {
      return false;
  }

}

function realizarRegister(datos) {
  const endpoint= 'https://dentalsystem-production.up.railway.app/api/v1/usuario/registrar'
   
  const settings = {
      method: 'POST',
      body: JSON.stringify( datos ),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
  }
  
  fetch(endpoint, settings)
  .then( respuesta => {
      console.log(respuesta);

      return respuesta.json();
  
  }).then( respuestaJSON => {
      console.log(respuestaJSON);
      if( respuestaJSON.jwt){
          localStorage.setItem('jwt', JSON.stringify(respuestaJSON.jwt) );
          location.replace('home.html');

      } else {
          alert('Ups tenemos un error '+ respuestaJSON);

      }
  
  }).catch( error => {  // Si falla
      console.error(error);
      alert('Upss tenemos un error :(');
  })
<<<<<<< HEAD
    .catch(error => {
    console.error(error); 
  });
}

=======
};
>>>>>>> beab56e306b7414ebe384a07d1ac91006fb6adea
