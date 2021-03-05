window.onload = function() {
    let tablaABM = document.getElementById('tablaABM');
    let titulo = "Titulo2";
    let lista = [
        {
            "id": "0",
            "nombre": "juan"
        },
        {
            "id": "1",
            "nombre": "seba"
        },
        {
            "id": "2",
            "nombre": "gabi"
        },
        {
            "id": "3",
            "nombre": "roman"
        }
    ];
    let titulos = ["id", "nombre"];

    const funcionEspecifica = () => {
        // console.log('llamada');
        alert('llamada generica');
    }

    renderizarHTML(tablaABM, titulo, lista, titulos, funcionEspecifica);
}