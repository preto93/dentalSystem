
//>>>>>Acciones dentro de Odontologo><<<

document.getElementById("button").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  guardarAccion();

  alert("El odontologo ha sido agregado correctamente");
});

// Guardando nuevo odontologo 
function guardarAccion() {

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var matricula = document.getElementById("matricula").value;
  
  const body = {
      name : nombre, 
      surname : apellido, 
      nroMatricula : matricula
  }

  console.log(body);

  // Revisar URL 
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
.l0a
}