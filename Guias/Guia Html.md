# Guía de HTML

## Desarrollo Web — Fundamentos de HTML

---

## 1. Introducción

HTML es el lenguaje utilizado para definir la **estructura y el significado del contenido de una página web**.

HTML significa:

> **HyperText Markup Language**  
> Lenguaje de Marcado de Hipertexto.

HTML **no es un lenguaje de programación**, ya que no posee estructuras propias como ciclos, condiciones o funciones. Es un **lenguaje de marcado**, compuesto por etiquetas que describen el contenido de un documento.

Ejemplo:

```html
<h1>Programación Web</h1>

<p>
  Bienvenidos al curso de desarrollo web.
</p>
```

El navegador interpreta estas etiquetas y construye la página que verá el usuario.

---

# 2. Objetivos de aprendizaje

Al finalizar esta guía, el estudiante debería poder:

- Comprender la función de HTML dentro del desarrollo web.
- Crear la estructura básica de un documento HTML.
- Utilizar correctamente encabezados y párrafos.
- Crear enlaces.
- Insertar imágenes.
- Construir listas.
- Crear tablas.
- Diseñar formularios.
- Utilizar HTML semántico.
- Comprender conceptos básicos de accesibilidad.
- Utilizar atributos HTML.
- Comprender la relación entre HTML, CSS y JavaScript.
- Utilizar las herramientas de desarrollo del navegador.
- Crear una página web estructurada correctamente.

---

# 3. HTML dentro del desarrollo web

Una página web normalmente utiliza tres tecnologías principales:

| Tecnología | Responsabilidad |
|---|---|
| HTML | Estructura y contenido |
| CSS | Diseño y apariencia |
| JavaScript | Comportamiento e interacción |

Una analogía sencilla sería construir una casa:

```text
HTML       → estructura de la casa
CSS        → decoración
JavaScript → mecanismos e interacción
```

Por ejemplo:

```html
<button>Comprar</button>
```

HTML crea el botón.

CSS podría cambiar su apariencia:

```css
button {
    background: blue;
    color: white;
}
```

JavaScript podría reaccionar cuando el usuario presiona el botón:

```javascript
button.addEventListener("click", function () {
    alert("Producto agregado");
});
```

En esta guía nos concentraremos principalmente en **HTML**.

---

# 4. Nuestro primer documento HTML

Crea un archivo llamado:

```text
index.html
```

Agrega el siguiente código:

```html
<!DOCTYPE html>

<html lang="es">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Mi primera página</title>
</head>

<body>

    <h1>Hola mundo</h1>

    <p>
        Esta es mi primera página web.
    </p>

</body>

</html>
```

---

# 5. Anatomía de un documento HTML

## `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

Indica al navegador que estamos utilizando un documento HTML moderno.

## `<html>`

```html
<html lang="es">
```

Representa la raíz del documento. El atributo `lang="es"` indica que el contenido está escrito en español.

Esto es importante para:

- accesibilidad;
- lectores de pantalla;
- buscadores;
- traducción automática.

## `<head>`

```html
<head>
</head>
```

Contiene información acerca del documento, por ejemplo:

- título;
- metadatos;
- archivos CSS;
- iconos;
- información para buscadores.

## `<meta charset="UTF-8">`

```html
<meta charset="UTF-8">
```

Define la codificación de caracteres del documento.

Permite utilizar correctamente caracteres como:

```text
á
é
í
ó
ú
ñ
¿
¡
```

## Viewport

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Ayuda a que la página se adapte correctamente a dispositivos móviles.

## `<title>`

```html
<title>Mi primera página</title>
```

Define el título que aparecerá en la pestaña del navegador.

## `<body>`

```html
<body>
</body>
```

Contiene prácticamente todo el contenido visible de la página.

---

# Ejercicio 1 — Primera página

Crea una página llamada `index.html`.

Debe contener:

1. Un título para la pestaña del navegador.
2. Un encabezado principal.
3. Tu nombre.
4. Tu carrera universitaria.
5. Una descripción corta sobre por qué estás estudiando desarrollo web.

Ejemplo esperado:

```text
Programación Web

Nombre: Ana Rodríguez

Carrera: Ingeniería en Sistemas

Me interesa aprender desarrollo web porque...
```

---

# 6. Etiquetas HTML

HTML utiliza **etiquetas**.

Ejemplo:

```html
<p>Hola mundo</p>
```

Podemos dividirlo en tres partes:

```text
<p>            → etiqueta de apertura
Hola mundo     → contenido
</p>           → etiqueta de cierre
```

Otro ejemplo:

```html
<h1>Universidad</h1>
```

---

