# Guía de CSS

## Desarrollo Web — Fundamentos y Aplicaciones de CSS

---

# 1. Introducción

CSS significa:

> **Cascading Style Sheets**  
> Hojas de Estilo en Cascada

CSS es el lenguaje utilizado para definir la **apariencia, distribución y presentación visual** de documentos HTML.

Mientras HTML define la estructura:

```html
<h1>Programación Web</h1>
<p>Bienvenidos al curso.</p>
```

CSS controla cómo se ve:

```css
h1 {
    color: navy;
    font-size: 2.5rem;
}

p {
    color: #333;
    line-height: 1.6;
}
```

En desarrollo web suele pensarse así:

```text
HTML       → estructura
CSS        → presentación
JavaScript → comportamiento
```

---

# 2. Objetivos de aprendizaje

Al finalizar esta guía, el estudiante debería poder:

- Comprender el propósito de CSS.
- Vincular CSS con documentos HTML.
- Utilizar selectores.
- Comprender la cascada.
- Comprender especificidad e herencia.
- Trabajar con colores.
- Utilizar unidades absolutas y relativas.
- Manipular tipografía.
- Comprender el Box Model.
- Trabajar con `display`.
- Utilizar posicionamiento.
- Construir interfaces con Flexbox.
- Construir layouts con CSS Grid.
- Aplicar diseño responsive.
- Utilizar media queries.
- Diseñar formularios.
- Crear estados interactivos con pseudoclases.
- Utilizar pseudoelementos.
- Crear transiciones y animaciones.
- Utilizar variables CSS.
- Comprender buenas prácticas de organización.
- Aplicar principios básicos de accesibilidad.
- Diseñar una interfaz web completa.

---

# 3. Formas de agregar CSS

Existen tres formas principales de aplicar CSS.

## 3.1 CSS en línea

```html
<p style="color: red;">
    Texto rojo
</p>
```

No es recomendable para proyectos medianos o grandes porque mezcla estructura y presentación.

---

## 3.2 CSS interno

```html
<head>

    <style>

        p {
            color: red;
        }

    </style>

</head>
```

Puede ser útil para ejemplos pequeños.

---

## 3.3 CSS externo

Es la forma recomendada para proyectos reales.

HTML:

```html
<link
    rel="stylesheet"
    href="css/estilos.css"
>
```

CSS:

```css
body {
    font-family: Arial, sans-serif;
}
```

---

# Ejercicio 1 — Conectar CSS

Crea:

```text
index.html
css/
└── estilos.css
```

Enlaza correctamente ambos archivos.

En `estilos.css` cambia:

- color de fondo;
- color del título;
- fuente principal.

---

# 4. Sintaxis de CSS

La estructura básica es:

```css
selector {
    propiedad: valor;
}
```

Ejemplo:

```css
h1 {
    color: blue;
}
```

Podemos agregar múltiples propiedades:

```css
h1 {
    color: blue;
    font-size: 40px;
    text-align: center;
}
```

---

# 5. Selectores básicos

## Selector de etiqueta

```css
p {
    color: #333;
}
```

Afecta todos los elementos `<p>`.

---

## Selector de clase

HTML:

```html
<p class="destacado">
    Texto importante
</p>
```

CSS:

```css
.destacado {
    background-color: yellow;
}
```

---

## Selector de ID

HTML:

```html
<section id="contacto">
</section>
```

CSS:

```css
#contacto {
    background-color: #eee;
}
```

Para estilos reutilizables se prefieren generalmente clases.

---

## Selector universal

```css
* {
    box-sizing: border-box;
}
```

Selecciona todos los elementos.

---

# 6. Selectores combinados

## Descendiente

```css
nav a {
    color: white;
}
```

Selecciona enlaces dentro de `nav`.

---

## Hijo directo

```css
.menu > li {
    list-style: none;
}
```

---

## Hermano adyacente

```css
h2 + p {
    margin-top: 0;
}
```

---

## Hermanos generales

```css
h2 ~ p {
    color: #555;
}
```

---

# Ejercicio 2 — Selectores

Dado:

```html
<section class="cursos">

    <h2>Cursos</h2>

    <article class="curso destacado">
        <h3>HTML</h3>
        <p>Fundamentos de HTML.</p>
    </article>

    <article class="curso">
        <h3>CSS</h3>
        <p>Fundamentos de CSS.</p>
    </article>

</section>
```

Crea reglas para:

1. Todos los títulos `h3`.
2. Todos los elementos `.curso`.
3. Solamente `.destacado`.
4. Párrafos dentro de `.curso`.
5. Hijos directos de `.cursos`.

---

# 7. La cascada

CSS significa **Cascading Style Sheets** porque las reglas pueden competir entre sí.

Ejemplo:

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Si tienen la misma especificidad, normalmente gana la regla declarada después.

---

# 8. Especificidad

La especificidad determina qué regla tiene mayor prioridad.

Ejemplo:

```css
p {
    color: blue;
}

.texto {
    color: green;
}

#principal {
    color: red;
}
```

HTML:

```html
<p
    id="principal"
    class="texto"
>
    Hola
</p>
```

El texto será rojo porque el selector de ID tiene mayor especificidad.

Conceptualmente:

```text
Etiqueta  <  Clase  <  ID
```

Evita depender excesivamente de IDs para estilos.

---

# 9. `!important`

Ejemplo:

```css
p {
    color: red !important;
}
```

`!important` aumenta mucho la prioridad.

Debe evitarse en la mayoría de casos porque dificulta el mantenimiento.

---

# 10. Herencia

Algunas propiedades se heredan.

Ejemplo:

```css
body {
    color: #333;
    font-family: Arial, sans-serif;
}
```

Los elementos internos heredarán normalmente esas propiedades.

No todas las propiedades se heredan.

