function renderizarHTML(body, titulo, atributos, tipoDelAtributo, button1, button2) {
    body.innerHTML += getTemplate(titulo, atributos, tipoDelAtributo, button1, button2);    
}

function getTemplate(titulo, atributos, tipoDelAtributo, button1, button2) {
    let texto = '';

    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <div class="form-group">
                <label for="${atributos[i]}">${atributos[i]}</label>
                <input type="${tipoDelAtributo[i]}" id="${atributos[i]}" class="form-control">
            </div>
        `;
    }


    var info = `
    <div class="container bg-white p-5">
        <h1 class="text-center mb-4">${titulo}</h1>

        <form action="" class="form">
            ${texto}
            
            <button id="button1" class="btn btn-block btn-primary mt-5" onclick="modificar(${button1})">Actualizar</button>
            <button id="button2" class="btn btn-block btn-danger mt-3" onclick="eliminar(${button2})">Eliminar</button>
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