# 7. Elementos HTML y anidamiento

Un elemento completo puede contener:

```html
<p>Este es un párrafo.</p>
```

Algunas etiquetas pueden contener otras etiquetas:

```html
<p>
    Estoy aprendiendo <strong>HTML</strong>.
</p>
```

A esto se le llama **anidamiento**.

---

# 8. Encabezados

HTML posee seis niveles de encabezados:

```html
<h1>Título principal</h1>
<h2>Sección</h2>
<h3>Subsección</h3>
<h4>Tema</h4>
<h5>Subtema</h5>
<h6>Detalle</h6>
```

Los encabezados representan **jerarquía del contenido**, no simplemente tamaño visual.

Ejemplo:

```html
<h1>Curso de Programación Web</h1>

<h2>HTML</h2>
<h3>Etiquetas</h3>
<h3>Atributos</h3>

<h2>CSS</h2>
<h3>Selectores</h3>
<h3>Flexbox</h3>
```

---

# Ejercicio 2 — Jerarquía

Representa utilizando encabezados HTML la siguiente estructura:

```text
Desarrollo Web
    Frontend
        HTML
        CSS
        JavaScript
    Backend
        Node.js
        PHP
        Python
```

---

# 9. Párrafos

Los párrafos se crean utilizando:

```html
<p>
    Este es un párrafo.
</p>
```

Ejemplo:

```html
<h1>HTML</h1>

<p>
    HTML permite definir la estructura de una página web.
</p>

<p>
    Los navegadores interpretan HTML y construyen
    una representación visual del documento.
</p>
```

---

# 10. Salto de línea

Podemos utilizar:

```html
<br>
```

Ejemplo:

```html
<p>
    Universidad Nacional<br>
    Escuela de Informática<br>
    Programación Web
</p>
```

No debería utilizarse `<br>` para crear espacios visuales entre elementos. El espaciado visual debe manejarse utilizando **CSS**.

---

# 11. Línea horizontal

La etiqueta:

```html
<hr>
```

representa una separación temática.

---

# 12. Texto con importancia semántica

## `strong`

```html
<strong>Importante</strong>
```

## `em`

```html
<em>Texto enfatizado</em>
```

Ejemplo:

```html
<p>
    La fecha límite es el
    <strong>viernes 20 de octubre</strong>.
</p>

<p>
    HTML es un lenguaje de
    <em>marcado</em>.
</p>
```

---

# 13. Negrita y cursiva

También existen:

```html
<b>Texto</b>
<i>Texto</i>
```

Sin embargo, `<strong>` y `<em>` aportan significado semántico adicional.

---

# 14. Atributos HTML

Los atributos proporcionan información adicional sobre un elemento.

```html
<a href="https://example.com">
    Visitar sitio
</a>
```

La estructura general es:

```html
<etiqueta atributo="valor">
```

Ejemplo:

```html
<img
    src="foto.jpg"
    alt="Estudiantes trabajando en computadoras"
>
```

---

# 15. Enlaces

Los enlaces se crean con:

```html
<a href="https://www.google.com">
    Ir a Google
</a>
```

## Abrir en una nueva pestaña

```html
<a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Google
</a>
```

## Enlace hacia otra página

```html
<a href="contacto.html">
    Contacto
</a>
```

## Enlace a una sección de la misma página

```html
<a href="#contacto">
    Ir a contacto
</a>

<section id="contacto">
    <h2>Contacto</h2>
</section>
```

---

# Ejercicio 3 — Navegación

Crea un menú utilizando enlaces:

```text
Inicio
Acerca de
Cursos
Contacto
```

Cada enlace debe dirigir a una sección de la misma página.

---

# 16. Imágenes

Las imágenes se agregan utilizando:

```html
<img
    src="universidad.jpg"
    alt="Edificio principal de la universidad"
>
```

Los atributos principales son:

```text
src
alt
```

También podemos definir un ancho:

```html
<img
    src="foto.jpg"
    alt="Laboratorio de computadoras"
    width="500"
>
```

---

# 17. Rutas relativas

Estructura:

```text
proyecto/
│
├── index.html
│
├── paginas/
│   └── contacto.html
│
└── imagenes/
    └── logo.png
```

Desde `index.html`:

```html
<img
    src="imagenes/logo.png"
    alt="Logo del sitio"
>
```

Desde `contacto.html`:

```html
<img
    src="../imagenes/logo.png"
    alt="Logo del sitio"
>
```

`..` significa subir una carpeta.

---

# Ejercicio 4 — Perfil personal

Crea una página que incluya:

