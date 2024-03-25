# EJERCICIO CHECKPOINT 7

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

Algunas de las diferencias entre JavaScript y otros lenguajes:

__1.-__ Es un __lenguaje de programación interpretado__ que se ejecuta en el navegador del cliente, lo que lo convierte en un lenguaje fundamental para el desarrollo web.

Un lenguaje interpretado es aquel cuyas instrucciones son ejecutadas directamente por un programa llamado intérprete. En este proceso, el intérprete lee línea por línea el código fuente y lo traduce a instrucciones ejecutables de forma inmediata. Esto significa que no se necesita compilar el código antes de ejecutarlo, lo que facilita el proceso de desarrollo y depuración.

Por otro lado, existen los lenguajes compilados. Son lenguajes cuyo código fuente se traduce por completo a un lenguaje de máquina específico para el hardware de la computadora mediante un programa llamado compilador. Este proceso genera un archivo ejecutable que puede ser ejecutado posteriormente sin necesidad de volver a traducir el código fuente. Los lenguajes compilados tienden a ser más rápidos en la ejecución, pero a menudo requieren más pasos y tiempo de desarrollo debido al proceso de compilación.

__2.-__ Es un __lenguaje multiparadigma__, lo que significa que soporta programación orientada a objetos, programación funcional y programación imperativa.
  
`#### Programación Orientada a Objetos (POO):`

En la programación orientada a objetos, organizamos nuestro código en "objetos", que son como bloques de construcción. Construimos nuestro código utilizando "objetos" como unidades fundamentales. 

Imagina que estás construyendo una casa con bloques de Lego. Cada bloque de Lego es como un objeto en la programación orientada a objetos. Puedes tener bloques de diferentes formas, tamaños y colores, y los ensamblas para construir una estructura más grande y compleja, como una casa. Cada objeto tiene propiedades (cosas que describe) y métodos (acciones que puede realizar). Piensa en los objetos como objetos del mundo real: un coche, una persona o una casa. Cada uno tiene características específicas y puede hacer ciertas cosas.

Por ejemplo, podríamos tener un objeto "Coche" con propiedades como color, marca y modelo, y métodos como "arrancar" o "detenerse". Este enfoque nos permite organizar nuestro código de manera más intuitiva y reutilizable.

Ejemplo en JavaScript:

```javascript
// Definición de una clase Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
// Método que define lo que hace una persona cuando saluda y se presenta
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
// Creación de un objeto persona
const persona1 = new Persona("Juan", 30);

// Llamada a método saludar()
persona1.saludar();
```

`#### Programación Funcional:`

La programación funcional se centra en el uso de funciones como bloques de construcción fundamentales. En este estilo de programación, las funciones son tratadas como valores y pueden pasarse como argumentos a otras funciones o devolverse como resultados de funciones. Las funciones en la programación funcional son "puras", lo que significa que siempre producen el mismo resultado para los mismos datos de entrada y no tienen efectos secundarios.

Por ejemplo, podríamos tener una función "duplicar" que toma un número como entrada y devuelve el doble de ese número. Esta función no cambia ningún estado ni tiene efectos secundarios, simplemente realiza una operación basada en su entrada y devuelve un resultado.

Ejemplo en JavaScript:


```javascript
// Función que suma dos números
function suma(a, b) {
  return a + b;
}

// Función que multiplica dos números
function multiplicar(a, b) {
  return a * b;
}

// Uso de funciones como argumentos
function operacion(a, b, callback) {
  return callback(a, b);
}

// Uso de la función operacion con las funciones suma y multiplicar
console.log(operacion(5, 3, suma)); // Output: 8
console.log(operacion(5, 3, multiplicar)); // Output: 15
```

`#### Programación Imperativa:`

La programación imperativa se basa en la ejecución de instrucciones paso a paso. En este estilo de programación, escribimos código que especifica exactamente cómo se deben realizar las operaciones. Nos centramos en "cómo" se deben hacer las cosas en lugar de en "qué" se debe hacer.

