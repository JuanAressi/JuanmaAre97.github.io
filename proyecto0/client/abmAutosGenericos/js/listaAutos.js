window.onload = function() {
    let body = document.querySelector('body');
    
    let titulo = "Lista de Autos";

    let lista = getFromLS('listaAutos');

    let atributos = ['#', 'marca', 'modelo', 'año', 'color', 'patente'];

    const goToPerfil = () => {        
        // window.location.href = "../perfil.html";    
        // console.log('sad');
    }

    const addItem = () => {        
        // window.location.href = "../editAuto.html";    
    }

    renderizarHTML(body, titulo, lista, atributos, goToPerfil, addItem);

    document.getElementById('backToPerfil').addEventListener('click', function() {
        window.location.href = "./perfil.html";   
    });

    document.getElementById('addItem').addEventListener('click', function() {
        window.location.href = "./addAuto.html";   
    });
    
    document.querySelector('tbody').addEventListener('click', function(e) {
        // Get position of selected item
        const position = (+e.target.parentElement.firstElementChild.innerText - 1);
        console.log(e.target.parentElement);
    
        // Save user in LS
        let autos = lista[position];
        saveInLS("autoToEdit", autos);
    
        // Save position in LS
        saveInLS("position", (position));
    
        // Move to editAuto.html
        window.location.href = "./editAuto.html";   
    });
}