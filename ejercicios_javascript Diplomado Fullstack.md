
# Ejercicios de JavaScript

## 1. Imprimir "Hola Mundo"
Escribe un programa que imprima en consola "Hola Mundo".

**Ejemplo:**
```javascript
console.log("Hola Mundo");
```

---

## 2. Suma de dos números
Crea una función que reciba dos números como parámetros y retorne la suma de ambos.

**Ejemplo:**
```javascript
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 7)); // Resultado: 10
```

---

## 3. Número par o impar
Escribe una función que verifique si un número es par o impar.

**Ejemplo:**
```javascript
function esPar(numero) {
  if (numero % 2 === 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}

console.log(esPar(5)); // Resultado: Es impar
console.log(esPar(8)); // Resultado: Es par
```

---

## 4. Encontrar el número más grande
Escribe una función que reciba tres números y devuelva el mayor.

**Ejemplo:**
```javascript
function mayorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

console.log(mayorDeTres(4, 9, 1)); // Resultado: 9
```

---

## 5. Contar vocales en una cadena
Crea una función que cuente cuántas vocales tiene una cadena.

**Ejemplo:**
```javascript
function contarVocales(cadena) {
  let contador = 0;
  const vocales = "aeiouAEIOU";
  
  for (let letra of cadena) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  
  return contador;
}

console.log(contarVocales("Hola Mundo")); // Resultado: 4
```

---

## 6. Generar un número aleatorio
Crea una función que retorne un número aleatorio entre 0 y 100.

**Ejemplo:**
```javascript
function numeroAleatorio() {
  return Math.floor(Math.random() * 101);
}

console.log(numeroAleatorio()); // Resultado: Un número entre 0 y 100
```

---

## 7. Revertir una cadena
Escribe una función que reciba una cadena y la devuelva invertida.

**Ejemplo:**
```javascript
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log(invertirCadena("JavaScript")); // Resultado: tpircSavaJ
```

---

## 8. FizzBuzz
Escribe una función que imprima los números del 1 al 100, pero para los múltiplos de 3 imprima "Fizz", para los múltiplos de 5 imprima "Buzz" y para los múltiplos de 3 y 5 imprima "FizzBuzz".

**Ejemplo:**
```javascript
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
```

---

## 9. Palíndromo
Escribe una función que verifique si una palabra o frase es un palíndromo (se lee igual de adelante hacia atrás).

**Ejemplo:**
```javascript
function esPalindromo(cadena) {
  const cadenaLimpia = cadena.replace(/[\W_]/g, "").toLowerCase();
  const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
  return cadenaLimpia === cadenaInvertida;
}

console.log(esPalindromo("A man a plan a canal Panama")); // Resultado: true
```

---

## 10. Factorial de un número
Escribe una función que calcule el factorial de un número.

**Ejemplo:**
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Resultado: 120
```

---

¡Practica estos ejercicios para mejorar tus habilidades con JavaScript!

---

## 11. Convertir grados Celsius a Fahrenheit
Escribe una función que convierta una temperatura dada en grados Celsius a Fahrenheit.

**Ejemplo:**
```javascript
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusAFahrenheit(30)); // Resultado: 86
```

---

## 12. Encontrar el número más pequeño en un array
Escribe una función que reciba un array de números y devuelva el número más pequeño.

**Ejemplo:**
```javascript
function menorEnArray(arr) {
  return Math.min(...arr);
}

console.log(menorEnArray([5, 3, 9, 1, 7])); // Resultado: 1
```

---

## 13. Contar palabras en una cadena
Crea una función que cuente cuántas palabras tiene una cadena.

**Ejemplo:**
```javascript
function contarPalabras(cadena) {
  return cadena.split(" ").length;
}

console.log(contarPalabras("Hola soy un desarrollador de software")); // Resultado: 6
```

---

## 14. Eliminar elementos duplicados de un array
Escribe una función que elimine los elementos duplicados de un array.

**Ejemplo:**
```javascript
function eliminarDuplicados(arr) {
  return [...new Set(arr)];
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // Resultado: [1, 2, 3, 4, 5]
```

---

## 15. Sumar todos los números de un array
Escribe una función que sume todos los números de un array.

**Ejemplo:**
```javascript
function sumarArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumarArray([1, 2, 3, 4, 5])); // Resultado: 15
```

---

## 16. Comprobar si todos los elementos de un array son mayores que un número
Crea una función que verifique si todos los elementos de un array son mayores que un valor dado.

**Ejemplo:**
```javascript
function todosMayoresQue(arr, valor) {
  return arr.every(num => num > valor);
}

console.log(todosMayoresQue([4, 6, 9], 3)); // Resultado: true
console.log(todosMayoresQue([4, 6, 9], 5)); // Resultado: false
```

---

## 17. Crear un array con números del 1 al 100
Escribe una función que cree un array con los números del 1 al 100.

**Ejemplo:**
```javascript
function crearArray() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(crearArray()); // Resultado: [1, 2, 3, ..., 100]
```

---

## 18. Convertir una cadena en título (capitalizar cada palabra)
Crea una función que convierta una cadena de texto en formato título (la primera letra de cada palabra en mayúscula).

**Ejemplo:**
```javascript
function convertirEnTitulo(cadena) {
  return cadena.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}

console.log(convertirEnTitulo("hola mundo javascript")); // Resultado: Hola Mundo Javascript
```

---

## 19. Encontrar el número de ocurrencias de un carácter en una cadena
Escribe una función que reciba una cadena y un carácter, y devuelva cuántas veces aparece ese carácter en la cadena.

**Ejemplo:**
```javascript
function contarCaracter(cadena, caracter) {
  return cadena.split(caracter).length - 1;
}

console.log(contarCaracter("javascript", "a")); // Resultado: 2
```

---

## 20. Ordenar un array de números en forma ascendente
Crea una función que ordene un array de números de menor a mayor.

**Ejemplo:**
```javascript
function ordenarArrayAscendente(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(ordenarArrayAscendente([3, 9, 1, 4, 7])); // Resultado: [1, 3, 4, 7, 9]
```
