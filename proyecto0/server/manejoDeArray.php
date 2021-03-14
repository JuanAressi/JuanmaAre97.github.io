<?php
// Buscar frase en un texo
$texto = 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.';

$word = 'Quijote';

// Buscar una palabra en el texto
// if (strpos($texto, $word) !== false) {
//     echo $word . ' se encuentra en el texto';
// } else {    
//     echo $word . ' no se encuentra en el texto';
// }


// Transformar el texto en array
$lista = explode(' ', $texto);


// Añadir items a un array
array_push($lista, 'Esto es un elemento simple agregado.');


// Contar cuantas veces apareció cada valor
$cantDeValoresDistintos = array_count_values($lista);
// print_r($cantDeValoresDistintos);


// Buscar en un array
$posicion = array_search($word, $lista);


// Devuelve un elemento del array
$itemDeLaLista = array_slice($lista, $posicion, 1, true);


// Eliminar item
unset($lista[$posicion]);


// Transformar el array en texto
$lista3 = implode(' ', $lista);
// print_r($lista3);






// Manejo con de arrays con objetos
// Declarar Objeto
class Persona {
    protected $nombre;
    protected $edad;
    protected $sexo;

    function __construct($nombre = '', $edad = '', $sexo = '') {
        $this -> nombre = $nombre;
        $this -> edad = $edad;
        $this -> sexo = $sexo;
    }

    function getNombre() {
        return $this -> nombre;
    }

    function getEdad() {
        return $this -> edad;
    }

    function getSexo() {
        return $this -> sexo;
    }

    function setNombre($nombre) {
        $this -> nombre = $nombre;
    }

    function setEdad($edad) {
        $this -> edad = $edad;
    }

    function setSexo($sexo) {
        $this -> sexo = $sexo;
    }
}

$listaPersonas = [];

$listaPersonas[0] = new Persona('Juan', '24', 'Masculino');
$listaPersonas[1] = new Persona('Gabriel', '32', 'Indefinido');
$listaPersonas[2] = new Persona('Roman', '21', 'Otro');
$listaPersonas[3] = new Persona('Sebastian', '37', 'Macho');
$listaPersonas[4] = new Persona('Raul', '15', 'Macho');
$listaPersonas[5] = new Persona('Zeus', '99', 'Macho');


// Buscar persona en listaPersonas
$nombre = 'Sebastian';

for ($i = 0; $i < sizeof($listaPersonas); $i++) {
    if ($listaPersonas[$i] -> getNombre() == $nombre) {
        echo $listaPersonas[$i] -> getNombre() . " se encuentra en la posición " . $i;
        
        break;
    }
}


// Eliminar persona en listaPersonas
$nombre = 'Raul';

for ($i = 0; $i < sizeof($listaPersonas); $i++) {
    if ($listaPersonas[$i] -> getNombre() == $nombre) {
    array_splice($listaPersonas, $i, 1);
        
    break;
    }
}


// Modificar persona en listaPersonas
$nombre = 'Roman';

for ($i = 0; $i < sizeof($listaPersonas); $i++) {
    if ($listaPersonas[$i] -> getNombre() == $nombre) {
        $listaPersonas[$i] -> setNombre('Romancete');
        $listaPersonas[$i] -> setEdad('2222');
        $listaPersonas[$i] -> setSexo('No Binario x3');
        
    break;
    }
}



foreach($listaPersonas as $persona) {
    echo 'Nombre: ' . $persona -> getNombre() .
    ' • Edad: ' . $persona -> getEdad() .
    ' • Sexo: ' . $persona -> getSexo() . "\n";
}
?>