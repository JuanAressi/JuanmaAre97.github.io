<?php
require_once('input.php');

$nombre = renderizarInput('nombre', 'text');
$edad = renderizarInput('edad', 'number');
$sexo = renderizarInput('sexo', 'text');


?>


<form>
    <?php
        echo $nombre;
        echo $edad;
        echo $sexo;

    ?>
</form>