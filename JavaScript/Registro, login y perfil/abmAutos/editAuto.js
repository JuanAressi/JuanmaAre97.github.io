// Get Position from LS
const position = getFromLS("position");

// Get User from LS
let auto = getFromLS("autoToEdit");

window.onload = function() {
    // Get data
    const marca = document.getElementById('marca');
    const modelo = document.getElementById('modelo');
    const año = document.getElementById('año');
    const color = document.getElementById('color');
    const patente = document.getElementById('patente');

    marca.value = auto.marca;
    modelo.value = auto.modelo;
    año.value = auto.año;
    color.value = auto.color;    
    patente.value = auto.patente;
}    


// Modify
document.getElementById('modify').addEventListener('click', function(e) {
    // Save user
    auto = createAuto();

    // Get listaAutos from LS
    let listaAutos = getFromLS('listaAutos');

    // Validar
    listaAutos[position] = auto;

    // Save listaUsuario in LS
    saveInLS("listaAutos", listaAutos);

    alert("El auto fue modificado exitosamente");

    // Move to perfil.html
    window.location.href = "./listaAutos.html";

    e.preventDefault();
});


// Delete
document.getElementById('delete').addEventListener('click', function(e) {
    // Get listaAutos from LS
    let listaAutos = getFromLS('listaAutos')

    listaAutos.splice(position, 1);

    // Save listaAutos in LS
    saveInLS("listaAutos", listaAutos);

    alert("Auto eliminado");

    // Move to perfil.html
    window.location.href = "./listaAutos.html";
    
    e.preventDefault();
});