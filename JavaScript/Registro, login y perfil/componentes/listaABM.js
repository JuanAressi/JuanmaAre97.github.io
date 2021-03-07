function renderizarHTML(body, titulo, lista, atributos, funcionEspecifica) {
    body.innerHTML += getTemplate(titulo, atributos, lista, funcionEspecifica);    
}

function getTemplate(titulo, atributos, lista, funcionEspecifica) {
    let texto = '';
    let list = '';

    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <th scope="col">${atributos[i]}</th>            
        `;
    }
    
    lista.forEach(item => {
        // let list = '';

        // let tr = document.createElement('tr');
        list += `  
            <tr>
        `;

        for (let i = 0; i < atributos.length; i++) {
            list += `
                <td>${item[atributos[i]]}</td>
            `;
        }

        // tr.innerHTML += list;

        // document.querySelector('tbody').innerHTML += tr;

        list += `
            </tr>
        `;
    });


    var info = `
    <div class="container bg-white p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <button id="backToPerfil" class="btn btn-secondary" onclick="clickB1(${funcionEspecifica});" >
                <i class="far fa-arrow-left"></i>
            </button>

            <h1 class="text-center">${titulo}</h1>

            <button id="addCar" class="btn btn-success" onclick="clickB2()">
                <i class="far fa-plus"></i>
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