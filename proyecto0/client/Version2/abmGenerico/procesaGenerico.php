<?php
// Iniciar la sesión
session_start();

// Hardcodear un array
$arrayAutos = [
    [
        'marca' => 'Renault', 
        'modelo' => 'Sandero',
        'año' => '2020',
        'color' => 'Azul',
        'patente' => 'ASD123'
    ],
    [
        'marca' => 'Buggati', 
        'modelo' => 'Veyron',
        'año' => '2021',
        'color' => 'Verde',
        'patente' => 'ZYX238'
    ]
];

$_SESSION['arrayGenerico'] = $arrayAutos;

echo json_encode($_SESSION['arrayGenerico']);
?>