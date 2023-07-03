
const form = document.querySelector('form');   

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.info('✉');

  const username =  document.getElementById("username2").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const rol = document.getElementById('role').value;

  if(rol ===""){
    alert('Debe seleccionar una opción.');
    return;
  }

  if (!compararContrasenias( password1, password2 )){
      alert('Las contraseñas No son iguales');
      return;
  }

  const datos = {
      username: username,
      email: null,
      rol: rol,
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
          localStorage.setItem('jwt', respuestaJSON.jwt );
          location.replace('home.html');

      } else {
          alert('Ups tenemos un error '+ respuestaJSON);

      }
  
  }).catch( error => {  // Si falla
      console.error(error);
      alert('Upss tenemos un error :(');
  })
}