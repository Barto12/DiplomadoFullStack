
# Guía Completa para Aprender JavaScript

## Introducción a JavaScript

JavaScript es un lenguaje de programación versátil que se ejecuta en el navegador web y también en el lado del servidor con Node.js. Es uno de los tres lenguajes principales para el desarrollo web, junto con HTML y CSS, y permite añadir dinamismo, interactividad y lógica en las páginas web.

### ¿Qué aprenderás?
- Variables y Tipos de Datos
- Operadores y Expresiones
- Estructuras de Control
- Funciones
- Objetos y Arrays
- Manipulación del DOM
- Eventos
- Programación Orientada a Objetos (POO)
- Manipulación de APIs
- Async y Promesas

---

## 1. Variables y Tipos de Datos

Las variables en JavaScript se pueden declarar usando `var`, `let` o `const`. 
- `let` se utiliza para declarar variables cuyo valor puede cambiar.
- `const` se usa para declarar constantes, cuyo valor no puede ser reasignado.
- `var` es una forma antigua que tiene un comportamiento diferente y ya no se recomienda su uso.

### Declaración de Variables
```javascript
let nombre = "Juan";
const edad = 30;
var esEstudiante = true; // se recomienda evitar var en código moderno (usar let y const para un codigo mas claro y manjeable)
```

### Tipos de Datos
JavaScript tiene varios tipos de datos:
- **String**: Cadena de texto. Ejemplo: `"Hola Mundo"`
- **Number**: Números. Ejemplo: `100`, `3.14`
- **Boolean**: Valor lógico, `true` o `false`
- **Array**: Conjunto de datos. Ejemplo: `[1, 2, 3]`
- **Object**: Entidades que representan un conjunto de propiedades clave-valor. Ejemplo:
```javascript
let persona = {
  nombre: "Carlos",
  edad: 30,
  profesion: "Desarrollador"
};
```
- **Undefined**: Variable que no tiene valor asignado.

#### Ejercicio:
Declara tres variables: `nombre`, `edad`, y `esEstudiante`, y muestra sus valores en consola.
```javascript
let nombre = "Ana";
let edad = 25;
let esEstudiante = false;
console.log(nombre, edad, esEstudiante);
```

### Tipos Especiales de Datos
- **Null**: Representa intencionalmente "ningún valor". Es diferente de `undefined`, que indica que una variable aún no ha sido asignada.
- **Symbol**: Un valor único que nunca es igual a otro símbolo.

#### Ejercicio:
Declara una variable `miSimbolo` utilizando el tipo `Symbol` y muestra su valor en consola.
```javascript
let miSimbolo = Symbol('miSimbolo');
console.log(miSimbolo);
```

---

## 2. Operadores

Los operadores en JavaScript permiten realizar operaciones con valores y variables.

### Operadores Aritméticos
```javascript
let suma = 5 + 3; // 8
let resta = 5 - 3; // 2
let multiplicacion = 5 * 3; // 15
let division = 9 / 3; // 3
let modulo = 9 % 2; // 1 (resto de la división)
```

### Operadores de Comparación
```javascript
let esMayor = 10 > 5; // true
let esIgual = 5 === 5; // true (comparación estricta)
let esDiferente = 5 !== '5'; // true (compara valor y tipo)
```

### Operadores Lógicos
```javascript
let esVerdadero = true && false; // false
let esO = true || false; // true
let negacion = !true; // false
```

#### Ejercicio:
Crea una expresión que use operadores aritméticos, de comparación y lógicos.

```javascript
let resultado = (5 + 10) > 10 && (5 * 2) === 10;
console.log(resultado); // true
```

---

## 3. Estructuras de Control

Las estructuras de control permiten modificar el flujo de ejecución de un programa.

### Condicionales `if/else`
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

### `switch`
```javascript
let color = "rojo";
switch(color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  default:
    console.log("Color no reconocido");
}
```