- Nombre.
- Fotografía o avatar.
- Descripción.
- Universidad.
- Carrera.
- Tres intereses.
- Enlace hacia tu GitHub, LinkedIn o sitio favorito.

---

# 18. Listas

## Lista desordenada

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

## Lista ordenada

```html
<ol>
    <li>Abrir Visual Studio Code</li>
    <li>Crear index.html</li>
    <li>Escribir HTML</li>
    <li>Abrir el archivo en el navegador</li>
</ol>
```

## Listas anidadas

```html
<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>
        Backend
        <ul>
            <li>Node.js</li>
            <li>PHP</li>
        </ul>
    </li>
</ul>
```

---

# Ejercicio 5 — Plan de estudios

Representa con listas una estructura similar a:

```text
Primer año
    Programación I
    Matemática I
    Introducción a la Computación

Segundo año
    Programación II
    Bases de Datos
    Desarrollo Web
```

---

# 19. Contenedores

Una etiqueta tradicional para agrupar contenido es:

```html
<div>
```

Ejemplo:

```html
<div>
    <h2>Curso HTML</h2>
    <p>Introducción al desarrollo web.</p>
</div>
```

Cuando existe una etiqueta semántica adecuada, generalmente es preferible utilizarla.

---

# 20. HTML semántico

HTML ofrece elementos que describen el significado del contenido:

```text
header
nav
main
section
article
aside
footer
```

Ejemplo:

```html
<body>

    <header>
        <h1>Programación Web</h1>

        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h2>Bienvenidos</h2>
            <p>Curso universitario de desarrollo web.</p>
        </section>
    </main>

    <footer>
        <p>Universidad XYZ</p>
    </footer>

</body>
```

---

# 21. Elementos semánticos principales

## `<header>`

Contenido introductorio:

```html
<header>
    <h1>Mi Universidad</h1>
</header>
```

## `<nav>`

Navegación principal:

```html
<nav>
    <a href="/">Inicio</a>
    <a href="/cursos.html">Cursos</a>
</nav>
```

## `<main>`

Contenido principal:

```html
<main>
    <h1>Noticias</h1>
</main>
```

## `<section>`

Sección temática:

```html
<section>
    <h2>Nuestros cursos</h2>
    <p>Conoce nuestros cursos disponibles.</p>
</section>
```

## `<article>`

Contenido independiente:

```html
<article>
    <h2>Introducción a HTML</h2>
    <p>HTML define la estructura del contenido web.</p>
</article>
```

## `<aside>`

Contenido complementario:

```html
<aside>
    <h2>Lecturas recomendadas</h2>
</aside>
```

## `<footer>`

Información final:

```html
<footer>
    <p>© Universidad XYZ</p>
</footer>
```

---

# Ejercicio 6 — Página semántica

Convierte la siguiente estructura en HTML semántico:

```text
Página universitaria

Encabezado
    Logo
    Nombre de universidad

Navegación
    Inicio
    Carreras
    Admisión
    Contacto

Contenido principal
    Bienvenida
    Carreras disponibles
    Noticias

Información adicional

Pie de página
    Dirección
    Teléfono
    Copyright
```

No utilices `<div>` a menos que sea necesario.

---

# 22. Tablas

Las tablas se utilizan para representar **datos tabulares**.

```html
<table>

    <thead>
        <tr>
            <th>Curso</th>
            <th>Profesor</th>
            <th>Créditos</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Programación Web</td>
            <td>Ana Gómez</td>
            <td>4</td>
        </tr>

        <tr>
            <td>Bases de Datos</td>
            <td>Carlos Pérez</td>
            <td>4</td>
        </tr>
    </tbody>

</table>
```

Elementos principales:

- `<table>`: tabla.
- `<tr>`: fila.
- `<th>`: celda de encabezado.
- `<td>`: celda de datos.
- `<thead>`: encabezado de la tabla.
- `<tbody>`: cuerpo de la tabla.
- `<tfoot>`: pie de la tabla.

---

# Ejercicio 7 — Horario universitario

Construye una tabla con:

```text
Curso
Profesor
Día
Hora
Aula
```

Agrega al menos cinco cursos.

---

# 23. Formularios

Los formularios permiten recopilar información del usuario.

```html
<form>

    <label for="nombre">
        Nombre:
    </label>

    <input
        type="text"
        id="nombre"
        name="nombre"
    >

    <button type="submit">
        Enviar
    </button>

</form>
```

---

# 24. `label`

`label` describe un campo.

```html
<label for="correo">
    Correo electrónico
</label>

<input
    type="email"
    id="correo"
    name="correo"
>
```

La asociación mejora accesibilidad y usabilidad.

---

# 25. Tipos de `input`

