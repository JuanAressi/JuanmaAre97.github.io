function renderizarHTML(body, titulo, item, atributos, tipoDelAtributo, saveItem, addItem) {
    body.innerHTML += getTemplate(titulo, item, atributos, tipoDelAtributo, saveItem, addItem);    
}

function getTemplate(titulo, item, atributos, tipoDelAtributo, saveItem, addItem) {
    let texto = '';

    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <div class="form-group">
                <label for="${atributos[i]}">${atributos[i]}</label>
                <input type="${tipoDelAtributo[i]}" id="${atributos[i]}" class="form-control" value="${item[atributos[i]]}">
            </div>
        `;
    }


    var info = `
    <div class="container bg-white p-5">
        <h1 class="text-center mb-4">${titulo}</h1>

        <form action="" class="form">
            ${texto}
            
            <button id="modify" class="btn btn-block btn-primary mt-5" onclick="modificar(${saveItem})">Actualizar</button>
            <button id="delete" class="btn btn-block btn-danger mt-3" onclick="eliminar(${addItem})">Eliminar</button>
        </form>
    </div>
`;

return info;
}

function modificar(f1) {
    f1(event);
}

function eliminar(f2) {
    f2(event);
}