Por ejemplo, podríamos tener un conjunto de instrucciones que describen cómo hacer una taza de té: "calentar el agua", "poner la bolsita de té en la taza", "verter el agua caliente sobre la bolsita de té", etc. Cada instrucción se ejecuta secuencialmente y cambia el estado del programa a medida que avanza.

Ejemplo en JavaScript:

```javascript
// Función que calcula el factorial de un número de forma imperativa
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Uso de la función factorial
console.log(factorial(5)); // Output: 120
```

__3.-__ Es un __lenguaje de tipado dinámico,__ lo que significa que las variables no están asociadas a un tipo de dato específico y pueden cambiar de tipo durante la ejecución del programa. No necesitas declarar explícitamente el tipo de una variable al crearla. El tipo de la variable se determina automáticamente en tiempo de ejecución, según el valor que se le asigna en ese momento.

Un ejemplo simple:

```javascript
// Declaración de una variable 'x' sin especificar su tipo
let x;

// Asignación de un valor entero a la variable 'x'
x = 5;

// La variable 'x' ahora es de tipo número (integer)
console.log(typeof x); // Output: number

// Asignación de un valor string a la variable 'x'
x = "Hola mundo";

// La variable 'x' ahora es de tipo string
console.log(typeof x); // Output: string
```

__4.-__ Es un __lenguaje que sigue el modelo de eventos y callback,__ lo que lo hace especialmente adecuado para la creación de aplicaciones web interactivas y asincrónicas.

`*Modelo de Eventos en JavaScript:*`

JavaScript es un lenguaje de programación basado en eventos. Esto significa que gran parte de la programación en JavaScript implica esperar y responder a eventos que ocurren en el navegador (como hacer clic en un botón, cargar una página, mover el mouse, etc.). En lugar de ejecutar instrucciones de manera secuencial de arriba a abajo, el código JavaScript espera eventos y responde a ellos.

`*Callbacks en JavaScript:*`

Los callbacks son funciones que se pasan como argumentos a otras funciones. Estas funciones se ejecutarán una vez que se complete una operación asíncrona o un evento ocurra. En JavaScript, los callbacks son una forma común de manejar operaciones asíncronas.

Ejemplo: Manejando un evento de clic con un Callback en JavaScript:

Supongamos que tenemos un botón en nuestro HTML con el id "miBoton" y queremos ejecutar una función cuando se haga clic en ese botón.

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de Callbacks en JavaScript</title>
</head>
<body>

<button id="miBoton">Haz clic aquí</button>

<script>
    <!--Definimos una función que será nuestro callback-->
    function manejarClic() {
        console.log("¡El botón fue clickeado!");
    }

    <!--Seleccionamos el botón y agregamos un event listener-->
    document.getElementById("miBoton").addEventListener("click", manejarClic);
</script>