```html
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="date">
<input type="checkbox">
<input type="radio">
<input type="file">
```

---

# 26. Placeholder y required

```html
<label for="email">
    Correo electrónico
</label>

<input
    type="email"
    id="email"
    name="email"
    placeholder="usuario@universidad.edu"
    required
>
```

El `placeholder` **no reemplaza al `label`**.

---

# 27. Textarea

```html
<label for="mensaje">
    Mensaje
</label>

<textarea
    id="mensaje"
    name="mensaje"
    rows="6"
></textarea>
```

---

# 28. Select

```html
<label for="carrera">
    Carrera
</label>

<select id="carrera" name="carrera">

    <option value="">
        Seleccione una carrera
    </option>

    <option value="sistemas">
        Ingeniería en Sistemas
    </option>

    <option value="software">
        Ingeniería de Software
    </option>

    <option value="informatica">
        Informática
    </option>

</select>
```

---

# 29. Radio buttons

```html
<p>Modalidad:</p>

<label>
    <input
        type="radio"
        name="modalidad"
        value="presencial"
    >
    Presencial
</label>

<label>
    <input
        type="radio"
        name="modalidad"
        value="virtual"
    >
    Virtual
</label>
```

---

# 30. Checkbox

```html
<label>
    <input
        type="checkbox"
        name="tecnologias"
        value="html"
    >
    HTML
</label>

<label>
    <input
        type="checkbox"
        name="tecnologias"
        value="css"
    >
    CSS
</label>

<label>
    <input
        type="checkbox"
        name="tecnologias"
        value="javascript"
    >
    JavaScript
</label>
```

---

# 31. Botones

```html
<button type="submit">
    Registrarse
</button>

<button type="button">
    Mostrar información
</button>

<button type="reset">
    Limpiar
</button>
```

---

# Ejercicio 8 — Formulario de matrícula

Crea un formulario que solicite:

- Nombre.
- Apellidos.
- Correo electrónico.
- Contraseña.
- Fecha de nacimiento.
- Carrera.
- Modalidad:
  - presencial;
  - virtual.
- Tecnologías de interés:
  - HTML;
  - CSS;
  - JavaScript;
  - Python.
- Comentarios.
- Checkbox para aceptar términos.
- Botón para registrarse.

---

# 32. Agrupación de formularios

Podemos utilizar:

```html
<fieldset>

    <legend>
        Información personal
    </legend>

    <label for="nombre">
        Nombre
    </label>

    <input
        type="text"
        id="nombre"
        name="nombre"
    >

</fieldset>
```

---

# 33. Audio

```html
<audio controls>

    <source
        src="audio.mp3"
        type="audio/mpeg"
    >

    Tu navegador no soporta audio.

</audio>
```

---

# 34. Video

```html
<video controls width="640">

    <source
        src="video.mp4"
        type="video/mp4"
    >

    Tu navegador no soporta video.

</video>
```

---

# 35. Figure y Figcaption

```html
<figure>

    <img
        src="laboratorio.jpg"
        alt="Laboratorio de desarrollo web"
    >

    <figcaption>
        Laboratorio de programación de la universidad.
    </figcaption>

</figure>
```

---

# 36. Comentarios HTML

```html
<!-- Esto es un comentario -->
```

Ejemplo:

```html
<!-- Navegación principal -->

<nav>
    <a href="/">Inicio</a>
</nav>
```

---

# 37. IDs y clases

## ID

```html
<section id="contacto">
</section>
```

Un `id` debería ser único.

## Clase

```html
<article class="producto">
    <h2>Laptop</h2>
</article>

<article class="producto">
    <h2>Monitor</h2>
</article>
```

Generalmente:

- `id`: identifica un elemento particular.
- `class`: agrupa elementos relacionados.

---

# 38. Entidades HTML

```html
&lt;
&gt;
&amp;
```

Representan:

```text
<
>
&
```

Ejemplo:

```html
<p>
    Para crear un párrafo utilizamos
    &lt;p&gt;.
</p>
```

---

# 39. Accesibilidad web

La accesibilidad busca que las páginas puedan ser utilizadas por el mayor número posible de personas.

HTML correctamente utilizado ya proporciona muchas herramientas de accesibilidad.

## Texto alternativo

```html
<img
    src="grafico-matricula.png"
    alt="Gráfico que muestra un aumento de matrícula entre 2022 y 2025"
>
```

Imagen decorativa:

```html
<img
    src="decoracion.svg"
    alt=""
>
```

## Labels

Evita:

```html
<input type="email" placeholder="Correo">
```

Prefiere:

