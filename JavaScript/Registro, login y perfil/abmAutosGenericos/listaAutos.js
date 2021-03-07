window.onload = function() {
    let body = document.querySelector('body');
    
    let titulo = "Lista de Autos";

    let lista = getFromLS('listaAutos');

    let atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const funcionEspecifica = () => {        
        window.location.href = "./index.html";    
    }

    renderizarHTML(body, titulo, lista, atributos, funcionEspecifica);
}