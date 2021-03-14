window.onload = function() {
    // Turn on inicioComponenteLista
    // inicioComponenteLista();
}

let divTablaABM = document.getElementById('tablaABM');
let divEditaABM = document.getElementById('editaABM');


// Inicio de los componentes de lista
function inicioComponenteLista() {
    let url = './procesaGenerico.php';
    const lista = getFromServer(url);

}


// Inicio de los componentes de abm
function inicioComponenteEdit(paramTitulo, paramForm) {    
    const titulo = paramTitulo;

    const form = paramForm;

    let item = getFromLS('autoToEdit');

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    const actualizarItem = function() {
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

        // Relocate
        window.location.href = './abmGenerico.html';
    }

    renderizarHTML_Edit(divEditaABM, titulo, atributos, tipoDelAtributo, actualizarItem, form);
}


function initLista(lista) {
    let divTablaABM = document.getElementById('tablaABM');

    const titulo = "Lista de Autos";

    const atributos = ['#', 'marca', 'modelo', 'año', 'color', 'patente'];

    const addItem = function() {
        // Disable TablaABM
        divTablaABM.style.display = 'none';

        // Turn on inicioComponenteEdit
        inicioComponenteEdit('Agregar Auto', './addGenerico.php');

        // Remove buttons
        deleteButtons('add', 'goBack');
    }

    const modifyItem = function(event) {
        // Get position of selected item
        const position = (+event.target.parentElement.firstElementChild.innerText - 1);
    
        // Save autos in LS
        let auto = lista[position];
        saveInLS("autoToEdit", auto);
    
        // Save position in LS
        saveInLS("position", (position));

        // Disable TablaABM
        divTablaABM.style.display = 'none';

        // Turn on inicioComponenteEdit
        inicioComponenteEdit('Editor de Autos', './procesaGenerico.php');
        
        // Init inputs
        initInputs();

        // Remove buttons
        deleteButtons('add', 'goBack');
    }

    renderizarHTML_Lista(divTablaABM, titulo, lista, atributos, addItem, modifyItem);
}


function initInputs() {
    // Get Item
    let item = getFromLS('autoToEdit');

    // Set attributes
    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    // Get list of input loaded
    let inputArray = document.querySelectorAll('input');

    // Load the info
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i].value = item[atributos[i]];
    }
} 


function deleteButtons(paramButton1, paramButton2) {
    let button1 = document.getElementById(paramButton1);
    let button2 = document.getElementById(paramButton2);
    
    button1.parentNode.removeChild(button1);
    button2.parentNode.removeChild(button2);
}