```html
<label for="correo">
    Correo
</label>

<input
    type="email"
    id="correo"
    name="correo"
>
```

## Botones descriptivos

Evita:

```html
<button>Click aquí</button>
```

Prefiere:

```html
<button>Guardar cambios</button>
```

## Enlaces descriptivos

Evita:

```html
<a href="curso.html">Click aquí</a>
```

Prefiere:

```html
<a href="curso.html">
    Ver información del curso de HTML
</a>
```

---

# Ejercicio 9 — Detectar problemas

Analiza este código:

```html
<html>

<head>
    <title>Universidad</title>
</head>

<body>

<div>

<div>
<a href="#">Click aquí</a>
</div>

<div>
<img src="universidad.jpg">
</div>

<div>
<input type="text" placeholder="Nombre">
</div>

</div>

</body>

</html>
```

Identifica al menos **cinco problemas o mejoras posibles**.

Considera:

- idioma;
- metadatos;
- semántica;
- accesibilidad;
- formularios;
- enlaces;
- imágenes.

---

# 40. Código HTML bien formateado

Evita:

```html
<body><header><h1>Universidad</h1><nav><a href="#">Inicio</a><a href="#">Cursos</a></nav></header></body>
```

Prefiere:

```html
<body>

    <header>

        <h1>Universidad</h1>

        <nav>

            <a href="#">
                Inicio
            </a>

            <a href="#">
                Cursos
            </a>

        </nav>

    </header>

</body>
```

---

# 41. Errores comunes

## Etiquetas sin cerrar

Incorrecto:

```html
<p>Hola
```

Correcto:

```html
<p>Hola</p>
```

## Anidamiento incorrecto

Incorrecto:

```html
<p>
    <strong>
        Hola
    </p>
</strong>
```

Correcto:

```html
<p>
    <strong>
        Hola
    </strong>
</p>
```

## Usar `<br>` para diseño

El diseño debería manejarse con CSS.

## Usar tablas para crear layouts

Las tablas deben utilizarse para **datos tabulares**.

## Usar `div` para todo

Cuando sea posible, utiliza elementos semánticos.

## Omitir `alt`

Si la imagen aporta contenido, agrega un texto alternativo adecuado.

---

# 42. Herramientas de desarrollo

Los navegadores modernos incluyen herramientas para inspeccionar páginas web.

Atajos comunes:

```text
F12
Ctrl + Shift + I
Cmd + Option + I
```

Desde las herramientas de desarrollo puedes:

- inspeccionar HTML;
- modificar HTML temporalmente;
- inspeccionar CSS;
- observar errores;
- ejecutar JavaScript;
- analizar solicitudes de red;
- simular dispositivos móviles.

---

# Ejercicio 10 — Inspect Element

1. Abre una página web.
2. Abre las herramientas de desarrollo.
3. Inspecciona el título principal.
4. Modifica temporalmente su texto.
5. Cambia algún elemento HTML.
6. Recarga la página.

Responde:

1. ¿El cambio permaneció?
2. ¿Por qué?
3. ¿Qué diferencia existe entre modificar el DOM desde DevTools y modificar el archivo HTML original?

---

# 43. El DOM

Cuando el navegador lee HTML, construye una representación en memoria llamada:

> **Document Object Model (DOM)**

Ejemplo:

```html
<body>

    <h1>Universidad</h1>

    <p>
        Programación Web
    </p>

</body>
```

Representación conceptual:

```text
document
│
└── html
    │
    └── body
        │
        ├── h1
        │   └── "Universidad"
        │
        └── p
            └── "Programación Web"
```

JavaScript puede interactuar con este DOM:

```javascript
document.querySelector("h1");
```

---

# 44. Relación padre, hijo y hermanos

```html
<section>

    <h2>Cursos</h2>

    <p>
        Programación Web
    </p>

</section>
```

Representación:

```text
section
├── h2
└── p
```

`section` es padre de `h2` y `p`.  
`h2` y `p` son hermanos.

---

# 45. Metadatos adicionales

```html
<meta
    name="description"
    content="Curso universitario de programación web"
>
```

Ejemplo:

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Curso universitario de desarrollo web"
    >

    <title>
        Programación Web
    </title>

</head>
```

---

# 46. Favicon

```html
<link
    rel="icon"
    href="favicon.ico"
>
```

---

# 47. Estructura recomendada de un proyecto pequeño

```text
mi-sitio/
│
├── index.html
├── acerca.html
├── contacto.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── imagenes/
    ├── logo.png
    └── portada.jpg
```

Separación de responsabilidades:

```text
HTML       → contenido
CSS        → estilos
JavaScript → comportamiento
imagenes   → recursos visuales
```

---

# 48. Ejemplo completo

```html
<!DOCTYPE html>