</body>
</html>
```

En este ejemplo:

* Definimos una función llamada manejarClic que lo que hace es imprimir un mensaje en la consola cuando se llama.
* Seleccionamos el botón con el ID "miBoton" usando document.getElementById.
* Utilizamos el método addEventListener para adjuntar un event listener al botón. Este método escucha el evento de clic y llama a la función manejarClic cuando se produce el evento.
  

__5.-__ Dispone de una __amplia gama de bibliotecas y frameworks,__ como Node.js, React.js, Angular.js, entre otros, que permiten extender sus capacidades y facilitar el desarrollo de aplicaciones complejas.

__Bibliotecas en JavaScript:__

Una biblioteca en JavaScript es un conjunto de funciones y métodos predefinidos que se pueden utilizar para realizar tareas específicas de manera más fácil y eficiente. Estas funciones suelen abordar problemas comunes en el desarrollo web, como manipulación del DOM (Document Object Model), animaciones, manejo de eventos, comunicación con servidores, entre otros. Ejemplos populares de bibliotecas JavaScript incluyen jQuery, lodash, moment.js, Axios, entre otros. Estas bibliotecas simplifican el desarrollo al proporcionar una interfaz consistente y funcionalidades probadas que se pueden reutilizar en múltiples proyectos.

__Frameworks en JavaScript:__

Un framework en JavaScript es un conjunto más completo de herramientas, patrones y convenciones para el desarrollo de aplicaciones web. A menudo, los frameworks ofrecen una estructura y arquitectura predefinida para organizar el código, manejar el enrutamiento, gestionar el estado de la aplicación, realizar solicitudes al servidor, entre otras tareas. Los frameworks en JavaScript son especialmente útiles para el desarrollo de aplicaciones web complejas y de gran escala. Ejemplos populares de frameworks JavaScript incluyen AngularJS, React.js, Vue.js, Express.js, entre otros.

__Diferencias:__

La principal diferencia entre una biblioteca y un framework radica en el control que tienen sobre el flujo de la aplicación. Con una biblioteca, el desarrollador tiene más control y decide cuándo y cómo utilizar las funciones proporcionadas por la biblioteca. En cambio, con un framework, el desarrollador debe seguir la estructura y las convenciones establecidas por el framework, lo que puede limitar la flexibilidad pero simplificar el desarrollo al proporcionar una guía clara sobre cómo construir la aplicación.

__6.-__ Es __ampliamente utilizado en el desarrollo de aplicaciones web,__ desde la creación de páginas estáticas hasta aplicaciones web dinámicas y complejas. Es ampliamente utilizado, debido a su versatilidad y su capacidad para interactuar dinámicamente con el contenido de una página web. Aquí hay algunos conceptos y tecnologías relacionadas con el desarrollo web en JavaScript que son ampliamente utilizados:

`*DOM Manipulation (Manipulación del DOM):*` El DOM (Document Object Model) es una representación del contenido de un documento HTML/XML que JavaScript puede manipular dinámicamente para cambiar la estructura, el estilo y el contenido de una página web. La manipulación del DOM es fundamental para crear interacciones dinámicas en una página web, como actualizar elementos en respuesta a eventos del usuario.

`*AJAX (Asynchronous JavaScript and XML):*` AJAX es una técnica que permite enviar y recibir datos desde un servidor en segundo plano, sin interferir con la navegación y la visualización de la página web. Permite actualizar partes específicas de una página sin tener que recargarla por completo. Esto se logra utilizando objetos como XMLHttpRequest o, más recientemente, utilizando las funciones de la API Fetch.

`*Frameworks de Frontend:*` Los frameworks de frontend proporcionan una estructura y un conjunto de herramientas para facilitar el desarrollo de aplicaciones web complejas. Algunos de los frameworks de frontend más populares son:

- React.js: Desarrollado por Facebook, React.js es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.. 
- AngularJS/Angular: Mantenido por Google, Angular es un framework de desarrollo de aplicaciones web y móviles que ofrece una solución completa para la construcción de aplicaciones frontend.
- Vue.js: Vue.js es un framework progresivo de JavaScript para la construcción de interfaces de usuario interactivas. Es conocido por su enfoque incremental y su facilidad de integración con proyectos existentes.

`*Gestión de Estado:*` En aplicaciones web complejas, puede ser necesario gestionar el estado de la aplicación de manera eficiente. Para esto, se utilizan bibliotecas y patrones de gestión de estado como Redux (para React.js), Vuex (para Vue.js), y RxJS (para Angular), entre otros.

`*Herramientas de Desarrollo:*` Existen numerosas herramientas de desarrollo en JavaScript que facilitan la escritura, prueba y depuración de código, así como la optimización del rendimiento de las aplicaciones web. Algunas de estas herramientas incluyen webpack para empaquetar y optimizar recursos, Babel para transpilar código, ESLint para análisis estático de código, y muchas otras.


## ¿Cuáles son algunos tipos de datos JS?

1. **Primitivos:**
   - __Number:__ Representa números, tanto enteros como de punto flotante.
     ```javascript
     let edad = 25;
     let precio = 10.99;
     ```

   - __String:__ Representa cadenas de texto.
     ```javascript
     let nombre = "Juan";
     let mensaje = 'Hola, mundo!';
     ```

   - __Boolean:__ Representa un valor lógico verdadero o falso.
     ```javascript
     let esMayor = true;
     let esMenor = false;
     ```

   - __Null:__ Representa un valor nulo o vacío.
     ```javascript
     let valor = null;
     ```

   - __Undefined:__ Representa un valor no definido.
     ```javascript
     let variableNoDefinida;
     ```

   - __Symbol:__ (Añadido en ECMAScript 6) Representa un identificador único e inmutable.
     ```javascript
     const simbolo = Symbol('descripcion');
     ```

2. __Objetos:__
   - __Object:__ Representa un objeto, que puede contener propiedades y métodos.
     ```javascript
     let persona = { nombre: "Ana", edad: 30 };
     ```

   - __Array:__ Representa una lista ordenada de elementos.
     ```javascript
     let numeros = [1, 2, 3, 4, 5];
     ```

   - __Function:__ Representa una función en JavaScript.
     ```javascript
     function saludar(nombre) {
         console.log("Hola, " + nombre + "!");
     }
     ```

   - __Date:__ Representa una fecha y hora.
     ```javascript
     let fechaActual = new Date();
     ```

   - __RegExp:__ Representa una expresión regular para buscar patrones en cadenas de texto.
     ```javascript
     let expresionRegular = /[a-z]+/g;
     ```

   - __Map:__ Representa una colección de pares clave/valor.
     ```javascript
     let mapa = new Map();
     mapa.set("clave", "valor");
     ```

   - __Set:__ Representa una colección de valores únicos.
     ```javascript
     let conjunto = new Set();
     conjunto.add(1);
     conjunto.add(2);
     ```

## ¿Cuáles son las tres funciones de String en JS?

En JavaScript, las cadenas de texto (strings) son objetos que tienen métodos incorporados que permiten realizar varias operaciones sobre ellas.

Estas serían las tres funciones de la clase String en JavaScript, aunque dispone de muchas más:

1. charAt(index): Esta función devuelve el carácter en la posición especificada dentro de una cadena. El índice se proporciona como parámetro a la función.

```javascript
let cadena = "Hola Mundo";
let caracter = cadena.charAt(0); // Devuelve "H"
```

2. slice(startIndex, endIndex): La función slice() devuelve una copia de una porción de una cadena. Puede tomar uno o dos argumentos: el startIndex indica el índice donde comienza la porción a copiar, y opcionalmente, el endIndex indica el índice donde se detiene la copia (sin incluirlo). Si no se proporciona el endIndex, la porción se copiará hasta el final de la cadena. Una función similar aunque con algunas diferencias sería substring(startIndex, endIndex).

```javascript
let cadena = "Hola Mundo";
let subcadena = cadena.slice(0, 4); // Devuelve "Hola"
```

3. trim(): La función trim() elimina los espacios en blanco (u otros caracteres especificados) desde ambos extremos de una cadena y devuelve la cadena resultante.

```javascript
let cadena = "   Hola Mundo   ";
let cadenaLimpia = cadena.trim(); // Devuelve "Hola Mundo"
```

## ¿Qué es un condicional?

Un condicional en programación es una estructura de control que permite ejecutar cierto bloque de código si se cumple una condición especificada. Si la condición es verdadera, se ejecuta un bloque de código; si es falsa, se puede ejecutar otro bloque de código alternativo o simplemente no se ejecuta nada.

1. Condicionales básicos (if-else):

   - if: Es como preguntar algo. Si la respuesta es "sí", haces algo.
   - else: Es lo que haces si la respuesta a la pregunta del if es "no".

    Por ejemplo:

    ```
        if (condición) {
            // Haz algo si la condición es verdadera
        } else {
            // Haz algo si la condición es falsa
        }

    ```
2. Condicionales múltiples (else if):
   
   - else if: Es como hacer otra pregunta si la primera no es "sí", pero quieres más opciones.
  
    Por ejemplo:

    ```javascript
        if (condición1) {
            // Haz algo si la condición1 es verdadera
        } else if (condición2) {
            // Haz algo si la condición1 es falsa pero la condición2 es verdadera
        } else {
            // Haz algo si ninguna de las condiciones anteriores es verdadera
        }

    ```

3. Condicionales anidados:

   - Puedes tener condicionales dentro de otros condicionales.
  
    Por ejemplo:

   ```javascript
        if (condición1) {
            if (condición2) {
                // Haz algo si ambas condiciones son verdaderas
            } else {
                // Haz algo si la condición1 es verdadera pero la condición2 es falsa
            }
        } else {
            // Haz algo si la condición1 es falsa
        }

    ```
`*Nota importante:*` En la condición es muy importante tener en cuenta el número de signos de =.

```javascript
Con dos == no tendrá en cuenta el tipo de dato si coincide o no entre las dos variables de la condición. Si Resulta que age es string y lo comparas con un number no tendrá en cuenta que age es un string.

    if (age == 25) {
        console.log('Old enough to rent a car');
    }

