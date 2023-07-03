const bodyTabla = document.getElementById("tBody");
const form = document.querySelector("form");
const jwt = localStorage.getItem("jwt");
console.log(jwt.toString());
let pacientes = [];

document.addEventListener('DOMContentLoaded', function (event) {

  const endpoint1 = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/todos';
  const settings = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': "Bearer " + jwt
    }
  }

  fetch(endpoint1, settings)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      bodyTabla.innerHTML = '';
      response.forEach(paciente => {
        let fechaString = '';
        if (paciente.fechaAlta) {
          fechaString = (paciente.fechaAlta + "T").split('T')[0];
        }
        bodyTabla.innerHTML +=
        `<tr>
        <td>${paciente.nombre}</td>
        <td>${paciente.apellido}</td>
        <td>${paciente.dni}</td>
        <td>${fechaString}</td>
        <td>
          <button onclick="editar('${paciente.id}')" class="editar">
            <i class="fa fa-pen"></i>
          </button>
          <button onclick="eliminar('${paciente.id}')" class="eliminar">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`;
      });

    }).catch(error => {
      alert('Ocurrio un error', error);
    });

});




form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const fecha = document.getElementById("fecha").value;
  const calle = document.getElementById("calle").value;
  const numero = document.getElementById("numero").value;
  const localidad = document.getElementById("localidad").value;
  const provincia = document.getElementById("provincia").value;

  const direccion = {
    calle: calle,
    numero: numero,
    localidad: localidad,
    provincia: provincia
  }

  const pacienteBody = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    fechaAlta: fecha,
    direccion: [
      direccion
    ]
  }




  const endpoint2 = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/crear';
  const settings = {
    method: 'POST',
    body: JSON.stringify(pacienteBody),
    headers: {
      authorization: "Bearer " + jwt,
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  fetch(endpoint2, settings)
    .then(response => response.json())
    .then(paciente => {
      console.log(paciente);

      let fechaString = '';
      if (paciente.fechaAlta) {
        fechaString = ((paciente.fechaAlta + "T").split('T'))[0];
      }
      bodyTabla.innerHTML +=
      `<tr>
      <td>${paciente.nombre}</td>
      <td>${paciente.apellido}</td>
      <td>${paciente.dni}</td>
      <td>${fechaString}</td>
      <td>
        <button onclick="editar('${paciente.id}')" class="editar">
          <i class="fa fa-pen"></i>
        </button>
        <button onclick="eliminar('${paciente.id}')" class="eliminar">
          <i class="fa fa-trash"></i>
        </button>
      </td>
    </tr>`;

    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });



});

function guardarEditar(){
  const btnEditar = document.getElementById('editar');

  const idPaciente = document.getElementById('idPaciente').value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const fecha = document.getElementById("fecha").value;
  const calle = document.getElementById("calle").value;
  const numero = document.getElementById("numero").value;
  const localidad = document.getElementById("localidad").value;
  const provincia = document.getElementById("provincia").value;

  const direccion = {
    calle: calle,
    numero: numero,
    localidad: localidad,
    provincia: provincia
  }

  const pacienteBody = {
    id: idPaciente,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    fechaAlta: fecha,
    direccion: [
      direccion
    ]
  }




  const endpoint2 = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/editar';
  const settings = {
    method: 'PUT',
    body: JSON.stringify(pacienteBody),
    headers: {
      authorization: "Bearer " + jwt,
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  fetch(endpoint2, settings)
    .then(response => response.json())
    .then(paciente => {
      console.log(paciente);
      location.reload(true);

    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });


}

function editar(id) {

 document.getElementById('guardar').classList.add('hidden');
 document.getElementById('editar').classList.remove('hidden')

  const endpoint = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/buscar/'+id;
  const settings = {
    method: 'GET',
    headers: {
      authorization: "Bearer " + jwt
    }
  }

  fetch(endpoint, settings)
    .then(response => response.json())
    .then(response => {
    console.log(response)
        document.getElementById('idPaciente').value = response.id;
        document.getElementById("nombre").value = response.nombre;
        document.getElementById("apellido").value = response.apellido;
        document.getElementById("dni").value  = response.dni;
        document.getElementById("fecha").value = response.fechaAlta;
        document.getElementById("calle").value = response.direccion[0].calle;
        document.getElementById("numero").value  = response.direccion[0].numero;
        document.getElementById("localidad").value  = response.direccion[0].localidad;
        document.getElementById("provincia").value  = response.direccion[0].provincia;
        
    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });

  console.log(id);
}

function eliminar(id) {
  const endpoint = 'https://dentalsystem-production.up.railway.app/api/v1/paciente/eliminar/'+id;
  const settings = {
    method: 'DELETE',
    headers: {
      authorization: "Bearer " + jwt
    }
  }

  fetch(endpoint, settings)
    .then(response => {
      console.log(paciente);
      if(response.ok){
        alert('Se elimino un paciente');
        location.reload(true);
      }else {
        alert('No se puede eliminar el paciente');
      }
    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });
}
