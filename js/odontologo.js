const bodyTabla = document.getElementById("tBody");
const form = document.querySelector("form");
const jwt = localStorage.getItem("jwt");
console.log(jwt.toString());
let odontologos = [];

document.addEventListener('DOMContentLoaded', function (event) {

  //chequear endpoint
  const endpoint1 = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/todos';
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
      response.forEach(odontologo => {
        bodyTabla.innerHTML +=
        `<tr>
        <td>${odontologo.nombre}</td>
        <td>${odontologo.apellido}</td>
        <td>${odontologo.matricula}</td>
        <td>
          <button onclick="editarO('${odontologo.id}');" class="editar">
            <i class="fa fa-pen"></i>
          </button>
          <button onclick="eliminarO('${odontologo.id}');" class="eliminar">
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
  const matricula = document.getElementById("matricula").value;
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

  const odontologoBody = {
    nombre: nombre,
    apellido: apellido,
    matricula: matricula,
    direccion: [
      direccion
    ]
  }


  const endpoint2 = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/crear';
  const settings = {
    method: 'POST',
    body: JSON.stringify(odontologoBody),
    headers: {
      authorization: "Bearer " + jwt,
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  fetch(endpoint2, settings)
    .then(response => response.json())
    .then(odontologo => {
      console.log(odontologo);
      bodyTabla.innerHTML +=
      `<tr>
      <td>${odontologo.nombre}</td>
      <td>${odontologo.apellido}</td>
      <td>${odontologo.matricula}</td>
      
      <td>
        <button onclick="editarO('${odontologo.id}');" class="editar">
          <i class="fa fa-pen"></i>
        </button>
        <button onclick="eliminarO('${odontologo.id}');" class="eliminar">
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
  const idOdontologo = document.getElementById('idOdontologo'). value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const matricula = document.getElementById("matricula").value;
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

  const odontologoBody = {
    id:  idOdontologo,
    nombre: nombre,
    apellido: apellido,
    matricula: matricula,
    direccion: [
      direccion
    ]
  }


  const endpoint2 = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/editar';
  const settings = {
    method: 'PUT',
    body: JSON.stringify(odontologoBody),
    headers: {
      authorization: "Bearer " + jwt,
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  fetch(endpoint2, settings)
    .then(response => {
      console.log(response);
      location.reload(true);

    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });
}

function editarO(id) {
console.log(id);
  document.getElementById('guardar').classList.add('hidden');
  document.getElementById('editar').classList.remove('hidden')

  const endpoint = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/buscar/'+id;
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
        document.getElementById('idOdontologo').value = response.id;
        document.getElementById("nombre").value = response.nombre;
        document.getElementById("apellido").value = response.apellido;
        document.getElementById("matricula").value  = response.matricula;
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

function eliminarO(id) {
  const endpoint = 'https://dentalsystem-production.up.railway.app/api/v1/odontologo/eliminar/'+id;
  const settings = {
    method: 'DELETE',
    headers: {
      authorization: "Bearer " + jwt
    }
  }

  fetch(endpoint, settings)
    .then(response => {
      console.log(odontologo);
      if(response.ok){
        alert('Se elimino un odontologo');
        location.reload(true);
      }else {
        alert('No se puede eliminar el odontologo');
      }
    }).catch(error => {  // Si falla
      console.log(error);
      alert('Upss tenemos un error :(');
    });
}