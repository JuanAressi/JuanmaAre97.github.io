window.onload = function() {
    let body = document.querySelector('body');
    
    let titulo = "Lista de Autos";

    let lista = getFromLS('listaAutos');

    let titulosTabla = ['Marca', 'Modelo', 'Año', 'Color', 'Patente'];

    const funcionEspecifica = () => {
        // console.log('llamada');
        alert('llamada generica');
    }

    renderizarHTML(body, titulo, lista, titulosTabla, funcionEspecifica);
}