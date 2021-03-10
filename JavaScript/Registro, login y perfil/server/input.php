<?php

function renderizarInput($name, $type) {
    $html = '';

    $html = "<input name='$name' id='$name' type='$type' />";

    return $html;
}




?>