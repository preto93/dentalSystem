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