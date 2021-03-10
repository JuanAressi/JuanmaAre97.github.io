window.onload = function() {
    let body = document.querySelector('body');
    
    const titulo = 'Editor de Autos';

    let item = getFromLS('autoToEdit');

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    // Get list from LS
    let lista = getFromLS('listaAutos');

    const saveItem = (e, lista) => {
        // Get position from LS
        const position = getFromLS('position');

        // Save data from inputs
        item = createAuto();

        // Save item
        lista[position] = item;
    
        // Save listaUsuario in LS
        saveInLS('listaAutos', lista);

        
        alert('Fue modificado exitosamente');
        
        // Move to listaGenerica.html
        window.location.href = './listaGenerica.html';

        e.preventDefault();
    }

    const addItem = (e) => {
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

    renderizarHTML(body, titulo, item, atributos, tipoDelAtributo, saveItem, addItem);
}