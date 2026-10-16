const lista = document.getElementById("lista");

lista.appendChild(document.createElement("li")).textContent = "Redes";  

console.log(lista.children);




const lista2 = document.getElementById("lista2");
const cursos = ["Programación", "Bases de datos", "Redes", "Sistemas operativos"];
 

cursos.forEach(element => {
    lista2.innerHTML += `<li>${element}</li>`;
});


curso = document.getElementById("curso");

curso.value = "Matematicas";


const campoNombre = document.querySelector("#nombre");


const titulo = document.getElementById("titulo");
titulo.textContent = "Hola Grupo";
titulo.style.color = "red";


const boton = document.getElementById("cambiar-estilo");
boton.addEventListener("click", () => {
  const boton2 = document.getElementById("agregar");
  boton2.disabled = true;
});

const selectColor = document.getElementById("color");
const textoColor = document.getElementById("texto-color");

selectColor.addEventListener("change", () => {
  textoColor.style.color = selectColor.value;
})


campoNombre.addEventListener("input", (event) => {

    if(event.target.value.length < 5){
       textoColor.con = "El nombre es muy corto";
    }
});



