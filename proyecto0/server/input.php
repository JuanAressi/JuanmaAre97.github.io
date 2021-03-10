<?php

function renderizarInput($name, $type) {
    $html = '';
    $titulo = ucfirst($name);
    
    $html = "<label for='$name'>$titulo: </label>";
    $html .= "<input name='$name' id='$name' type='$type' /> <br>";

    return $html;
}




?>