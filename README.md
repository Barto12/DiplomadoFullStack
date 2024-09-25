## Conceptos Vistos en el Código HTML y CSS

### HTML
En el código HTML, se han utilizado diversas etiquetas para estructurar una página web. A continuación, se describen algunos de los conceptos clave:

1. **DOCTYPE**: Define el tipo de documento, en este caso `HTML5`.
2. **Etiquetas básicas (`<html>`, `<head>`, `<body>`)**: Estas etiquetas forman la estructura base de un documento HTML. 
   - `<html>`: Es la etiqueta raíz del documento.
   - `<head>`: Contiene metadatos como el conjunto de caracteres, el título de la página, enlaces a archivos CSS, etc.
   - `<body>`: Contiene el contenido visible para el usuario, como texto, imágenes y otros elementos interactivos.
3. **Encabezado (`<header>`)**: Usado para contener elementos como la barra de navegación (`<nav>`) y el logo de la página.
4. **Navegación (`<nav>`)**: Se utiliza para agrupar enlaces que forman parte del menú de navegación.
5. **Sección principal (`<main>`)**: Representa el contenido central de la página. Aquí hemos incluido el logo, el campo de búsqueda y botones.
6. **Pie de página (`<footer>`)**: Contiene enlaces secundarios, como política de privacidad, condiciones, y otros aspectos informativos.
7. **Etiquetas de formulario e interacción**:
   - `<input>`: Para ingresar texto (campo de búsqueda).
   - `<button>`: Para acciones como "Buscar con Google" o "Me siento con suerte".
   - `<a>`: Para crear enlaces de navegación a otras páginas.
8. **Elementos de imagen (`<img>`)**: Inserta imágenes en la página, en este caso, tanto para el logo como para el perfil del usuario.

### CSS
En cuanto a la hoja de estilos CSS, se han utilizado las siguientes propiedades y conceptos:

1. **Reseteo de estilos**: Utilizamos `margin: 0; padding: 0;` en la etiqueta `body` para evitar márgenes y rellenos predeterminados.
2. **Flexbox**: 
   - Se utiliza en las barras de navegación y otros contenedores (por ejemplo, en `.nav-right-section`) para alinear los elementos de forma flexible y dinámica.
   - Propiedades como `justify-content` y `align-items` ayudan a alinear elementos horizontal y verticalmente dentro de sus contenedores.
3. **Diseño Responsivo**: Con la propiedad `width: 100%` en contenedores como el `<header>` y el `<footer>`, se asegura que estos elementos ocupen todo el ancho de la pantalla.
4. **Hover**: Se implementa un efecto hover sobre botones y campos de entrada para mejorar la interacción del usuario, aplicando cambios visuales como sombras y bordes.
5. **Listas sin viñetas**: Mediante `list-style: none`, eliminamos las viñetas predeterminadas de las listas (`<ul>`).
6. **Imágenes de fondo (`background-image`)**: Se han utilizado en elementos como `.menu-icon` y `.search-icon` para incluir iconos sin necesidad de utilizar etiquetas `<img>`.
7. **Estilos de botones**: Los botones se personalizan con propiedades como `border-radius` para bordes redondeados y `box-shadow` para agregar sombras al pasar el cursor.
8. **Grid Layout**: El pie de página se organiza utilizando `grid-template-columns` para dividir su contenido en dos columnas.
9. **Posicionamiento**: En el pie de página, se utiliza `position: absolute; bottom: 0;` para asegurarse de que siempre esté en la parte inferior de la página.

Estos conceptos forman la base del diseño de la página, utilizando HTML para la estructura y CSS para la presentación y el estilo visual. La combinación de estas tecnologías permite crear interfaces atractivas y funcionales.
