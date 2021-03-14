<?php
// Manejo de fechas
$dateToday = date('d-m-Y');
$fechaNacimiento = date('03-03-1997');

$edad = calcularEdad($dateToday, $fechaNacimiento);


function calcularEdad($fechaHoy, $nacimiento) {
    $edad = abs(strtotime($fechaHoy) - strtotime($nacimiento));
    printf("\n" . 'Edad: ' . $edad);

    $years = floor($edad / (365*60*60*60));
    printf("\n" . 'Años totales: ' . $years);

    $months = floor($years / 12);
    printf("\n" . 'Meses totales: ' . $months);

    $days = floor($months / 365);
    printf("\n" . 'days totales: ' . $days);


}
?>