### Bucles `for`
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `while` y `do/while`
```javascript
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}
```

```javascript
let numero = 0;
do {
  console.log(numero);
  numero++;
} while (numero < 5);
```

#### Ejercicio:
Escribe un bucle `for` que cuente del 1 al 10 y muestre los números en la consola.


---

## 4. Funciones

Las funciones encapsulan bloques de código que se pueden reutilizar.

```javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}
console.log(saludar("Luis"));
```

### Funciones Flecha
Las funciones flecha son una forma más concisa de escribir funciones.

```javascript
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8
```

### Parámetros por Defecto
```javascript
function saludar(nombre = "Usuario") {
  return `Hola, ${nombre}`;
}
console.log(saludar()); // "Hola, Usuario"
```

#### Ejercicio:
Crea una función que multiplique dos números, con un valor por defecto para uno de ellos.

---

## 5. Objetos y Arrays

### Arrays
Los arrays son listas de elementos.

```javascript
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // Manzana
```

### Métodos útiles de Arrays
- `push()`: Añade un elemento al final del array.
- `pop()`: Elimina el último elemento.
- `shift()`: Elimina el primer elemento.
- `unshift()`: Añade un elemento al principio.
- `map()`: Crea un nuevo array con los resultados de la función aplicada a cada elemento.

### Objetos
Los objetos agrupan propiedades y métodos bajo un mismo nombre.

```javascript
let persona = {
  nombre: "Carlos",
  edad: 28,
  profesion: "Ingeniero",
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  }
};
console.log(persona.saludar()); // "Hola, soy Carlos"
```

#### Ejercicio:
Crea un array de 3 objetos `persona` y muestra el nombre del segundo objeto.

---

## 6. Manipulación del DOM

El Document Object Model (DOM) es una representación estructurada del contenido HTML en forma de árbol.

### Selección de Elementos
- `document.getElementById()`: Selecciona un elemento por su ID.
- `document.querySelector()`: Selecciona el primer elemento que coincide con un selector.

```javascript
document.getElementById("titulo").textContent = "Nuevo Título";
```

### Crear y Modificar Elementos
```javascript
let nuevoElemento = document.createElement('p');
nuevoElemento.textContent = "Este es un nuevo párrafo";
document.body.appendChild(nuevoElemento);
```

#### Ejercicio:
Modifica el contenido de un elemento con id `parrafo` en tu HTML.

---

## 7. Eventos

Los eventos son acciones que ocurren en el navegador (como clics, teclas presionadas, etc.).

```javascript
document.getElementById("boton").addEventListener("click", function() {
  alert("¡Botón clickeado!");
});
```

#### Ejercicio:
Crea un botón en tu HTML que muestre un mensaje al ser clickeado.


---

## 8. Programación Orientada a Objetos (POO)

JavaScript soporta la Programación Orientada a Objetos. Las clases son plantillas para crear objetos.

### Declaración de Clases
```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  saludar() {
    return `Hola, mi nombre es ${this.nombre}`;
  }
}

let persona1 = new Persona("Juan", 25);
console.log(persona1.saludar()); // "Hola, mi nombre es Juan"
```

#### Ejercicio:
Crea una clase `Coche` con propiedades `marca` y `modelo`, y un método que devuelva la descripción completa del coche.

---

## 9. Promesas y Async/Await

Las promesas permiten manejar operaciones asíncronas en JavaScript.

```javascript
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Operación completada!"), 2000);
});
promesa.then(result => console.log(result));
```

### Async/Await
```javascript
async function obtenerDatos() {
  let respuesta = await fetch("https://api.ejemplo.com/datos");
  let datos = await respuesta.json();
  console.log(datos);
}
```

#### Ejercicio:
Crea una función `async` que simule la llamada a una API y devuelva un mensaje después de 2 segundos.

---

## Recursos adicionales

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)

---

¡Buena suerte aprendiendo JavaScript!
