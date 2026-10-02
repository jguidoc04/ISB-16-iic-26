a = 100;
b = 50;
c = a - b;
  
const titulo = document.querySelector("#titulo");
titulo.textContent = "El resultado de la resta es: " + c;


const boton = document.querySelector("#btn-saludo");

boton.addEventListener("click", () => {
    document.querySelector("h3").textContent = "Hola Jovenes";
});