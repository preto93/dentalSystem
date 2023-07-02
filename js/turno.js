document.addEventListener('DOMContentLoaded', function() {
  let jwt = localStorage.getItem("jwt");
  const url = "https://dentalsystem-production.up.railway.app/api/v1/paciente/todos";
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ jwt
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const pacientes = document.getElementById('listadopacientes');
      pacientes.innerHTML = '';
      data.array.forEach(p => {
        listadopacientes.innerHTML +=` <option value="${p.id}">${p.nombre} ${p.apellido}</option>`
        
      })
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});

const okturnos = document.getElementById('okturno');

okturnos.addEventListener('click', function(event) {
  const pacienteSeleccionado = document.getElementById('listadopacientes').value;
  const odontologoSeleccionado = document.getElementById('listadoOdontologos').value;
  const fechaSeleccionada = document.getElementById('fechasDisponibles').value;

  alert('El turno se ha reservado con éxito');
  guardarAccion(pacienteSeleccionado, odontologoSeleccionado, fechaSeleccionada);
});

function guardarAccion(paciente, odontologo, fecha) {
  console.log(paciente, odontologo);
  
  const pacienteO= {
      id : paciente.id
  };

  const odontologoO = {
    id : odontologo.id
  };

  const body = {
    paciente: pacienteO,
    odontologo: odontologoO,
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
