// Get List Usuarios from LS
const listaAutos = getListOfElements("listaAutos");

// Select tbody
const tbody = document.querySelector('tbody');

window.onload = function() {    
    // Loop into listaAutos
    for (let i = 0; i < listaAutos.length; i++) {
        tbody.innerHTML += `    
        <tr>
            <th scope="row">${i + 1}</th>
            <td id="user">${listaAutos[i].marca}</td>
            <td>${listaAutos[i].modelo}</td>
            <td>${listaAutos[i].color}</td>
            <td>${listaAutos[i].patente}</td>
        </tr>
        `;
    };
}

tbody.addEventListener('click', function(e) {
    // Get position of selected item
    const position = (+e.target.parentElement.firstElementChild.innerText - 1);

    // Save user in LS
    let autos = listaAutos[position];
    saveInLS("autoToEdit", autos);

    // Save position in LS
    saveInLS("position", (position));

    // Move to perfil.html
    window.location.href = "./editAuto.html";
});

document.getElementById('backToPerfil').addEventListener('click', function() {    
    // Move to perfil.html
    window.location.href = "./perfil.html";
});

document.getElementById('addCar').addEventListener('click', function() {    
    // Move to addAuto.html
    window.location.href = "./addAuto.html";    
});