document.getElementById('login').addEventListener('click', function(e) {
    // Get List Usuarios from LS
    let listaUsuario = getListOfElements("listaUsuario");

    // Get input info
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('contraseña').value;

    // Validation
    let newUser = validarUsuario(listaUsuario, user, pass); 
    if (newUser != undefined) {
        alert("Logueo exitoso"); 

        // Save user in LS
        saveInLS("usuario", newUser)
        
        // Move to perfil.html
        window.location.href = "./perfil.html";
    } else {
        alert("Usuario no encontrdo o contraseña incorrecta");
    }

    e.preventDefault();
});

function validarUsuario(listaUsuario, user, pass) {
    let newUser;

    listaUsuario.forEach(usuario => {
        if (usuario.user == user && usuario.pass == pass) {
            newUser = usuario;
        }
    });

    return newUser;
}