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

//>>>>>Acciones dentro de nuevo usuario><<<
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

