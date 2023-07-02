
const okturnos = document.getElementById('okturno');

okturnos.addEventListener('click', function(event) {
  const pacienteSeleccionado = document.getElementById('listadopacientes').value;
  const odontologoSeleccionado = document.getElementById('listadoOdontologos').value;
  const fechaSeleccionada = document.getElementById('fechasDisponibles').value;

  alert('El turno se ha reservado con éxito');
  guardarAccion(pacienteSeleccionado, odontologoSeleccionado, fechaSeleccionada);
});

function guardarAccion(paciente, odontologo, fecha) {
  const body = {
    paciente: paciente,
    odontologo: odontologo,
    fecha: fecha
  };

  console.log(body);

  const url = "https://dentalsystem-production.up.railway.app/api/v1/turno/registrar";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
