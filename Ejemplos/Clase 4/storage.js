const usuarioLogueado = {
  nombre: "Ana",
  carrera: "Ingeniería en Sistemas",
  nivel: 2
};

//localStorage.setItem("usuario-logueado", JSON.stringify(usuarioLogueado));

usuarioGuardado = JSON.parse(localStorage.getItem("usuario-logueado"));
document.getElementById("nombreUsuario").innerText = usuarioGuardado.nombre;

// const estudiantes = [
//   { nombre: "Ana", carrera: "Ingeniería en Sistemas", nivel: 2 },
//   { nombre: "Luis", carrera: "Ingeniería Industrial", nivel: 3 },
//   { nombre: "María", carrera: "Ingeniería Civil", nivel: 1 }
// ];

// localStorage.setItem("estudiantes", JSON.stringify(estudiantes));


const estudiantes = JSON.parse(localStorage.getItem("estudiantes"))  

function cargarEstudiantes(){
    const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes"));

    const tablaEstudiantes = document.getElementById("tablaEstudiantes");

    estudiantesGuardados.forEach(estudiante => {

        tablaEstudiantes.appendChild(document.createElement("tr")).innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.carrera}</td>
            <td>${estudiante.nivel}</td>
        `;  
    
    })
}



cargarEstudiantes();