<?php

// echo 'hola php';


// Declaración de variables
// $nombre = 'Juan';               // no se usa var, let ni const
// $edad = 24;
// $esCasado = false;
// $habilidades = ['canta', 'baila', 'programa'];

// function saludar($nom) {
//     echo 'hola ' . $nom;         // Se concatena con el punto
// }

// saludar('Juan');

// Tipos de variables
// Funciones de variables
// Estructuras de decisión
// if ($edad > 18) {
//     echo 'sos mayor';
// } else {
//     echo 'sos menor';
// }

// Estructuras de repetición
// for ($i = 0; $i < 10; $i++) {
//     echo $i;
// }


// Tarea de array
// Declarar Objeto
// class Persona {
//     protected $nombre;
//     protected $edad;
//     protected $sexo;

//     function __construct($nombre = '', $edad = '', $sexo = '') {
//         $this -> nombre = $nombre;
//         $this -> edad = $edad;
//         $this -> sexo = $sexo;
//     }

//     function getNombre() {
//         return $this -> nomrbe;
//     }

//     function getEdad() {
//         return $this -> edad;
//     }

//     function getSexo() {
//         return $this -> sexo;
//     }
// }


// $listaPersonas = [];

// $listaPersonas[0] = new Persona('Juan', '24', 'Masculino');
// $listaPersonas[1] = new Persona('Gabriel', '32', 'Indefinido');
// $listaPersonas[2] = new Persona('Roman', '21', 'Otro');
// $listaPersonas[3] = new Persona('Sebastian', '37', 'Macho');

// foreach($listaPersonas as $persona) {
//     echo 'Nombre: ' . $persona -> getNombre() .
//     ' - Edad: ' . $persona -> getEdad() .
//     ' - Sexo: ' . $persona -> getSexo() . "\n";
// }



// Buscar frase en un texo
$texto = 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.';

$word = 'borrascas';

// Buscar una palabra en el texto
// if (strpos($texto, $word) !== false) {
//     echo $word . ' se encuentra en el texto';
// } else {    
//     echo $word . ' no se encuentra en el texto';
// }

// Transformar el texto en array
$lista = explode(' ', $texto);
echo $lista;

// Añadir items a un array
// array_push($lista, 'Esto es un elemento simple agregado.');

// Contar cuantas veces apareció cada valor
// $cantDeValoresDistintos = array_count_values($lista);

// Transformar el array en texto
// $lista3 = implode(' ', $lista);

// Buscar en un array
$posicion = array_search($word, $lista);

// Eliminar la pocision del array
echo $posicion;
// echo array_splice($lista, $posicion, 1, true);

// echo $lista3;

// print_r($lista3);
?>