// Tipos de variables en JavaScript
let nombre = "Ana"; // String
const precio = 22; // Number
let activo = true; // Boolean
let telefono; // Undefined
const resultado = null; // Null

console.log("Nombre: " + nombre);
console.log("Precio: " + precio);
console.log("Activo: " + activo);
console.log("Telefono: " + telefono);
console.log("Resultado: " + resultado);

if (telefono === null) {
  console.log("El telefono es nulo");
}

if (telefono === undefined) {
  console.log("El telefono es indefinido");
}

let peso = true;
console.log(typeof peso);

if (typeof peso === "boolean") {
  console.log("El peso es un booleano");
}

//Tipos de operadores
a = 10;
b = "10";

if (a === b) {
  console.log("Los valores son iguales");
} else {
  console.log("Los valores son diferentes");
}

activo = false;
if (!activo) {
  console.log("Usuario no existe");
}

dia = 1;

if (dia == 1) {
  console.log("Es lunes");
} else if (dia == 2) {
  console.log("Es martes");
} else {
  console.log("Es otro día");
}

dia = 5;

switch (dia) {
  case 1:
    console.log("Es lunes");
    break;

  case 2:
    console.log("Es martes");
    break;

  default:
    console.log("Es otro día");
}



let edad = 20;

let res = edad >= 18 ? "Mayor de edad" : "Menor de edad";


// if (edad >= 18) {
//   res ="El usuario es mayor de edad"
// }else {
//   res ="El usuario es menor de edad"
// }



console.log(res);



for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const estudiantes = ["Ana", "Carlos", "María"];

for (const estudiante of estudiantes) {
    console.log(estudiante);
}