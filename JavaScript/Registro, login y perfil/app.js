let listUsuario = [
    {
        "user": "JuanmaAre97",
        "pass": "123", 
        "mail": "Juan.Aressi@hotmail.com", 
        "telefono": "3413535267"
    },
    {
        "user": "sarc4",
        "pass": "1234", 
        "mail": "gabrielceschini@hotmail.com", 
        "telefono": "123456789"
    },
    {
        "user": "roman",
        "pass": "12", 
        "mail": "rb@hotmail.com", 
        "telefono": "123"
    }
]

document.getElementById('register').addEventListener('click', function(e) {
    // Create user
    let usuario = createUser();

    // Get List Usuarios from LS
    let listaUsuario = getListUsuarios();

    // Validar
    if (usuarioExistente(usuario, listaUsuario)) {
        alert("Usuario no disponible");
    } else {
        listaUsuario.push(usuario);
    }   

    // Save in LS
    saveListUser(listaUsuario);

    e.preventDefault();
});


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

function usuarioExistente(usuario, listaUsuario) {
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