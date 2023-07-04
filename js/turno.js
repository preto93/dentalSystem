
document.addEventListener('DOMContentLoaded', function() {
  let jwt = localStorage.getItem("jwt");
  const endpoint1 = "https://dentalsystem-production.up.railway.app/api/v1/turno/todos";
  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ jwt
    }
  };

  fetch(endpoint1, settings)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      bodyTabla.innerHTML = '';
      response.forEach(turno => {
        let fechaString = '';
   //     if (paciente.fechaAlta) {
      //    fechaString = (paciente.fechaAlta + "T").split('T')[0];
     //   }
        bodyTabla.innerHTML +=
        `<tr>
        <td>${turno.paciente.nombre}</td>
        <td>${turno.odontologo.nombre}</td>
        <td>
          <button onclick="editarT('${turno.id}')" class="editar">
            <i class="fa fa-pen"></i>
          </button>
          <button onclick="eliminarT('${turno.id}')" class="eliminar">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`;
      });

    }).catch(error => {
      alert('Ocurrio un error', error);
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


function editarT(id){
  console.log(id);
}

function eliminarT(id){
  console.log(id);
}