<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Página del curso de Programación Web"
    >

    <title>
        Programación Web
    </title>

</head>

<body>

    <header>

        <h1>
            Programación Web
        </h1>

        <nav>

            <a href="#inicio">
                Inicio
            </a>

            <a href="#cursos">
                Cursos
            </a>

            <a href="#profesores">
                Profesores
            </a>

            <a href="#contacto">
                Contacto
            </a>

        </nav>

    </header>

    <main>

        <section id="inicio">

            <h2>Bienvenidos</h2>

            <p>
                Aprende los fundamentos del desarrollo web moderno.
            </p>

            <img
                src="imagenes/programacion.jpg"
                alt="Estudiantes aprendiendo programación web"
                width="600"
            >

        </section>

        <section id="cursos">

            <h2>Tecnologías</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>

        </section>

        <section id="profesores">

            <h2>Profesores</h2>

            <article>

                <h3>María Rodríguez</h3>

                <p>
                    Profesora de desarrollo web.
                </p>

            </article>

            <article>

                <h3>Carlos Vargas</h3>

                <p>
                    Profesor de programación.
                </p>

            </article>

        </section>

        <section id="contacto">

            <h2>Contacto</h2>

            <form>

                <div>
                    <label for="nombre">
                        Nombre
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                    >
                </div>

                <div>
                    <label for="correo">
                        Correo
                    </label>

                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        required
                    >
                </div>

                <div>
                    <label for="mensaje">
                        Mensaje
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                    ></textarea>
                </div>

                <button type="submit">
                    Enviar mensaje
                </button>

            </form>

        </section>

    </main>

    <footer>

        <p>
            © 2026 Curso de Programación Web
        </p>

    </footer>

</body>

</html>
```

---

# 49. Práctica guiada — Página de una universidad

Construye una página utilizando:

```text
Universidad XYZ

Navegación
    Inicio
    Carreras
    Profesores
    Noticias
    Contacto

Contenido
    Presentación de la universidad
    Carreras
        Ingeniería de Software
        Ingeniería de Sistemas
        Ciencia de Datos
    Profesores
    Noticias
    Formulario de contacto

Footer
```

Debe utilizar al menos:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<form>
```

---

# 50. Ejercicio de depuración

Encuentra los errores:

```html
<!DOCTYPE html>

<html>

<head>

<title>Mi página<title>

</head>

<body>

<h1>Mi universidad</h2>

<p>
Bienvenidos
<p>

<img src="universidad.jpg">

<a>Visitar universidad</a>

<ul>

<li>Programación
<li>Bases de datos
<li>Redes

</ul>

</body>

</html>
```

Responde:

1. ¿Qué etiquetas están mal cerradas?
2. ¿Qué atributo debería tener la imagen?
3. ¿Qué atributo necesita el enlace?
4. ¿Qué atributo sería recomendable agregar a `<html>`?
5. Reescribe el código correctamente.

---

# 51. Ejercicio de análisis semántico

Reescribe el siguiente código utilizando `header`, `nav`, `main`, `article` y `footer`:

```html
<div>

    <div>
        Mi Blog
    </div>

    <div>
        <a href="#">Inicio</a>
        <a href="#">Artículos</a>
    </div>

    <div>

        <div>
            <h2>
                Aprendiendo HTML
            </h2>

            <p>
                HTML es...
            </p>
        </div>

    </div>

    <div>
        Copyright 2026
    </div>

</div>
```

---

# 52. Ejercicio conceptual

Explica con tus propias palabras:

1. ¿Qué es HTML?
2. ¿Por qué HTML no se considera un lenguaje de programación?
3. ¿Cuál es la función de `<head>`?
4. ¿Cuál es la función de `<body>`?
5. ¿Cuál es la diferencia entre `id` y `class`?
6. ¿Qué significa HTML semántico?
7. ¿Cuál es la función del atributo `alt`?
8. ¿Qué diferencia existe entre `<ul>` y `<ol>`?
9. ¿Qué diferencia existe entre `<strong>` y `<b>`?
10. ¿Por qué deberíamos asociar un `label` con un `input`?

---

# 53. Ejercicio avanzado — Página de producto

Construye una página que represente un producto de una tienda.

Debe incluir:

- nombre;
- imagen;
- descripción;
- precio;
- características;
- tabla de especificaciones;
- opciones de compra;
- cantidad;
- botón para agregar al carrito;
- productos relacionados.

Utiliza HTML semántico.

No utilices CSS todavía.

---

# 54. Proyecto integrador — Sitio web universitario

