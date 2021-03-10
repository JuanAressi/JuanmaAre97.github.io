<?php
require_once('input.php');

$nombre = renderizarInput('nombre', 'text');
$edad = renderizarInput('edad', 'number');
$sexo = renderizarInput('sexo', 'text');
$direccion = renderizarInput('direccion', 'text');


?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <form>
        <?php
            echo $nombre;
            echo $edad;
            echo $sexo;
            echo $direccion;
    
        ?>
    </form>
    
</body>
</html>