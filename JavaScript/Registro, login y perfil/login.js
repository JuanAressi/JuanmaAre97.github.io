document.getElementById('login').addEventListener('click', function(e) {
    // Get user from LS
    let lsUsuario = localStorage.getItem("usuario");
    let usuario = JSON.parse(lsUsuario);

    // Validation
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('contraseña').value;

    if (user == usuario.user) {
        if (pass == usuario.pass) {
            window.location.replace("./perfil.html");
        } else {
            alert("contraseña incorrecta");
        }
    } else {
        alert("usuario incorrecto");
    }

    e.preventDefault();
});