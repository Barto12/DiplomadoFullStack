//Bucle for...in Se usa para iterar sobre las propiedades de un objeto. Itera sobre los nombres de las propiedades.

//Ejercicio bucle for in: Contar las propiedades de un objeto y mostrar sus valores
// Supongamos que tienes un objeto que representa la información de un estudiante y quieres iterar sobre las propiedades del objeto para mostrar cada una de ellas con su respectivo valor.

const estudiante = {
    nombre: "Carlos",
    edad: 22,
    carrera: "Ingenieria en Sistemas",
    universidad: "UNAM",
    promedio: 8.5
};

//Bucle for...in  para iterar sobre las propiedades del objeto
for(let propiedad in estudiante){
    console.log(propiedad + ": " + estudiante[propiedad]);
}

//Explicación del Código:
// Objeto estudiante: Representa un estudiante con varias propiedades como nombre, edad, carrera, universidad, y promedio.
// Bucle for...in: Itera sobre cada propiedad del objeto estudiante. La variable propiedad en cada iteración toma el nombre de la propiedad actual.
// Acceso al valor: Usamos estudiante[propiedad] para acceder al valor correspondiente a la propiedad actual.
// Resultado Esperado:
// Cuando ejecutes este código, el navegador (o consola si estás ejecutando el código en un entorno de desarrollo) mostrará:

//nombre: Carlos
// edad: 22
// carrera: Ingeniería en Sistemas
// universidad: Universidad Nacional
// promedio: 8.5