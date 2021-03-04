// Get List Usuarios from LS
const listaUsuario = getListUsuarios();

// Select tbody
const tbody = document.querySelector('tbody');

window.onload = function() {    
    // Loop into ListaUsuario
    for (let i = 0; i < listaUsuario.length; i++) {
        let admin;

        if (listaUsuario[i].admin) {
            admin = "Administrador"
        } else {
            admin = "Usuario"
        }

        tbody.innerHTML += `    
        <tr>
            <th scope="row">${i + 1}</th>
            <td id="user">${listaUsuario[i].user}</td>
            <td>${listaUsuario[i].pass}</td>
            <td>${listaUsuario[i].mail}</td>
            <td>${listaUsuario[i].tel}</td>
            <td>${admin}</td>
        </tr>
        `;
    };
}

tbody.addEventListener('click', function(e) {
    // Get position of selected item
    const position = (+e.target.parentElement.firstElementChild.innerText - 1);

    // Save user in LS
    saveInLS("userToEdit", listaUsuario[position])

    // Save position in LS
    saveInLS("position", (position));

    // Move to perfil.html
    window.location.href = "./editUsuario.html";
}) 