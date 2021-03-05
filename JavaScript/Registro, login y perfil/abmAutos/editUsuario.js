// Get Position from LS
const position = getFromLS("position");

// Get User from LS
let usuario = getFromLS("userToEdit");

window.onload = function() {
    // Get data
    const user = document.getElementById('usuario');
    const pass = document.getElementById('contraseña');
    const mail = document.getElementById('mail');
    const tel = document.getElementById('telefono');
    let admin;

    if (usuario.admin) {
        admin = document.getElementById('admin');
    } else {
        admin = document.getElementById('noAdmin');
    }

    user.value = usuario.user;
    pass.value = usuario.pass;
    mail.value = usuario.mail;
    tel.value = usuario.tel;    
    admin.checked = true;
}    


// Modify
document.getElementById('modify').addEventListener('click', function(e) {
    // Save userToEdit name
    const username = usuario.user;

    // Save user
    usuario = createUser();

    // Get List Usuarios from LS
    let listaUsuario = getListUsuarios();

    // Validar
    if (usuarioExistente(usuario, listaUsuario)) {
        if (usuario.user == username) {
            // Replace user
            listaUsuario[position] = usuario;
        
            // Save listaUsuario in LS
            saveInLS("listaUsuario", listaUsuario);
        
            alert("Usuario modificado exitosamente");
        
            // Move to perfil.html
            window.location.href = "./listaUsuarios.html";
        } else {
            alert("Nombre de usuario no disponible");    
        }
    } else {
        // Replace user
        listaUsuario[position] = usuario;
    
        // Save listaUsuario in LS
        saveInLS("listaUsuario", listaUsuario);
    
        alert("Usuario modificado exitosamente");
    
        // Move to perfil.html
        window.location.href = "./listaUsuarios.html";
    }

    e.preventDefault();
});


// Delete
document.getElementById('delete').addEventListener('click', function(e) {
    // Get List Usuarios from LS
    let listaUsuario = getListUsuarios();

    listaUsuario.splice(position, 1);

    // Save listaUsuario in LS
    saveInLS("listaUsuario", listaUsuario);

    alert("Usuario eliminado");

    // Move to perfil.html
    window.location.href = "./listaUsuarios.html";
    
    e.preventDefault();
});