Con tres === tendrá en cuenta también si tienen el mismo tipo de dato, ejemplo si uno es number y otro es string.

    if (age === ageTwo) {
        console.log('They are equal');
    }

    if (age !== ageTwo) {
        console.log('Not equal');
    }

Con && las dos condiciones deben cumplirse.

var age = 30;

    if (age <= 10) {
        console.log("You can eat from the kid's menu");
        console.log("You are not old enough to drive");
        console.log("You are not old enough to rent a car");
    } else if (age >= 16 && age < 25) {
        console.log("You can not eat from the kid's menu");
        console.log("You are old enough to drive");
        console.log("You are not old enough to rent a car");
    } else if (age >= 25) {
        console.log("You can not eat from the kid's menu");
        console.log("You are old enough to drive");
        console.log("You are old enough to rent a car");
    }

```
## ¿Qué es un operador ternario?

Forma concisa de escribir una instrucción condicional. Tiene la siguiente estructura:

```javascript
condición ? expresiónSiVerdadero : expresiónSiFalso
```

Aquí hay una breve explicación:

- ___Condición:___ Es una expresión que se evalúa como verdadera o falsa.
- ___expresiónSiVerdadero:___ Es el valor que se devuelve si la condición es verdadera.
- ___expresiónSiFalso:___ Es el valor que se devuelve si la condición es falsa.

Por ejemplo:

```javascript
var edad = 18;
var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje); // Imprimirá "Eres mayor de edad"
```

Otro ejemplo:

```javascript
function adminControls(user) {
      return user
        ? user.admin ? "showing admin controls" : "You need to be an admin"
        : "you need to be logged in";
}
 
