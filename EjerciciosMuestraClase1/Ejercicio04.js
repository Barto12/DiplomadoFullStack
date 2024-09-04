// El bucle for es el más utilizado para ejecutar un bloque de código un número determinado de veces.

//Ejercicio: Calcular la suma de los primeros n números enteros
// Define el valor de n
let n = 10; // Puedes cambiar este valor a cualquier número entero positivo

// Variable para almacenar la suma
let suma = 0;

// Bucle for para sumar los números desde 1 hasta n
for (let i = 1; i <= n; i++) {
    suma += i; // Sumar el valor de i a la variable suma
}

// Mostrar la suma total en la consola
console.log("La suma de los primeros " + n + " números enteros es: " + suma);

//Explicación del Código:
// Definición de n: En lugar de pedir al usuario que ingrese un número, aquí se define directamente en el código. Puedes cambiar el valor de n a cualquier número entero positivo para calcular la suma correspondiente.
//
// Bucle for: Funciona igual que antes, sumando los números desde 1 hasta n y almacenando el resultado en la variable suma.
//
// Salida con console.log(): El resultado se muestra en la consola del navegador o del entorno donde se esté ejecutando el código.
//
// Ejemplo de uso:
// Si defines n = 10, el programa calculará 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55 y mostrará el mensaje: "La suma de los primeros 10 números enteros es: 55" en la consola.
// Este enfoque es útil cuando ya conoces el valor de n de antemano y no necesitas interactuar con el usuario para obtenerlo.