Construye un sitio web para una universidad ficticia.

El proyecto debe tener al menos cuatro páginas:

```text
index.html
carreras.html
profesores.html
contacto.html
```

## Página de inicio

Debe contener:

- nombre de la universidad;
- navegación;
- imagen principal;
- descripción;
- carreras destacadas;
- noticias;
- pie de página.

## Página de carreras

Debe mostrar al menos tres carreras:

```text
Ingeniería de Software
Ingeniería en Sistemas
Ciencia de Datos
```

Cada carrera debe incluir:

- nombre;
- descripción;
- duración;
- lista de cursos destacados;
- enlace para obtener más información.

## Página de profesores

Debe mostrar al menos cuatro profesores.

Cada profesor debe incluir:

```text
Nombre
Fotografía
Área
Descripción
Correo
```

## Página de contacto

Debe incluir un formulario con:

```text
Nombre
Correo
Teléfono
Carrera de interés
Modalidad
Mensaje
Aceptación de términos
Botón de envío
```

---

# 55. Requisitos técnicos del proyecto

El proyecto debe utilizar correctamente:

```text
doctype
html
head
body
meta
title
header
nav
main
section
article
footer
h1-h3
p
a
img
ul
ol
table
form
label
input
select
textarea
button
```

---

# 56. Restricciones

No utilizar:

```text
Bootstrap
Tailwind
React
Vue
Angular
```

Para esta primera etapa tampoco es necesario utilizar JavaScript.

---

# 57. Criterios de evaluación sugeridos

| Criterio | Porcentaje |
|---|---:|
| Estructura HTML válida | 20% |
| Uso correcto de HTML semántico | 20% |
| Formularios | 15% |
| Navegación | 10% |
| Imágenes y texto alternativo | 10% |
| Organización del proyecto | 10% |
| Accesibilidad básica | 10% |
| Calidad y legibilidad del código | 5% |
| **Total** | **100%** |

---

# 58. Preguntas de discusión

1. ¿Por qué no deberíamos utilizar `<div>` para absolutamente todo?
2. ¿Qué ventajas proporciona HTML semántico?
3. ¿Qué información debería contener el atributo `alt`?
4. ¿Qué problemas puede ocasionar utilizar un mismo `id` varias veces?
5. ¿Por qué una tabla no debería utilizarse para construir el diseño de una página?
6. ¿Qué sucede cuando hacemos clic en un `<label>` correctamente asociado a un checkbox?
7. ¿Qué ventajas ofrece utilizar tipos como `email`, `date` o `number`?
8. ¿Por qué HTML, CSS y JavaScript tienen responsabilidades diferentes?
9. ¿Qué relación existe entre HTML y el DOM?
10. ¿Qué características hacen que una página HTML sea accesible?

---

# 59. Quiz corto

## Pregunta 1

¿Qué etiqueta representa el contenido principal?

A. `<header>`  
B. `<main>`  
C. `<nav>`  
D. `<footer>`

## Pregunta 2

¿Qué etiqueta crea un enlace?

A. `<link>`  
B. `<a>`  
C. `<href>`  
D. `<url>`

## Pregunta 3

¿Qué atributo identifica la dirección de un enlace?

A. `src`  
B. `url`  
C. `href`  
D. `link`

## Pregunta 4

¿Qué atributo describe una imagen?

A. `description`  
B. `alt`  
C. `text`  
D. `title`

## Pregunta 5

¿Qué etiqueta representa una lista desordenada?

A. `<ol>`  
B. `<ul>`  
C. `<li>`  
D. `<list>`

---

# 60. Respuestas del quiz

```text
1 → B
2 → B
3 → C
4 → B
5 → B
```

---

# 61. Reto final — Portafolio personal

Crea desde cero una página llamada:

```text
portfolio.html
```

Debe representar tu portafolio profesional.

Incluye:

```text
Nombre
Fotografía
Descripción profesional
Educación
Habilidades
Proyectos
Experiencia
Formulario de contacto
Redes profesionales
```

Estructura aproximada:

```text
header
│
├── nombre
└── nav

main
│
├── acerca-de
├── habilidades
├── proyectos
├── experiencia
└── contacto

footer
```

Cada proyecto debe representarse mediante un `<article>`:

```html
<article>

    <h3>
        Sistema de matrícula
    </h3>

    <p>
        Aplicación web para administrar
        matrículas universitarias.
    </p>

    <a href="#">
        Ver proyecto
    </a>

</article>
```

---

# 62. Checklist del estudiante

Antes de entregar una página HTML, verifica:

