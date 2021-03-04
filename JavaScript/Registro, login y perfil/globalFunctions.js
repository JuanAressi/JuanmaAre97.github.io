function createUser() {  
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('contraseña').value;
    const mail = document.getElementById('mail').value;
    const tel = document.getElementById('telefono').value;
    const admin = document.getElementById('admin').checked;

    let usuario = {
        user,
        pass,
        mail,
        tel,
        admin 
    }

    return usuario;
}

function usuarioExistente(usuario, listaUsuario) {
    let exist = false;

    listaUsuario.forEach(user => {
        if (user.user == usuario.user) {
            exist = true;
        }
    });

    return exist;
}

function getListUsuarios() {
    let lsListaUsuario = localStorage.getItem("listaUsuario");
    let listaUsuario;

    if (lsListaUsuario) {
        listaUsuario = JSON.parse(lsListaUsuario);
    } else {
        listaUsuario = [];
    }
    
    return listaUsuario;
}

function getFromLS(key) {
    let lsItem = localStorage.getItem(key);
    let item = JSON.parse(lsItem);

    return item;
}

function saveInLS(text, item) {
    localStorage.setItem(text, JSON.stringify(item));
}