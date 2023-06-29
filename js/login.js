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