- [ ] El documento tiene `<!DOCTYPE html>`.
- [ ] `<html>` contiene el atributo `lang`.
- [ ] Existe `<meta charset="UTF-8">`.
- [ ] Existe la configuración de `viewport`.
- [ ] La página tiene `<title>`.
- [ ] Existe un `<h1>` que describe el contenido principal.
- [ ] Los encabezados mantienen una jerarquía lógica.
- [ ] Las imágenes informativas tienen `alt`.
- [ ] Los formularios utilizan `label`.
- [ ] Los enlaces tienen texto descriptivo.
- [ ] Los elementos están correctamente anidados.
- [ ] No existen IDs duplicados.
- [ ] Se utiliza HTML semántico cuando corresponde.
- [ ] El código está correctamente indentado.
- [ ] Las rutas hacia imágenes y páginas funcionan.
- [ ] La página funciona después de recargar el navegador.

---

# 63. Hoja rápida de referencia

## Documento base

```html
<!DOCTYPE html>

<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Página</title>

</head>

<body>

</body>

</html>
```

## Texto

```html
<h1>Título</h1>
<h2>Sección</h2>
<p>Párrafo</p>
<strong>Importante</strong>
<em>Énfasis</em>
```

## Enlaces

```html
<a href="pagina.html">
    Página
</a>
```

## Imágenes

```html
<img
    src="imagen.jpg"
    alt="Descripción"
>
```

## Listas

```html
<ul>
    <li>Elemento</li>
</ul>

<ol>
    <li>Elemento</li>
</ol>
```

## Semántica

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

## Tabla

```html
<table>

    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>

    <tr>
        <td>Ana</td>
        <td>21</td>
    </tr>

</table>
```

## Formulario

```html
<form>

    <label for="nombre">
        Nombre
    </label>

    <input
        type="text"
        id="nombre"
        name="nombre"
    >

    <button type="submit">
        Enviar
    </button>

</form>
```

---

# 64. Actividad para trabajar en parejas

Un estudiante será el **desarrollador** y otro el **revisor**.

El desarrollador construirá una página que incluya:

```text
header
nav
main
3 sections
1 imagen
1 lista
1 tabla
1 formulario
footer
```

El revisor deberá identificar:

- problemas semánticos;
- errores de HTML;
- problemas de accesibilidad;
- elementos mal anidados;
- atributos faltantes;
- oportunidades de mejora.

Después intercambian roles.

---

# 65. Actividad de investigación

Investiga cinco elementos HTML que no hayamos utilizado ampliamente en esta guía.

Para cada uno indica:

```text
Nombre de la etiqueta
Propósito
Ejemplo
Cuándo utilizarla
Cuándo no utilizarla
```

Algunos elementos que pueden investigarse:

```html
<details>
<summary>
<dialog>
<time>
<mark>
<progress>
<meter>
<blockquote>
<cite>
<code>
```

---

# 66. Desafío adicional

Investiga qué sucede con este código:

```html
<details>

    <summary>
        Ver información
    </summary>

    <p>
        HTML permite crear algunos
        componentes interactivos
        sin JavaScript.
    </p>

</details>
```

Responde:

1. ¿Qué comportamiento proporciona el navegador?
2. ¿Necesitamos JavaScript?
3. ¿Qué ventajas podría tener este elemento?
4. ¿En qué situaciones podrías utilizarlo?

---

# 67. Conclusión

HTML constituye la base de prácticamente cualquier página web.

Aprender HTML correctamente no consiste únicamente en memorizar etiquetas.

Un desarrollador debe comprender:

```text
estructura
+
semántica
+
accesibilidad
+
organización
```

Un documento HTML bien construido permite posteriormente trabajar de manera mucho más sencilla con:

```text
CSS
JavaScript
Frameworks frontend
Motores de búsqueda
Lectores de pantalla
Herramientas de automatización
```

La prioridad siempre debería ser escribir HTML que tenga **sentido**, no únicamente HTML que "se vea bien".

---

# 68. Próximo tema recomendado

Una progresión natural sería:

```text
HTML
 ↓
CSS básico
 ↓
Box Model
 ↓
Flexbox
 ↓
CSS Grid
 ↓
Responsive Design
 ↓
JavaScript
 ↓
DOM
 ↓
Fetch / APIs
 ↓
Frameworks frontend
```

---

# 69. Ejercicio final de reflexión

Responde sin consultar la guía:

> Si elimináramos completamente CSS y JavaScript de una aplicación web, ¿la estructura HTML seguiría teniendo sentido para una persona y para un navegador?

Explica tu respuesta considerando:

- semántica;
- encabezados;
- navegación;
- formularios;
- accesibilidad;
- organización del contenido.
