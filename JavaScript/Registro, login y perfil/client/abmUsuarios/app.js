document.getElementById('register').addEventListener('click', function(e) {
    // Create user
    let usuario = createUser();

    // Get List Usuarios from LS
    let listaUsuario = getListOfElements("listaUsuario");

    // Validar
    if (usuarioExistente(usuario, listaUsuario)) {
        alert("Usuario no disponible");
    } else {
        listaUsuario.push(usuario);
        alert("Registrado con exito");  

        // Save in LS
        saveInLS("listaUsuario", listaUsuario);

        // Move to login.html
        window.location.href = "./login.html";
    }

    e.preventDefault();
});