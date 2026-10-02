const estudiantes = [
    {
        nombre: "Ana",
        nota: 90
    },
    {
        nombre: "Carlos",
        nota: 65
    },
    {
        nombre: "María",
        nota: 85
    }
];


estudiantes.forEach((estudiante) => {

    if (estudiante.nota >= 70) {
        console.log(estudiante.nombre + " - Aprobado");
    } else {
        console.log(estudiante.nombre + " - Reprobado");
    }

});