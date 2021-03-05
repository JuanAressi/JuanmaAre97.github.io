function renderizarHTML(tablaABM, titulo, lista, arrayTitulos, funcionEspecifica) {
    tablaABM.innerHTML += getTemplate(titulo, arrayTitulos, lista, funcionEspecifica);    
}

function getTemplate(titulo, arrayTitulos, lista, funcionEspecifica) {
    let texto = '';
    let list = '';

    for (let i = 0; i < arrayTitulos.length; i++) {
        texto += `
            <th scope="col">${arrayTitulos[i]}</th>            
        `;
    }
    
    lista.forEach(item => {
        list += `
            <tr>
                <td>${item.id}</td>            
                <td>${item.nombre}</td>            
            </tr>
        `;
    });


    var info = `
    <div class="container bg-white p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <button id="backToPerfil" onclick="clickB1(${funcionEspecifica});">
                <i class="far fa-arrow-left">Botton 1</i>
            </button>

            <h1 class="text-center">${titulo}</h1>

            <button id="addCar" onclick="clickB2()">
                Boton 2
            </button>
        </div>

    <table class="table table-striped">
        <thead>
            <tr>
                ${texto}
            </tr>
        </thead>
        <tbody>
            ${list}
        </tbody>
    </table>
    </div>
`;

return info;
}

function clickB1(f1) {
    f1();
}

function clickB2() {
    alert('alert2');
}