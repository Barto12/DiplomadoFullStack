
//Bucle do...while Similar al bucle while, pero este ejecuta el bloque de código al menos una vez antes de verificar la condición.
// Número secreto que el usuario debe adivinar
const numeroSecreto = 7;

// Simulación de adivinanza del usuario
let adivinanza;

// Bucle do...while
do {
    // Generar un número aleatorio entre 1 y 10
    adivinanza = Math.floor(Math.random() * 10) + 1;
    console.log("El usuario adivinó: " + adivinanza);

    if (adivinanza !== numeroSecreto) {
        console.log("¡Inténtalo de nuevo!");
    }

} while (adivinanza !== numeroSecreto);

console.log("¡Felicidades! Has adivinado el número secreto: " + numeroSecreto);
