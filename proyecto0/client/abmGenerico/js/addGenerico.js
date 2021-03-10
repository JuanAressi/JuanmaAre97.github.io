document.getElementById('añadirAuto').addEventListener('click', function(e) {
    const auto = createAuto();

    // Get listaAutos from LS
    let listaAutos = getListOfElements('listaAutos');

    // Update listaAutos
    listaAutos.push(auto);

    // Save listaAutos in LS
    saveInLS('listaAutos', listaAutos);

    alert("Auto añadido con exito");

    // Set input to ''
    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    });

    e.preventDefault();
});


document.getElementById('volverAtras').addEventListener('click', function(e) {
    // Move to listaAutos.html
    window.location.href = "./listaAutos.html";

    e.preventDefault();
});