<?php

// Iniciar la sesión
session_start();

$persona = $_POST;

if (isset($_SESSION['arrayPersonas'])) {
    // Guardar nuevo usuario
    array_push($_SESSION['arrayPersonas'], $persona);
} else {
    // Inicializar la sesión
    $_SESSION['arrayPersonas'] = array($persona);
}


echo json_encode($_SESSION['arrayPersonas']);
// mostrarArray();


// Mostrar el array
function mostrarArray() {
    for ($i = 0; $i < sizeof($_SESSION['arrayPersonas']); $i++) {
        print_r("Nombre:" . " " . $_SESSION['arrayPersonas'][$i]['nombre'] .
        ", Edad:" . " " . $_SESSION['arrayPersonas'][$i]['edad'] .
        ", Sexo:" . " " . $_SESSION['arrayPersonas'][$i]['sexo']);
        echo '<br>';
    }
}

// echo '<a href="./index.html">
//         <button>Volver atras</button>
//     </a>';


?>