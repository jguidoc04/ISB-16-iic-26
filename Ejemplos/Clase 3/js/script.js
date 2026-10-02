a = 10;
b = 2;
c = a + b;
console.log("El resultado de la suma es: " + c);


function mostrarMensaje() {
    alert("Presionaste el botón");
}

const btn = document.querySelector("#btnSaludar");
btn.addEventListener("click", mostrarMensaje);