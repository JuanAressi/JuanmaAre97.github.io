<?php

// echo 'hola php';                // == console.log();


// Declaración de variables
$nombre = 'Juan';               // no se usa var, let ni const
$edad = 24;
$esCasado = false;
$habilidades = ['canta', 'baila', 'programa'];

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
        return $this -> nomrbe;
    }

    function getEdad() {
        return $this -> edad;
    }

    function getSexo() {
        return $this -> sexo;
    }
}


$listaPersonas = [];

$listaPersonas[0] = new Persona('Juan', '24', 'Masculino');
$listaPersonas[1] = new Persona('Gabriel', '32', 'Indefinido');
$listaPersonas[2] = new Persona('Roman', '21', 'Otro');
$listaPersonas[3] = new Persona('Sebastian', '37', 'Macho');

// foreach($listaPersonas as $persona) {
//     echo 'Nombre: ' . $persona -> getNombre() .
//     ' - Edad: ' . $persona -> getEdad() .
//     ' - Sexo: ' . $persona -> getSexo() . "\n";
// }



// Buscar frase en un texo
$texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo provident cupiditate repudiandae aut ullam a nobis quos maiores velit libero magnam neque quasi laboriosam, dignissimos, sint nostrum? Culpa cumque repellendus nisi quaerat sapiente doloremque ipsa illum, labore cupiditate delectus voluptatem est obcaecati a assumenda inventore reiciendis numquam nobis? Architecto aspernatur eveniet eum sit cum? Laboriosam possimus dolore nostrum cum illo, quos vitae consequuntur voluptas incidunt cumque nihil perferendis labore? Sed molestiae sint harum, dolor amet incidunt? Odit magnam rerum odio iste accusantium maiores. Sit consequatur ipsam autem, quasi necessitatibus tenetur fuga aut molestias cum voluptatibus? Vitae, illo tempora iste laboriosam vel modi. Ea sequi accusantium aperiam! Nesciunt nemo reprehenderit nisi dignissimos debitis odio recusandae. Incidunt, provident? Temporibus alias mollitia architecto quam animi aliquam soluta! Accusamus ad quod tempora ipsum? Cumque quae, sint tempora pariatur voluptas corporis eum provident est necessitatibus quo debitis libero praesentium ad veniam. Tempora iure amet aliquid minima eaque ipsum in, tempore, beatae modi, iste perspiciatis quod. Repellendus iste ab tempora modi, quasi veniam consequatur placeat similique ducimus eaque voluptas eum suscipit ut. Eum praesentium placeat quae tempora, error corrupti qui quibusdam voluptates impedit dolore dolores adipisci. Dolor debitis consequuntur quaerat commodi dolores impedit accusamus voluptatum veniam molestiae placeat corrupti sunt officia et hic ducimus laudantium, porro expedita facilis doloremque voluptatem, numquam repudiandae assumenda cum fugiat. Hic voluptatibus laudantium repudiandae animi tenetur assumenda quas culpa incidunt excepturi, iste eius, dolorum earum quidem modi nesciunt consectetur fuga! Dignissimos distinctio repellendus odit aspernatur necessitatibus repudiandae incidunt aperiam expedita consectetur fuga cumque earum, itaque porro consequuntur accusantium neque fugit optio molestiae beatae vitae nisi amet! Iusto cupiditate veritatis cum voluptate dolor quibusdam dolores enim praesentium perspiciatis, molestias nulla similique odio, sapiente perferendis atque, illum voluptatum nobis earum consequatur expedita nemo facere saepe? Alias consequatur molestiae nulla laborum dolorum quasi voluptates reprehenderit, porro, earum quisquam cum ipsa necessitatibus reiciendis rerum voluptas eius debitis suscipit perspiciatis eligendi, cumque odit dolores mollitia fugiat. Perferendis corrupti asperiores, at deserunt officia rem atque dolor autem quibusdam quas libero voluptas corporis optio mollitia reprehenderit explicabo esse fugit aperiam odit sequi nam temporibus perspiciatis? Ea, aut culpa at fugit laborum quae non saepe molestias dolore dolor minima consequuntur itaque autem, unde tenetur tempore quis maiores? Similique eos velit sunt, a impedit eaque laboriosam fuga consequatur obcaecati mollitia dolore nemo veritatis officiis. Cupiditate iste assumenda quia cum molestiae aut sint culpa est quis amet non nihil libero autem veritatis, quam nemo fugiat repudiandae maiores saepe perspiciatis omnis deleniti voluptate? Ratione qui obcaecati ducimus necessitatibus, enim repellendus consequuntur aliquam maiores dicta dignissimos recusandae inventore reprehenderit veritatis amet voluptatum esse alias tempore quisquam ea corporis reiciendis ipsa voluptates assumenda. Deleniti sunt quod at omnis quibusdam dolore eos nemo, quisquam voluptatibus, incidunt voluptatem possimus totam dicta placeat nesciunt eveniet iure odio! Corporis eaque molestiae blanditiis facilis sit exercitationem vero rerum itaque. Nostrum eum est officia magnam excepturi iusto distinctio rerum fugiat ratione doloribus, facere id doloremque? Ipsam ab pariatur eos excepturi! Soluta libero voluptas, dolore maiores asperiores dignissimos facilis dolor.';

$word = 'omnis';

// if (strpos($texto, $word) !== false) {
//     echo $word . ' se encuentra en el texto';
// } else {    
//     echo $word . ' no se encuentra en el texto';
// }


$lista = explode(' ', $texto);

print_r($lista);

$lista2 = array_count_values($lista);

print_r($lista2);

?>