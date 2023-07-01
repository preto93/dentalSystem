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
document.getElementById("fecha4").textContent = fecha4.toDateString();


//>>>>>Acciones dentro de Paciente><<<

document.getElementById("button").addEventListener("click", function(event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();
  
  guardarAccion();

  alert("El paciente ha sido agregado correctamente");
});

// Guardando nuevo odontologo 
function guardarAccion() {

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var fecha = document.getElementById("fecha").value;
  
  const body = {
      name : nombre, 
      surname : apellido, 
      documento : dni,
      alta : fecha
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

}
