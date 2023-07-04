
document.addEventListener('DOMContentLoaded', function () {
  let jwt = localStorage.getItem("jwt");
  const endpoint1 = "https://dentalsystem-production.up.railway.app/api/v1/turno/todos";
  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwt
    }
  };

  fetch(endpoint1, settings)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      bodyTabla.innerHTML = '';
      response.forEach(turno => {
        let fechaString = '';
        if (turno.fechaYHora) {
          fechaString = (turno.fechaYHora + "T").split('T')[0];
        }
        bodyTabla.innerHTML +=
          `<tr>
        <td>${turno.paciente.nombre}</td>
        <td>${turno.odontologo.nombre}</td>
        <td>${fechaString}</td>
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


  const selectP = document.getElementById('selectP');
  const endpoint2 = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/todos';
  const settings2 = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': "Bearer " + jwt
    }
  }

  fetch(endpoint2, settings2)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      selectP.innerHTML = '';
      response.forEach(paciente => {
        selectP.innerHTML +=
          `<option value ="${paciente.id}">${paciente.nombre} ${paciente.apellido}</option>`;
      });

    }).catch(error => {
      alert('Ocurrio un error', error);
    });

  const selectO = document.getElementById('selectO');
  const endpoint3 = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/todos';
  const settings3 = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': "Bearer " + jwt
    }
  }

  fetch(endpoint3, settings3)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      selectO.innerHTML = '';
      response.forEach(odontologo => {
        selectO.innerHTML +=
          `<option value ="${odontologo.id}">${odontologo.nombre} ${odontologo.apellido}</option>`;
      });

    }).catch(error => {
      alert('Ocurrio un error', error);
    });
});

const okturnos = document.getElementById('okturno');

okturnos.addEventListener('click', function (event) {
  let jwt = localStorage.getItem("jwt");
  const pacienteSeleccionado = document.getElementById('selectP').value;
  const odontologoSeleccionado = document.getElementById('selectO').value;
  const fechaSeleccionada = document.getElementById('fecha').value;
  const horaSelecionada = document.getElementById('hora').value;

  const pacienteO = {
    id: pacienteSeleccionado
  };

  const odontologoO = {
    id: odontologoSeleccionado
  };

  const body = {
    paciente: pacienteO,
    odontologo: odontologoO,
    fechaYHora: `${fechaSeleccionada}T${horaSelecionada}`
  };

  console.log(body);

  const url = "https://dentalsystem-production.up.railway.app/api/v1/turno/crear";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + jwt
    },
    body: JSON.stringify(body)
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let fechaString = '';
        if (data.fechaYHora) {
          fechaString = (data.fechaYHora + "T").split('T')[0];
        }
        bodyTabla.innerHTML +=
          `<tr>
        <td>${data.paciente.nombre}</td>
        <td>${data.odontologo.nombre}</td>
        <td>${fechaString}</td>
        <td>
          <button onclick="editarT('${data.id}')" class="editar">
            <i class="fa fa-pen"></i>
          </button>
          <button onclick="eliminarT('${data.id}')" class="eliminar">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`;
      })
    
    .catch(error => {
      console.error(error);
    });
});

function editarT(id) {
  console.log(id);
}

function eliminarT(id) {
  console.log(id);
}