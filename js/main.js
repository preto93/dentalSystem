const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
e.preventDefault()
const data = {
    username: username.value,
    password: password.value
}

console.log(data)

})


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

  // Fechas de las tablas
  var fecha1 = new Date();
document.getElementById("fecha1").textContent = fecha1.toDateString();

var fecha2 = new Date();
document.getElementById("fecha2").textContent = fecha2.toDateString();

var fecha3 = new Date();
document.getElementById("fecha3").textContent = fecha3.toDateString();

var fecha4 = new Date();
document.getElementById("fecha4").textContent = fecha4.toDateString();

var fecha5 = new Date();
document.getElementById("fecha5").textContent = fecha5.toDateString();