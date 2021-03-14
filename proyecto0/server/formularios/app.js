let button2 = document.getElementById('Enviar2');

button2.addEventListener('click', function() {
    // fetch('procesaForm.php')
    //     .then((response) => 
    //     {
    //         debugger
    //         response.json();
    //     })
    //     .then((juan) => {
    //         console.log(juan);
    //     });


    const data = new FormData(document.getElementById('formulario'));
    
    fetch('procesa.php', {
        method: 'POST',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw "Error en la llamada Ajax";
        }
    })
    .then(function(data) {
        debugger
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });
});