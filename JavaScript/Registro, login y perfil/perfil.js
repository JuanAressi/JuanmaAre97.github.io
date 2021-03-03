window.onload = function() {
    // Get user from LS
    let lsUsuario = localStorage.getItem("usuario");
    let usuario = JSON.parse(lsUsuario);
    
    // Append to HTML
    document.getElementById('usuario').innerHTML = usuario.user;
    document.getElementById('mail').innerHTML = usuario.mail;
    document.getElementById('telefono').innerHTML = usuario.tel;
}