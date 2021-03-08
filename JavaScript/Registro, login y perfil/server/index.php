<?php

// echo 'hola php';                // == console.log();


// Declaración de variables
$nombre = 'Juan';               // no se usa var, let ni const
$edad = 24;
$esCasado = false;
$habilidades = ['canta', 'baila', 'programa'];

function saludar($nom) {
    echo 'hola ' . $nom;         // Se concatena con el punto
}

saludar('Juan');

// Tipos de variables
// Funciones de variables
// Estructuras de decisión
if ($edad > 18) {
    echo 'sos mayor';
} else {
    echo 'sos menor';
}

// Estructuras de repetición
for ($i = 0; $i < 10; $i++) {
    echo $i;
}






?>