Por ejemplo:

```css
border
margin
padding
```

no se heredan normalmente.

---

# Ejercicio 3 — Cascada y especificidad

Predice el color del texto:

```html
<p
    id="mensaje"
    class="alerta"
>
    Atención
</p>
```

```css
p {
    color: blue;
}

.alerta {
    color: orange;
}

#mensaje {
    color: red;
}
```

Después cambia el orden de las reglas y observa qué sucede.

---

# 11. Colores

CSS permite varias formas de definir colores.

## Nombre

```css
color: red;
```

## Hexadecimal

```css
color: #ff0000;
```

## RGB

```css
color: rgb(255, 0, 0);
```

## RGBA

```css
color: rgba(255, 0, 0, 0.5);
```

## HSL

```css
color: hsl(0, 100%, 50%);
```

---

# 12. Fondos

```css
body {
    background-color: #f5f5f5;
}
```

También podemos utilizar imágenes:

```css
.hero {
    background-image: url("../imagenes/portada.jpg");
}
```

Propiedades relacionadas:

```css
.hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

---

# 13. Unidades CSS

## Píxeles

```css
font-size: 16px;
```

## Porcentaje

```css
width: 80%;
```

## `em`

Relativa al tamaño de fuente del elemento o contexto.

```css
padding: 1em;
```

## `rem`

Relativa al tamaño de fuente del elemento raíz.

```css
font-size: 1.5rem;
```

## Viewport

```css
height: 100vh;
width: 100vw;
```

También existen:

```text
vmin
vmax
```

---

# 14. Funciones útiles para tamaño

## `calc()`

```css
width: calc(100% - 40px);
```

## `min()`

```css
width: min(90%, 1200px);
```

## `max()`

```css
font-size: max(1rem, 2vw);
```

## `clamp()`

```css
font-size: clamp(1.5rem, 4vw, 3rem);
```

Muy útil para diseño responsive.

---

# Ejercicio 4 — Unidades

Construye una sección donde:

- el ancho máximo sea `1200px`;
- ocupe como máximo `90%` del viewport;
- el título use `clamp()`;
- el espaciado use `rem`.

---

# 15. Tipografía

## Fuente

```css
body {
    font-family: Arial, sans-serif;
}
```

---

## Tamaño

```css
p {
    font-size: 1rem;
}
```

---

## Peso

```css
h1 {
    font-weight: 700;
}
```

---

## Estilo

```css
em {
    font-style: italic;
}
```

---

## Altura de línea

```css
p {
    line-height: 1.6;
}
```

---

## Alineación

```css
h1 {
    text-align: center;
}
```

---

## Transformación

```css
h2 {
    text-transform: uppercase;
}
```

---

## Decoración

```css
a {
    text-decoration: none;
}
```

---

## Espaciado entre letras

```css
h1 {
    letter-spacing: 0.05em;
}
```

---

# 16. Fuentes web

Podemos usar fuentes externas.

Ejemplo conceptual:

```css
body {
    font-family: "Roboto", sans-serif;
}
```

También podemos usar `@font-face` si tenemos archivos de fuentes locales:

```css
@font-face {
    font-family: "MiFuente";
    src: url("../fonts/mifuente.woff2");
}
```

---

# 17. Box Model

Todo elemento puede entenderse como una caja.

```text
┌─────────────────────────────┐
│           margin            │
│   ┌─────────────────────┐   │
│   │       border        │   │
│   │   ┌─────────────┐   │   │
│   │   │   padding   │   │   │
│   │   │ ┌─────────┐ │   │   │
│   │   │ │ content │ │   │   │
│   │   │ └─────────┘ │   │   │
│   │   └─────────────┘   │   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```

---

# 18. `width` y `height`

```css
.caja {
    width: 300px;
    height: 200px;
}
```

---

# 19. Padding

Espacio interno:

```css
.caja {
    padding: 20px;
}
```

Valores individuales:

```css
.caja {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
```

Forma abreviada:

```css
.caja {
    padding: 10px 20px;
}
```

---

# 20. Margin

Espacio externo:

```css
.caja {
    margin: 20px;
}
```

Centrar horizontalmente:

```css
.contenedor {
    width: 80%;
    margin: 0 auto;
}
```

---

# 21. Border

```css
.caja {
    border: 1px solid #ccc;
}
```

También:

```css
.caja {
    border-radius: 12px;
}
```

---

# 22. `box-sizing`

Una práctica común es:

```css
* {
    box-sizing: border-box;
}
```

Con `border-box`, el ancho declarado incluye `padding` y `border`.

---

# Ejercicio 5 — Box Model

Crea una tarjeta con:

- `width: 300px`;
- `padding: 20px`;
- borde;
- `border-radius`;
- margen inferior;
- fondo blanco.

Luego activa y desactiva:

```css
box-sizing: border-box;
```

y analiza la diferencia.

---

# 23. `display`

La propiedad `display` controla el comportamiento de visualización.

Valores frecuentes:

```text
block
inline
inline-block
none
flex
grid
```

---

# 24. Block

Elementos como:

```text
div
p
section
h1
```

normalmente ocupan todo el ancho disponible.

---

# 25. Inline

Elementos como:

```text
span
a
strong
```

normalmente ocupan únicamente el espacio necesario.

---

# 26. Inline-block

```css
.boton {
    display: inline-block;
}
```

Permite comportamiento en línea con capacidad para controlar dimensiones.

---

# 27. Ocultar elementos

```css
.oculto {
    display: none;
}
```

El elemento deja de participar en el layout.

---

# 28. Overflow

```css
.caja {
    overflow: auto;
}
```

Valores comunes:

```text
visible
hidden
scroll
auto
```

---

# 29. Posicionamiento

## `static`

Valor normal:

```css
.elemento {
    position: static;
}
```

---

## `relative`

```css
.elemento {
    position: relative;
    top: 10px;
    left: 20px;
}
```

También sirve como referencia para hijos `absolute`.

---

## `absolute`

```css
.padre {
    position: relative;
}

.hijo {
    position: absolute;
    top: 0;
    right: 0;
}
```

---

## `fixed`

```css
.chat {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

Permanece en una posición respecto al viewport.

---

## `sticky`

```css
nav {
    position: sticky;
    top: 0;
}
```

Puede quedar pegado al desplazarse.

---

# 30. `z-index`

Controla el orden de superposición:

```css
.modal {
    position: fixed;
    z-index: 1000;
}
```

---

# Ejercicio 6 — Posicionamiento

Construye:

1. Una tarjeta con una etiqueta en la esquina superior derecha.
2. Un botón flotante en la esquina inferior derecha.
3. Un encabezado `sticky`.

---

# 31. Flexbox

Flexbox es un sistema de layout de una dimensión.

Ideal para:

- filas;
- columnas;
- menús;
- alineación;
- tarjetas;
- barras de herramientas.

---

# 32. Activar Flexbox

```css
.contenedor {
    display: flex;
}
```

---

# 33. Dirección

```css
.contenedor {
    display: flex;
    flex-direction: row;
}
```

Valores:

```text
row
row-reverse
column
column-reverse
```

---

# 34. Eje principal y eje cruzado

Con:

```css
flex-direction: row;
```

el eje principal es horizontal.

Con:

```css
flex-direction: column;
```

el eje principal es vertical.

---

# 35. `justify-content`

Alinea sobre el eje principal:

```css
.contenedor {
    display: flex;
    justify-content: center;
}
```

Valores frecuentes:

```text
flex-start
flex-end
center
space-between
space-around
space-evenly
```

---

# 36. `align-items`

Alinea sobre el eje cruzado:

```css
.contenedor {
    display: flex;
    align-items: center;
}
```

---

# 37. `gap`

```css
.contenedor {
    display: flex;
    gap: 1rem;
}
```

Es preferible muchas veces a usar márgenes individuales.

---

# 38. `flex-wrap`

```css
.contenedor {
    display: flex;
    flex-wrap: wrap;
}
```

Permite que los elementos pasen a otra línea.

---

# 39. Propiedades de los elementos Flex

## `flex-grow`

```css
.item {
    flex-grow: 1;
}
```

## `flex-shrink`

```css
.item {
    flex-shrink: 0;
}
```

## `flex-basis`

```css
.item {
    flex-basis: 250px;
}
```

## Abreviación

```css
.item {
    flex: 1 1 250px;
}
```

---

# 40. Ejemplo Flexbox

HTML:

```html
<section class="tarjetas">

    <article class="tarjeta">
        HTML
    </article>

    <article class="tarjeta">
        CSS
    </article>

    <article class="tarjeta">
        JavaScript
    </article>

</section>
```

CSS:

```css
.tarjetas {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.tarjeta {
    flex: 1 1 250px;
    padding: 1.5rem;
    border: 1px solid #ddd;
}
```

---

# Ejercicio 7 — Flexbox

Construye una barra de navegación con:

- logo a la izquierda;
- enlaces a la derecha;
- separación uniforme;
- alineación vertical;
- adaptación cuando falta espacio.

---

# 41. CSS Grid

CSS Grid es un sistema de layout bidimensional.

Permite controlar filas y columnas al mismo tiempo.

---

# 42. Activar Grid

```css
.contenedor {
    display: grid;
}
```

---

# 43. Columnas

```css
.contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

También:

```css
.contenedor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

# 44. `gap` en Grid

```css
.contenedor {
    display: grid;
    gap: 1rem;
}
```

---

# 45. Columnas responsivas

```css
.contenedor {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));
}
```

Esto crea una cuadrícula flexible.

---

# 46. Posicionamiento en Grid

```css
.destacado {
    grid-column: 1 / 3;
}
```

También:

```css
.destacado {
    grid-row: 1 / 3;
}
```

---

# 47. Grid Areas

HTML:

```html
<div class="layout">

    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <aside>Aside</aside>
    <footer>Footer</footer>

</div>
```

CSS:

```css
.layout {
    display: grid;

    grid-template-areas:
        "header header"
        "nav nav"
        "main aside"
        "footer footer";

    grid-template-columns: 2fr 1fr;
}

header {
    grid-area: header;
}

nav {
    grid-area: nav;
}

main {
    grid-area: main;
}

aside {
    grid-area: aside;
}

footer {
    grid-area: footer;
}
```

---

# Ejercicio 8 — Grid

Construye una cuadrícula de cursos con:

- mínimo 250px por tarjeta;
- máximo número posible de columnas;
- separación uniforme;
- una tarjeta destacada que ocupe dos columnas en pantallas amplias.

---

# 48. Flexbox vs Grid

Una regla práctica:

```text
Flexbox → una dimensión
Grid    → dos dimensiones
```

No significa que uno reemplace al otro.

Muchos proyectos utilizan ambos.

---

# 49. Diseño Responsive

Responsive Design permite que una interfaz se adapte a diferentes tamaños de pantalla.

Objetivos:

- legibilidad;
- navegación cómoda;
- imágenes adaptables;
- layout flexible;
- controles accesibles.

---

# 50. Mobile First

Una estrategia recomendada consiste en comenzar con estilos para pantallas pequeñas.

Ejemplo:

```css
.tarjetas {
    display: grid;
    grid-template-columns: 1fr;
}
```

Luego:

```css
@media (min-width: 768px) {

    .tarjetas {
        grid-template-columns: repeat(2, 1fr);
    }

}
```

Y después:

```css
@media (min-width: 1024px) {

    .tarjetas {
        grid-template-columns: repeat(3, 1fr);
    }

}
```

---

# 51. Media Queries

Ejemplo:

```css
@media (max-width: 768px) {

    nav {
        flex-direction: column;
    }

}
```

También se puede consultar orientación:

```css
@media (orientation: landscape) {

    .hero {
        min-height: 70vh;
    }

}
```

---

# 52. Imágenes responsive

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

# 53. Contenedores fluidos

```css
.contenedor {
    width: min(90%, 1200px);
    margin-inline: auto;
}
```

---

# Ejercicio 9 — Responsive

Construye una página con:

- una columna en móvil;
- dos columnas en tablet;
- tres columnas en escritorio;
- imágenes responsive;
- navegación que se reorganice.

---

# 54. Pseudoclases

Representan estados especiales.

## `:hover`

```css
a:hover {
    color: red;
}
```

## `:focus`

```css
input:focus {
    outline: 2px solid blue;
}
```

## `:active`

```css
button:active {
    transform: scale(0.98);
}
```

## `:disabled`

```css
button:disabled {
    opacity: 0.5;
}
```

## `:checked`

```css
input:checked {
    accent-color: green;
}
```

---

# 55. Pseudoclases estructurales

```css
li:first-child {
    font-weight: bold;
}
```

```css
li:last-child {
    border-bottom: none;
}
```

```css
li:nth-child(2) {
    background-color: #eee;
}
```

```css
li:nth-child(odd) {
    background-color: #fafafa;
}
```

---

# 56. `:not()`

```css
button:not(.principal) {
    background-color: transparent;
}
```

---

# 57. `:is()`

```css
:is(h1, h2, h3) {
    line-height: 1.2;
}
```

---

# 58. `:where()`

```css
:where(header, main, footer) {
    padding-inline: 1rem;
}
```

Tiene una especificidad muy baja.

---

# 59. Pseudoelementos

## `::before`

```css
.enlace::before {
    content: "→ ";
}
```

## `::after`

```css
.externo::after {
    content: " ↗";
}
```

## `::first-letter`

```css
.introduccion::first-letter {
    font-size: 3rem;
}
```

## `::selection`

```css
::selection {
    background-color: #222;
    color: white;
}
```

---

# Ejercicio 10 — Estados

Diseña un botón con estados:

- normal;
- hover;
- focus;
- active;
- disabled.

No elimines el indicador de foco sin reemplazarlo por otro visible.

---

# 60. Formularios con CSS

HTML:

```html
<form class="formulario">

    <label for="correo">
        Correo
    </label>

    <input
        type="email"
        id="correo"
        name="correo"
    >

    <button type="submit">
        Enviar
    </button>

</form>
```

CSS:

```css
.formulario {
    display: grid;
    gap: 1rem;
    max-width: 500px;
}

.formulario input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}

.formulario input:focus {
    outline: 3px solid rgba(0, 100, 255, 0.3);
    border-color: #0064ff;
}

.formulario button {
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
}
```

---

# 61. `appearance`

Puede utilizarse con cuidado para personalizar controles:

```css
select {
    appearance: none;
}
```

Si se elimina la apariencia nativa, hay que asegurar que el control siga siendo reconocible y accesible.

---

# 62. Sombras

## Box shadow

```css
.tarjeta {
    box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.1);
}
```

## Text shadow

```css
h1 {
    text-shadow:
        0 2px 6px rgba(0, 0, 0, 0.2);
}
```

---

# 63. Gradientes

```css
.hero {
    background:
        linear-gradient(
            135deg,
            #1e3c72,
            #2a5298
        );
}
```

---

# 64. Transparencia

```css
.elemento {
    opacity: 0.8;
}
```

Ten en cuenta que `opacity` afecta también a los hijos.

---

# 65. Filtros

```css
img {
    filter: grayscale(100%);
}
```

Otros filtros:

```text
blur()
brightness()
contrast()
saturate()
sepia()
```

---

# 66. Transformaciones

```css
.tarjeta:hover {
    transform: translateY(-4px);
}
```

También:

```css
transform: scale(1.05);
transform: rotate(5deg);
transform: translateX(20px);
```

---

# 67. Transiciones

```css
.boton {
    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
}

.boton:hover {
    transform: translateY(-2px);
}
```

---

# 68. Animaciones

```css
@keyframes aparecer {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

.tarjeta {
    animation:
        aparecer 0.6s ease;
}
```

---

# 69. Preferencias de movimiento reducido

Por accesibilidad:

```css
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

}
```

---

# Ejercicio 11 — Transiciones

Crea tres tarjetas que:

- eleven ligeramente al pasar el mouse;
- cambien la sombra;
- hagan una transición suave;
- respeten `prefers-reduced-motion`.

---

# 70. Variables CSS

También llamadas **Custom Properties**.

```css
:root {
    --color-primario: #1e3a8a;
    --color-fondo: #f8fafc;
    --espacio-base: 1rem;
}
```

Uso:

```css
body {
    background-color: var(--color-fondo);
}

.boton {
    background-color: var(--color-primario);
    padding: var(--espacio-base);
}
```

---

# 71. Valores por defecto en variables

```css
color: var(--color-texto, #222);
```

Si `--color-texto` no existe, se usa `#222`.

---

# Ejercicio 12 — Sistema de diseño

Define variables para:

```text
color primario
color secundario
color de texto
color de fondo
radio de borde
espaciado
ancho máximo
sombra
```

Úsalas en botones, tarjetas y formularios.

---

# 72. Variables locales

```css
.alerta {
    --color-local: #b91c1c;

    color: var(--color-local);
}
```

Las variables pueden cambiar según el contexto.

---

# 73. `currentColor`

```css
.boton {
    color: blue;
    border: 2px solid currentColor;
}
```

El borde utiliza el color actual del texto.

---

# 74. Propiedades lógicas

En lugar de:

```css
margin-left: 20px;
margin-right: 20px;
```

podemos usar:

```css
margin-inline: 20px;
```

También:

```css
padding-block: 1rem;
padding-inline: 2rem;
```

Son útiles para idiomas y direcciones de escritura diferentes.

---

# 75. `min-width`, `max-width`, `min-height`, `max-height`

Ejemplo:

```css
.contenedor {
    width: 100%;
    max-width: 1200px;
}
```

---

# 76. Aspect Ratio

```css
.video {
    aspect-ratio: 16 / 9;
}
```

---

# 77. Object Fit

```css
img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
```

Valores:

```text
cover
contain
fill
none
scale-down
```

---

# 78. Cursores

```css
button {
    cursor: pointer;
}
```

---

# 79. Listas

```css
ul {
    list-style-type: square;
}
```

También:

```css
ul {
    list-style: none;
    padding: 0;
}
```

---

# 80. Tablas

```css
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
}

th {
    text-align: left;
}
```

---

# 81. Responsive Tables

Una estrategia simple:

```css
.tabla-contenedor {
    overflow-x: auto;
}
```

HTML:

```html
<div class="tabla-contenedor">

    <table>
        ...
    </table>

</div>
```

---

# 82. Variables para temas

```css
:root {
    --fondo: white;
    --texto: #222;
}

.tema-oscuro {
    --fondo: #111;
    --texto: #f8f8f8;
}
```

Uso:

```css
body {
    background-color: var(--fondo);
    color: var(--texto);
}
```

---

# 83. Preferencia de tema oscuro

```css
@media (prefers-color-scheme: dark) {

    :root {
        --fondo: #111;
        --texto: #f5f5f5;
    }

}
```

---

# 84. Accesibilidad en CSS

El diseño visual también afecta la accesibilidad.

Debe considerarse:

- contraste;
- tamaño de fuente;
- estados de foco;
- movimiento;
- tamaño de áreas clicables;
- legibilidad;
- diseño responsive.

---

# 85. No eliminar el foco sin reemplazarlo

Incorrecto:

```css
button:focus {
    outline: none;
}
```

Mejor:

```css
button:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
}
```

---

# 86. Contraste

Evita combinaciones con poco contraste, por ejemplo:

```css
color: #aaa;
background-color: #fff;
```

para texto pequeño importante.

---

# 87. Tamaño de controles

Los botones deben ser fáciles de activar:

```css
button {
    min-height: 44px;
    padding-inline: 1rem;
}
```

---

# 88. `focus-visible`

```css
a:focus-visible,
button:focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 3px;
}
```

---

# Ejercicio 13 — Auditoría de accesibilidad

Revisa una página y responde:

1. ¿Los enlaces se distinguen claramente?
2. ¿Existe indicador de foco?
3. ¿El contraste es suficiente?
4. ¿Los botones tienen tamaño adecuado?
5. ¿La página funciona con zoom?
6. ¿El layout funciona en móvil?
7. ¿Las animaciones son opcionales o reducidas?

---

# 89. Arquitectura básica de CSS

Una organización sencilla:

```text
css/
├── reset.css
├── variables.css
├── base.css
├── componentes.css
├── layout.css
└── responsive.css
```

Para proyectos pequeños puede ser suficiente un solo archivo bien organizado.

---

# 90. Orden recomendado dentro de un archivo

```text
1. Variables
2. Reset / normalización
3. Estilos base
4. Layout
5. Componentes
6. Utilidades
7. Media queries
```

---

# 91. Reset básico

Ejemplo mínimo:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
}

img {
    max-width: 100%;
    display: block;
}
```

---

# 92. Convenciones de nombres

Evita:

```css
.rojo-grande {
}
```

si la clase describe únicamente apariencia.

Puede ser mejor:

```css
.alerta {
}
```

o:

```css
.tarjeta-destacada {
}
```

---

# 93. BEM

Una convención conocida es BEM:

```text
Block
Element
Modifier
```

Ejemplo:

```html
<article class="tarjeta tarjeta--destacada">

    <h2 class="tarjeta__titulo">
        CSS
    </h2>

    <p class="tarjeta__descripcion">
        Curso de CSS.
    </p>

</article>
```

CSS:

```css
.tarjeta {
}

.tarjeta__titulo {
}

.tarjeta__descripcion {
}

.tarjeta--destacada {
}
```

---

# 94. Utilidades

Ejemplo:

```css
.texto-centrado {
    text-align: center;
}

.oculto {
    display: none;
}
```

No conviene convertir todo el CSS en clases de utilidad sin una estrategia clara.

---

# 95. Custom properties para escalas de espaciado

```css
:root {
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 1rem;
    --space-4: 1.5rem;
    --space-5: 2rem;
}
```

---

# 96. Ejemplo completo de tarjeta

HTML:

```html
<article class="tarjeta-curso">

    <img
        src="html.jpg"
        alt="Código HTML en pantalla"
        class="tarjeta-curso__imagen"
    >

    <div class="tarjeta-curso__contenido">

        <h2 class="tarjeta-curso__titulo">
            HTML
        </h2>

        <p>
            Aprende los fundamentos de HTML.
        </p>

        <a
            href="#"
            class="boton"
        >
            Ver curso
        </a>

    </div>

</article>
```

CSS:

```css
.tarjeta-curso {
    overflow: hidden;

    border:
        1px solid #ddd;

    border-radius:
        1rem;

    background:
        white;

    box-shadow:
        0 8px 20px
        rgba(0, 0, 0, 0.08);
}

.tarjeta-curso__imagen {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.tarjeta-curso__contenido {
    padding: 1.5rem;
}

.tarjeta-curso__titulo {
    margin-top: 0;
}

.boton {
    display: inline-block;
    padding: 0.75rem 1rem;

    border-radius:
        0.5rem;

    text-decoration:
        none;
}
```

---

# 97. Depuración de CSS

Cuando un estilo no funciona, revisa:

1. ¿El archivo CSS está enlazado?
2. ¿La ruta es correcta?
3. ¿El selector coincide?
4. ¿La propiedad es válida?
5. ¿Hay un error de sintaxis?
6. ¿Otra regla tiene mayor especificidad?
7. ¿La propiedad está siendo heredada?
8. ¿El navegador la está sobrescribiendo?
9. ¿Existe un `!important`?
10. ¿La propiedad depende de `display`, `position` u otro contexto?

---

# 98. DevTools y CSS

Las herramientas del navegador permiten:

- inspeccionar reglas;
- activar y desactivar propiedades;
- revisar especificidad;
- modificar valores;
- visualizar Box Model;
- probar Flexbox;
- probar Grid;
- revisar responsive design.

---

# Ejercicio 14 — Depuración

Analiza:

```css
#tarjeta {
    color: blue;
}

.tarjeta {
    color: red;
}
```

HTML:

```html
<div
    id="tarjeta"
    class="tarjeta"
>
    Texto
</div>
```

Responde:

1. ¿Qué color se aplica?
2. ¿Por qué?
3. ¿Cómo evitarías esta competencia?
4. ¿Qué selector sería mejor para estilos reutilizables?

---

# 99. Errores frecuentes

## Error 1 — Abusar de `!important`

```css
color: red !important;
```

Usarlo repetidamente genera guerras de especificidad.

---

## Error 2 — Alturas fijas innecesarias

```css
.seccion {
    height: 500px;
}
```

Puede romper el contenido.

Muchas veces es mejor:

```css
.seccion {
    min-height: 500px;
}
```

---

## Error 3 — Anchuras fijas

```css
.contenedor {
    width: 1200px;
}
```

Mejor:

```css
.contenedor {
    width: min(90%, 1200px);
}
```

---

## Error 4 — Ocultar overflow para esconder problemas

```css
body {
    overflow-x: hidden;
}
```

Esto puede ocultar el síntoma sin resolver la causa.

---

## Error 5 — Usar márgenes arbitrarios para posicionar

```css
.elemento {
    margin-left: 487px;
}
```

Esto suele ser frágil.

Usa Flexbox o Grid.

---

## Error 6 — No probar en móvil

Un diseño de escritorio puede romperse en pantallas pequeñas.

---

# 100. CSS para navegación

HTML:

```html
<nav class="nav">

    <a href="#">
        Inicio
    </a>

    <a href="#">
        Cursos
    </a>

    <a href="#">
        Contacto
    </a>

</nav>
```

CSS:

```css
.nav {
    display: flex;
    gap: 1rem;
}

.nav a {
    color: inherit;
    text-decoration: none;
}

.nav a:hover {
    text-decoration: underline;
}
```

---

# 101. Hero Section

HTML:

```html
<section class="hero">

    <div class="hero__contenido">

        <h1>
            Aprende Desarrollo Web
        </h1>

        <p>
            HTML, CSS y JavaScript desde cero.
        </p>

        <a
            href="#cursos"
            class="boton"
        >
            Ver cursos
        </a>

    </div>

</section>
```

CSS:

```css
.hero {
    display: grid;
    place-items: center;

    min-height:
        70vh;

    padding:
        2rem;

    text-align:
        center;
}
```

---

# 102. `place-items`

En Grid:

```css
.contenedor {
    display: grid;
    place-items: center;
}
```

Equivale conceptualmente a centrar en ambos ejes.

---

# 103. Centrado moderno

Para centrar contenido:

```css
.centro {
    display: grid;
    place-items: center;
}
```

o:

```css
.centro {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

# 104. Scroll suave

```css
html {
    scroll-behavior: smooth;
}
```

Debe utilizarse con consideración hacia preferencias de movimiento.

---

# 105. Sticky Footer

```css
body {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
```

---

# 106. Container Queries — introducción

Además de Media Queries, CSS moderno permite responder al tamaño de un contenedor.

Ejemplo:

```css
.tarjeta-contenedor {
    container-type: inline-size;
}
```

```css
@container (min-width: 500px) {

    .tarjeta {
        display: grid;
        grid-template-columns: 200px 1fr;
    }

}
```

Esto puede ser útil para componentes reutilizables.

---

# 107. Selectores de atributo

```css
input[type="email"] {
    border-color: blue;
}
```

```css
a[target="_blank"] {
    font-weight: bold;
}
```

---

# 108. Selector por prefijo, sufijo o contenido

```css
a[href^="https"] {
}
```

```css
a[href$=".pdf"] {
}
```

```css
a[href*="universidad"] {
}
```

---

# 109. `:has()` — introducción

Ejemplo:

```css
.tarjeta:has(img) {
    padding-top: 0;
}
```

Selecciona una tarjeta que contiene una imagen.

También:

```css
.formulario:has(input:invalid) {
    border-color: red;
}
```

---

# 110. Validación visual de formularios

```css
input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}
```

Debe evitarse depender únicamente del color para comunicar errores.

---

# 111. Diseño por componentes

En lugar de pensar en páginas completas, podemos pensar en componentes:

```text
botón
tarjeta
alerta
navegación
formulario
modal
badge
tabla
```

Cada componente debería tener reglas coherentes y reutilizables.

---

# 112. Ejercicio integrador corto

Construye una página de cursos con:

- header;
- navegación;
- hero;
- cuadrícula de cursos;
- formulario de contacto;
- footer.

Debe utilizar:

```text
variables CSS
Flexbox
Grid
hover
focus-visible
media queries
clamp()
max-width
gap
border-radius
box-shadow
```

---

# 113. Proyecto integrador — Sitio universitario responsive

Construye la capa visual para un sitio universitario.

Páginas:

```text
index.html
carreras.html
profesores.html
contacto.html
```

Archivos CSS:

```text
css/
├── variables.css
├── base.css
├── componentes.css
├── layout.css
└── responsive.css
```

---

## Requisitos del diseño

Debe incluir:

- paleta de colores consistente;
- sistema de espaciado;
- tipografía;
- contenedor principal;
- navegación responsive;
- tarjetas;
- botones;
- formularios;
- tablas;
- layout con Flexbox;
- layout con Grid;
- estados hover;
- estados focus;
- diseño móvil;
- diseño tablet;
- diseño desktop;
- imágenes responsive;
- transiciones;
- soporte para movimiento reducido;
- variables CSS.

---

# 114. Requisitos técnicos

El proyecto debe utilizar correctamente:

```text
selectores
clases
cascada
especificidad
herencia
variables
unidades relativas
Box Model
display
Flexbox
Grid
position
media queries
pseudoclases
pseudoelementos
transiciones
responsive design
```

---

# 115. Restricciones sugeridas

Para practicar CSS puro:

```text
No Bootstrap
No Tailwind
No Foundation
No Material UI
No frameworks CSS
```

---

# 116. Criterios de evaluación sugeridos

| Criterio | Porcentaje |
|---|---:|
| Organización del CSS | 10% |
| Selectores y reutilización | 10% |
| Box Model | 10% |
| Flexbox | 15% |
| CSS Grid | 15% |
| Responsive Design | 15% |
| Accesibilidad visual | 10% |
| Variables y consistencia | 5% |
| Calidad visual | 5% |
| Legibilidad y mantenimiento | 5% |
| **Total** | **100%** |

---

# 117. Preguntas de discusión

1. ¿Qué diferencia existe entre `margin` y `padding`?
2. ¿Qué es la especificidad?
3. ¿Qué significa que CSS funciona en cascada?
4. ¿Por qué `box-sizing: border-box` es útil?
5. ¿Cuándo usar Flexbox?
6. ¿Cuándo usar Grid?
7. ¿Cuál es la diferencia entre `absolute`, `fixed` y `sticky`?
8. ¿Qué significa Mobile First?
9. ¿Por qué no conviene usar `!important` en exceso?
10. ¿Qué ventajas tienen las variables CSS?
11. ¿Qué problema resuelve `clamp()`?
12. ¿Qué diferencia existe entre `px`, `em` y `rem`?
13. ¿Por qué es importante `focus-visible`?
14. ¿Qué hace `object-fit: cover`?
15. ¿Qué significa diseño responsive?

---

# 118. Quiz

## Pregunta 1

¿Qué selector representa una clase?

A. `#menu`  
B. `.menu`  
C. `menu`  
D. `*menu`

## Pregunta 2

¿Qué propiedad controla el espacio interno?

A. `margin`  
B. `padding`  
C. `gap`  
D. `border`

## Pregunta 3

¿Qué activa Flexbox?

A. `position: flex`  
B. `display: flex`  
C. `flex: display`  
D. `layout: flex`

## Pregunta 4

¿Qué activa CSS Grid?

A. `display: grid`  
B. `grid: true`  
C. `position: grid`  
D. `layout: grid`

## Pregunta 5

¿Qué unidad es relativa al elemento raíz?

A. `px`  
B. `%`  
C. `rem`  
D. `vh`

## Pregunta 6

¿Qué regla se utiliza para Responsive Design?

A. `@responsive`  
B. `@screen`  
C. `@media`  
D. `@device`

## Pregunta 7

¿Qué propiedad controla la dirección en Flexbox?

A. `flex-direction`  
B. `justify-content`  
C. `align-items`  
D. `grid-direction`

---

# 119. Respuestas del quiz

```text
1 → B
2 → B
3 → B
4 → A
5 → C
6 → C
7 → A
```

---

# 120. Ejercicio de depuración avanzada

Analiza:

```css
.contenedor {
    width: 1200px;
    display: flex;
}

.tarjeta {
    width: 400px;
    margin-left: 50px;
}

@media (max-width: 768px) {

    .contenedor {
        width: 1200px;
    }

}
```

Responde:

1. ¿Qué problemas puede causar?
2. ¿Por qué puede aparecer scroll horizontal?
3. ¿Qué cambiarías?
4. ¿Usarías `width`, `max-width` o ambos?
5. ¿Podría Grid ser una alternativa?

---

# 121. Práctica de refactorización

Convierte:

```css
.boton1 {
    background: blue;
    color: white;
    padding: 10px 20px;
}

.boton2 {
    background: blue;
    color: white;
    padding: 10px 20px;
}

.boton3 {
    background: blue;
    color: white;
    padding: 10px 20px;
}
```

en una solución reutilizable.

Posible objetivo:

```css
.boton {
}
```

y modificadores cuando sean necesarios.

---

# 122. Reto final — Landing Page

Crea una landing page completa para un curso universitario.

Debe incluir:

```text
Header
Navegación
Hero
Beneficios
Cursos
Profesores
Testimonios
Formulario
Footer
```

Debe aplicar:

- Mobile First.
- Flexbox.
- CSS Grid.
- Variables CSS.
- `clamp()`.
- Pseudoclases.
- Pseudoelementos.
- Transiciones.
- `focus-visible`.
- `prefers-reduced-motion`.
- Imágenes responsive.
- Buen contraste.
- Componentes reutilizables.

---

# 123. Checklist de CSS

Antes de entregar:

- [ ] CSS está correctamente enlazado.
- [ ] No existen errores de sintaxis.
- [ ] Se utiliza `box-sizing: border-box`.
- [ ] Hay variables CSS para valores repetidos.
- [ ] Se utilizan clases reutilizables.
- [ ] No se abusa de IDs.
- [ ] No se abusa de `!important`.
- [ ] El diseño funciona en móvil.
- [ ] El diseño funciona en tablet.
- [ ] El diseño funciona en escritorio.
- [ ] Las imágenes son responsive.
- [ ] Los botones tienen estado hover.
- [ ] Los controles tienen estado focus.
- [ ] El foco es visible.
- [ ] Hay contraste suficiente.
- [ ] Se usan Flexbox y Grid correctamente.
- [ ] No hay scroll horizontal accidental.
- [ ] El contenido no depende de alturas fijas innecesarias.
- [ ] El código está organizado.
- [ ] Los nombres de clases son comprensibles.
- [ ] Las animaciones respetan movimiento reducido.

---

# 124. Hoja rápida de referencia

## Selector

```css
.clase {
    propiedad: valor;
}
```

## Color

```css
color: #222;
background-color: #f5f5f5;
```

## Tamaño

```css
width: 100%;
max-width: 1200px;
min-height: 100vh;
```

## Espaciado

```css
margin: 1rem;
padding: 1rem;
gap: 1rem;
```

## Borde

```css
border: 1px solid #ddd;
border-radius: 0.5rem;
```

## Flexbox

```css
.contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
```

## Grid

```css
.contenedor {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));

    gap: 1rem;
}
```

## Responsive

```css
@media (min-width: 768px) {

    .elemento {
        ...
    }

}
```

## Variables

```css
:root {
    --color-primario: #1e3a8a;
}
```

## Hover

```css
a:hover {
    ...
}
```

## Focus

```css
a:focus-visible {
    outline: 3px solid blue;
}
```

## Transición

```css
.elemento {
    transition: 0.3s ease;
}
```

---

# 125. Actividad en parejas

Un estudiante diseña un componente y otro lo revisa.

Componentes posibles:

```text
navbar
tarjeta
formulario
tabla
alerta
footer
hero
```

El revisor evalúa:

- selectores;
- reutilización;
- especificidad;
- Box Model;
- responsive;
- accesibilidad;
- legibilidad;
- consistencia.

Luego intercambian roles.

---

# 126. Actividad de investigación

Investiga cinco características modernas de CSS.

Opciones:

```text
Container Queries
Subgrid
:has()
CSS Nesting
Logical Properties
Scroll Snap
View Transitions
Color Mix
Cascade Layers
Aspect Ratio
```

Para cada una explica:

1. Qué problema resuelve.
2. Sintaxis básica.
3. Ejemplo.
4. Cuándo usarla.
5. Limitaciones o consideraciones.

---

# 127. Cascade Layers — introducción

CSS moderno permite organizar prioridades con:

```css
@layer reset, base, components, utilities;
```

Ejemplo:

```css
@layer base {

    body {
        font-family: sans-serif;
    }

}

@layer components {

    .boton {
        padding: 1rem;
    }

}
```

Ayuda a controlar la cascada en proyectos grandes.

---

# 128. CSS Nesting — introducción

CSS moderno permite anidar algunas reglas.

Ejemplo:

```css
.tarjeta {

    padding: 1rem;

    & h2 {
        margin-top: 0;
    }

    &:hover {
        transform: translateY(-2px);
    }

}
```

Conviene usarlo con moderación para evitar selectores demasiado complejos.

---

# 129. Scroll Snap — introducción

```css
.galeria {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

.galeria > * {
    scroll-snap-align: start;
}
```

Puede ser útil en carruseles simples.

---

# 130. Subgrid — introducción

```css
.tarjeta {
    display: grid;
    grid-template-rows: subgrid;
}
```

`subgrid` permite que elementos internos compartan la estructura de la cuadrícula padre.

---

# 131. Proyecto de laboratorio

Construye un dashboard universitario con:

```text
Sidebar
Header
Tarjetas de métricas
Tabla de cursos
Panel de avisos
Formulario
Footer
```

Debe usar:

```text
CSS Grid para layout principal
Flexbox para barras y componentes
variables CSS
responsive design
estados hover
estados focus
tablas responsive
componentes reutilizables
```

---

# 132. Criterios de calidad profesional

Un CSS de buena calidad debería:

- ser legible;
- ser consistente;
- evitar duplicación;
- evitar dependencias innecesarias;
- utilizar nombres claros;
- ser responsive;
- mantener buen contraste;
- respetar foco visible;
- utilizar layouts modernos;
- separar estructura y presentación;
- ser fácil de mantener.

---

# 133. Reflexión final

Responde:

> ¿Qué características hacen que una interfaz sea visualmente atractiva sin sacrificar mantenibilidad, accesibilidad y capacidad de adaptación?

Considera:

- contraste;
- espaciado;
- tipografía;
- jerarquía visual;
- responsive design;
- consistencia;
- interacción;
- accesibilidad;
- reutilización de estilos;
- Flexbox y Grid.

---

# 134. Ruta de aprendizaje recomendada

```text
CSS básico
 ↓
Selectores
 ↓
Cascada y especificidad
 ↓
Box Model
 ↓
Flexbox
 ↓
CSS Grid
 ↓
Responsive Design
 ↓
Pseudoclases
 ↓
Transiciones
 ↓
Animaciones
 ↓
Variables CSS
 ↓
Arquitectura CSS
 ↓
Accesibilidad
 ↓
CSS moderno
```

---

# Conclusión

CSS no consiste únicamente en "poner colores".

Un desarrollador frontend debe comprender:

```text
cascada
+
layout
+
responsive design
+
accesibilidad
+
componentes
+
mantenibilidad
```

Dominar CSS permite convertir una estructura HTML en una interfaz clara, usable, adaptable y profesional.