const userOne = {
  name: "Kristine",
  admin: true
};

adminControls(userOne); //"showing admin controls"
```

- Si el usuario __está logueado__ y cumple que valor en el atributo admin __true__ le saldra un mensaje que dirá `*showing admin controls*` y le mostrará el contenido al que quiere acceder.
- Si el usuario __está logueado__ y tiene como valor __false__ le saldrá un mensaje que dirá `*You need to be an admin*` y __no__ le dejará ver el contenido al que quiere acceder.
- Si __no se ha logueado,__ e intenta entrar en un contenido o hacer una operación como puede ser procesar lo que hay en un carrito de la compra, le saldrá el mensaje `*showing admin controls*` y no le permitirá hacer lo que pretendía.
  

## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

La diferencia entre una declaración de función y una expresión de función en JavaScript radica en cómo se crean y se comportan en el código.

### Declaración de funciones

- Una declaración de función se realiza utilizando la palabra clave `function` seguida por el nombre de la función y un bloque de código entre llaves `{}` que contiene las instrucciones que la función ejecutará cuando sea llamada.
- Las declaraciones de función se pueden llamar antes de que se declaren en el código, ya que son "elevadas" al principio del ámbito en el que se declaran. Esto significa que puedes llamar a la función antes de su declaración en el código.

```javascript
// Declaración de función
function saludar() {
    console.log("Hola mundo");
}

// Llamando a la función
saludar(); // Imprime "Hola mundo"
```

### Expresiones de funciones

- Una expresión de función es una función que se asigna a una variable o se utiliza como parte de una expresión más grande.
- En una expresión de función, el nombre de la función es opcional (función anónima), pero se puede asignar a una variable para su posterior uso.
- Las expresiones de función no se "elevan" al principio del ámbito como las declaraciones de función. Por lo tanto, deben declararse antes de ser llamadas en el código.

```javascript
// Expresión de función
let saludar = function() {
    console.log("Hola mundo");
};

