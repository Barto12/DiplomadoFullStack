
# Guía para Ejecutar JavaScript en Visual Studio Code

## 1. Instalación de Visual Studio Code
Si no tienes Visual Studio Code instalado, descárgalo desde [Visual Studio Code](https://code.visualstudio.com/) e instálalo en tu sistema operativo.

## 2. Configurar el Entorno para Ejecutar JavaScript

### a. Instalar Node.js
Visual Studio Code usa **Node.js** como entorno de ejecución de JavaScript en el lado del servidor. Descárgalo e instálalo desde [Node.js](https://nodejs.org/).

1. **Verificar la Instalación de Node.js**: Abre la terminal en Visual Studio Code (o en tu sistema) y escribe:

    ```bash
    node --version
    ```

    Esto debería mostrar la versión de Node.js instalada. Por ejemplo: `v16.0.0`.

### b. Instalar la Extensión de JavaScript en Visual Studio Code
Aunque Visual Studio Code tiene soporte nativo para JavaScript, se recomienda instalar la extensión **ESLint** para mejorar la experiencia:

1. Abre Visual Studio Code.
2. Ve a la sección de extensiones (ícono de cuatro cuadros en la barra lateral o usa `Ctrl + Shift + X`).
3. Busca `ESLint` e instálalo.

## 3. Crear y Configurar un Archivo JavaScript

1. Crea una carpeta en tu computadora para el proyecto (por ejemplo, `MiProyecto`).
2. Abre Visual Studio Code y selecciona la carpeta creada (`Archivo > Abrir Carpeta`).
3. Dentro de la carpeta, crea un nuevo archivo con extensión `.js` (por ejemplo, `app.js`).
4. Escribe un pequeño script de ejemplo dentro del archivo:

    ```javascript
    console.log("¡Hola, Mundo!");
    ```

## 4. Ejecutar el Código JavaScript en Visual Studio Code

### a. Usar la Terminal de Visual Studio Code
1. Abre la terminal integrada (`Ver > Terminal` o `Ctrl + ~`).
2. En la terminal, asegúrate de estar en la carpeta donde está tu archivo `.js`.
3. Escribe el siguiente comando para ejecutar el script:

    ```bash
    node app.js
    ```

4. Deberías ver en la terminal el resultado: 

    ```
    ¡Hola, Mundo!
    ```

### b. Usar el Debugger de Visual Studio Code
Si prefieres usar el depurador de Visual Studio Code para ejecutar tu código:

1. Ve a la pestaña de **Ejecutar y Depurar** (ícono de triángulo con un insecto o `Ctrl + Shift + D`).
2. Haz clic en el botón de `Run and Debug`.
3. Si es la primera vez que usas el depurador, selecciona `Node.js` como entorno.
4. Esto creará un archivo `launch.json` en tu carpeta `.vscode`. No es necesario modificarlo para este caso.
5. Presiona `F5` para iniciar la depuración y ver la salida en la consola.

## 5. Solución de Problemas Comunes

- **Error: "Node.js no se reconoce como un comando interno o externo"**: Esto significa que Node.js no está instalado o no se ha agregado a la variable `PATH`. Reinstala Node.js y asegúrate de que se haya agregado a `PATH`.
- **Errores de sintaxis**: Verifica que el código esté correctamente escrito. Los errores comunes incluyen omitir puntos y comas, paréntesis, o llaves `{}`.
- **No se muestra el mensaje en la consola**: Asegúrate de que estás ejecutando el archivo correcto (`node nombreArchivo.js`).

## 6. Recursos Adicionales
- Documentación oficial de [Visual Studio Code para JavaScript](https://code.visualstudio.com/docs/languages/javascript).
- Tutorial de Node.js en [Node.js Official Guide](https://nodejs.org/en/docs/guides/).

¡Listo! Ahora tienes un entorno de JavaScript completamente funcional en Visual Studio Code.
