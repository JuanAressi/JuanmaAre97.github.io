document.getElementById('login').addEventListener('click', function(e) {
    // Get List Usuarios from LS
    let listaUsuario = getListUsuarios();

    // Get input info
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('contraseña').value;

    // Validation
    if (validarUsuario(listaUsuario, user, pass)) { 
        alert("Logueo exitoso"); 
        window.location.href = "./perfil.html";
    } else {
        alert("Usuario no encontrdo o contraseña incorrecta");
    }

    e.preventDefault();
});

function validarUsuario(listaUsuario, user, pass) {
    let exist = false;

    listaUsuario.forEach(usuario => {
        if (usuario.user == user && usuario.pass == pass) {
            exist = true;
        }
    });

    return exist;
}