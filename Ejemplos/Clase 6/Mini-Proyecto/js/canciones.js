const $ = (id) => document.getElementById(id);
const formAgregarCancion = $("formAgregarCancion");
const bntAgregarCancion = $("btnAgregarCancion");
const seccionAgregarCancion = $("seccion-agregar-cancion");
const listadoCanciones = $("listado-canciones");
const btnCancelarGuardado = $("CancelarGuardado");

let canciones = [];

function cargarCanciones() {
  const datos = localStorage.getItem("canciones");
  canciones = JSON.parse(datos);
}

cargarCanciones();

function mostrarCanciones() {
  const tablaCanciones = $("tablaCanciones");

  if (canciones.length !== 0) {
    canciones.forEach((cancion) => {
      const fila = tablaCanciones.insertRow();
      fila.insertCell().textContent = cancion.titulo;
      fila.insertCell().textContent = cancion.artista;
      fila.insertCell().textContent = cancion.genero;

      const columnaAcciones = fila.insertCell();

      const btnEditar = document.createElement("button");
      btnEditar.type = "button";
      btnEditar.textContent = "Editar";

      btnEditar.addEventListener("click", function () {
        console.log(cancion.titulo);
      });

      const btnEliminar = document.createElement("button");
      btnEliminar.type = "button";
      btnEliminar.textContent = "Eliminar";

      btnEliminar.addEventListener("click", function () {
        console.log(cancion.titulo);
        eliminarCancion(cancion);
      });

      columnaAcciones.append(btnEditar, btnEliminar);
    });
  } else {
    console.log("Todavia no hay canciones, agrega una.");
  }
}

mostrarCanciones();

formAgregarCancion.addEventListener("submit", function (event) {
  event.preventDefault();

  const titulo = $("titulo").value;
  const artista = $("artista").value;
  const genero = $("genero").value;

  canciones.push({
    titulo: titulo,
    artista: artista,
    genero: genero,
  });
  guardarCanciones(canciones);
});

function guardarCanciones(canciones) {
  localStorage.setItem("canciones", JSON.stringify(canciones));
  window.location.reload();
}

function eliminarCancion(cancion) {
  const confirmar = window.confirm("Deseas eliminar la cancion?");

  if (confirmar) {
    const nuevaLista = canciones.filter(function (canciones) {
      return canciones !== cancion;
    });
    guardarCanciones(nuevaLista);
  }
}

bntAgregarCancion.addEventListener("click", function () {
  ocultar();
});

btnCancelarGuardado.addEventListener("click", function () {
  desocultar();
});


function ocultar() {
  seccionAgregarCancion.style.display = "block";
  listadoCanciones.style.display = "none";
}

function desocultar() {
  seccionAgregarCancion.style.display = "none";
  listadoCanciones.style.display = "block";
}

function cargarUsuarioLogueado(){
 const nombreUsuario = $("nombreUsuario");
 const datos = localStorage.getItem("usuario");
 const usuarioLogueado = JSON.parse(datos);

 nombreUsuario.textContent = usuarioLogueado.nombre;

}

cargarUsuarioLogueado()
