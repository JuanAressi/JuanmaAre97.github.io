<?php

// 1° Capturar los datos del cliente (POST)
// 2° Validar los datos de acuerdo a las reglas de negocio de la entidad
    // 2.5° Proceso los datos
// 3° Devolver la informacion en fotmato JSON


// $datos = [
//     'estado' => 'ok',
//     'mensaje' => 'satisfactoriamente',
// ];

// $data = json_encode($_POST);
$data = $_POST;

if ($data['edad'] > 18) {
    echo json_encode($_POST);
}



?>