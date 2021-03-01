console.log("Hola Juancho");

// Definición de variables
var nombre = "Juan";

var edad = 23;

var maneja = true;

var persona = {
    nombre: "Juan",
    edad: 23, 
    maneja: true
};

var lista = [1, 2, "Tres", persona];

console.log(lista[1]);


// Definición de funciones
function miFuncion(nombre, edad) {
    console.log("Nombre:", nombre, ", Edad:", edad);

    var fechaNacimiento = edad - 1;

    console.log(fechaNacimiento);
}

miFuncion("Juan", 23);

// console.log(fechaNacimiento);


// Principales bloques de decisión 
if (edad > 18 && nombre == "Juan") {
    console.log("Puede manejar");
} else {
    console.log("No puede manejar");
}


// Bloques de repetición
for (let i = 0; i < 10; i++) {
    console.log("Juan", i);
}