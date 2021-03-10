window.onload = function() {
    let body = document.querySelector('body');
    
    const titulo = 'Editor de Autos';

    let item = getFromLS('autoToEdit');

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    const button1 = (e) => {
        // Get position from LS
        const position = getFromLS('position');

        // Save data from inputs
        item = createAuto();

        // Get list from LS
        let lista = getFromLS('listaAutos');

        // Save item
        lista[position] = item;
    
        // Save listaUsuario in LS
        saveInLS('listaAutos', lista);
        
        alert('Fue modificado exitosamente');
        
        // Move to listaGenerica.html
        window.location.href = './listaAutos.html';

        e.preventDefault();
    }

    const button2 = (e) => {
        // Get position from LS
        const position = getFromLS('position');

        // Get list from LS
        let lista = getFromLS('listaAutos');

        lista.splice(position, 1);

        // Save lista in LS
        saveInLS('listaAutos', lista);

        alert('Eliminado');

        // Move to listaGenerica.html
        window.location.href = './listaGenerica.html';
        
        e.preventDefault();
    }

    renderizarHTML(body, titulo, atributos, tipoDelAtributo, button1, button2);

    initInputs(item, atributos);
}

function initInputs(item, atributos) {
    // Get list of input loaded
    let inputArray = document.querySelectorAll('input');

    // Load the info
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i].value = item[atributos[i]];
    }
} 