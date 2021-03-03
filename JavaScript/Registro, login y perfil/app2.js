function createUser() {  
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('contraseña').value;
    const mail = document.getElementById('mail').value;
    const tel = document.getElementById('telefono').value;

    let usuario = {
        user,
        pass,
        mail,
        tel
    }

    return usuario;
}

function getListUsuarios() {
    let lsListaUsuario = localStorage.getItem("listaUsuario");
    let listaUsuario = JSON.parse(lsListaUsuario);
    
    return listaUsuario;
}

function usuarioExistente(usuario ,listaUsuario) {
    let exist = false;

    listaUsuario.forEach(user => {
        if (user.user == usuario.user) {
            exist = true;
        }
    });

    return exist;
}

function saveListUser(listaUsuario) {
    localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
}