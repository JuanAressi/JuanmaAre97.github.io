function renderizarHTML(body, titulo, lista, atributos, goToPerfil, addItem) {
    body.innerHTML += getTemplate(titulo, atributos, lista, goToPerfil, addItem);    
}

function getTemplate(titulo, atributos, lista, goToPerfil, addItem) {
    let texto = '';
    let list = '';

    // Set head of table
    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <th scope="col">${atributos[i]}</th>            
        `;
    }
    
    // Set item of table
    let indice = 1;

    lista.forEach(item => {
        list += `  
            <tr>
        `;

        for (let i = 0; i < atributos.length; i++) {
            if (i == 0) {
                list += `
                    <td class="bold">${indice}</td>
                `;
            } else {
                list += `
                    <td>${item[atributos[i]]}</td>
                `;
            }
        }
        
        list += `
            </tr>
        `;

        indice++;
    });


    var info = `
    <div class="container bg-white p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <button id="backToPerfil" class="btn btn-secondary" onclick="clickB1(${goToPerfil});">
                <i class="far fa-arrow-left"></i>
            </button>

            <h1 class="text-center">${titulo}</h1>

            <button id="addItem" class="btn btn-success" onclick="clickB2(${addItem});">
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