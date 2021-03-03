document.getElementById('register').addEventListener('click', function() {
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

    localStorage.setItem("usuario", JSON.stringify(usuario));
});