// Llamando a la función
saludar(); // Imprime "Hola mundo"
```

Una expresión también se puede evalúa dentro del cuerpo de una función. Esto podría incluir cualquier expresión que se utilice para asignar valores a variables, realizar operaciones aritméticas, llamar a otras funciones, etc.

Las expresiones dentro de una función tienen acceso a las variables locales de esa función, así como a las variables globales y a las variables en cualquier ámbito externo en el que se haya definido la función.

Un ejemplo para ilustrar esto:

```javascript
function operacionMatematica(a, b) {
    let sumar = function(x, y) {
        return x + y;
    };

    let resultado = sumar(a, b); // Expresión dentro de la función operacionMatematica

    console.log("La suma es: " + resultado);
}

operacionMatematica(10, 5); // Llamada a la función operacionMatematica
```

En este ejemplo:

- Una función llamada operacionMatematica toma dos parámetros a y b.
- Dentro de la función operacionMatematica, definimos una expresión de función sumar utilizando la sintaxis de asignación de función.
- La expresión resultado = sumar(a, b) se evalúa dentro de la función operacionMatematica, utilizando la función sumar que está definida dentro de ella.
- La función sumar realiza una operación de suma y devuelve el resultado.
- Finalmente, imprimimos el resultado de la suma en la consola.
  

### Cuándo usar declaraciones o expresiones de función

La elección entre una expresión de función y una declaración de función depende del contexto y de lo que estés tratando de lograr:

__Declaraciones de Funciones:__ Son útiles cuando necesitas una función que esté disponible en todo el ámbito de su contexto de ejecución. Pueden ser útiles para funciones que son esenciales para el funcionamiento del programa y que pueden ser invocadas desde cualquier lugar.

__Expresiones de Función:__ Son útiles cuando necesitas asignar una función a una variable, o cuando deseas definir una función dentro de un contexto específico, como una función de callback. También son útiles para funciones que pueden no ser necesarias hasta que cierta parte del código se ejecute.

## ¿Qué es la palabra clave "this" en JS?

La palabra clave __`this`__ en JavaScript se refiere al contexto de ejecución actual. En otras palabras, __`this`__ hace referencia al objeto al que pertenece la función en la que se utiliza.

La forma en que __`this`__ se comporta depende de cómo se invoca la función en la que se utiliza. Aquí hay algunos escenarios comunes:

- En el __contexto global:__ Si __`this`__ se utiliza fuera de cualquier función, hace referencia al objeto global en el navegador (por ejemplo, window).

- En el __contexto de un objeto:__ Si __`this`__ se utiliza dentro de un método de un objeto, hace referencia al objeto mismo al que pertenece el método.

- En el __contexto de una función:__ Si __`this`__ se utiliza dentro de una función, su valor depende de cómo se llama a esa función. Si se llama directamente, __`this`__ puede hacer referencia al objeto global o a undefined (en modo estricto), pero si se utiliza en una función dentro de un objeto, puede hacer referencia al objeto que contiene esa función.

Un ejemplo sencillo:

```javascript
class Person {
  constructor(name){
    this.name = name;
  }
}

const yourPerson = new Person('Jordan');
```
Otro ejemplo:

```javascript
var seats = {
  seats: 50,
  seatsSold: 28,
  remainingSeats: function(){
    return (this.seats - this.seatsSold)
    },
  enoughSeats: function(){
    if(this.remainingSeats() > 0){
      return this.remainingSeats();
    }
  }
}


seats.enoughSeats()
```

## Bibliografía

### Diferencias entre JavaScript y otros lenguajes de programación:

- [Mozilla Developer Network (MDN) - Introducción a JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction)

### Tipos de datos en JavaScript:

- [W3Schools - JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

### Funciones de cadena en JavaScript:

- [W3Schools - JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### Condicional en JavaScript:

- [MDN - Introducción a las estructuras de control de flujo en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores)

### Operador ternario en JavaScript:

- [MDN - Operador condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Diferencia entre declaración de función y expresión de función:

- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### La palabra clave "this" en JavaScript:

- [MDN - this](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)

