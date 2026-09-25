# Unidad 1: Fundamentos de HTML y CSS

**Ingeniería de Sistemas — Programación Web**
*De la estructura de un documento web al diseño responsive*

Material de clase — 2026

---

## Contenido de la unidad

1. Introducción al desarrollo web
2. Estructura de documentos HTML
3. Etiquetas y atributos HTML
4. Textos, enlaces, imágenes y listas
5. Tablas HTML
6. Formularios HTML
7. Controles de formulario
8. Introducción a CSS
9. Selectores y especificidad
10. Colores, fuentes y texto
11. Box Model
12. Márgenes, padding y bordes
13. Flexbox
14. CSS Grid
15. Diseño responsive
16. Organización y buenas prácticas de HTML y CSS

---

## Objetivos de aprendizaje

Al finalizar esta unidad, el estudiante será capaz de:

- Explicar el funcionamiento básico del modelo cliente-servidor en el desarrollo web.
- Construir documentos HTML5 semánticos, válidos y correctamente estructurados.
- Crear formularios funcionales con los controles de entrada adecuados para cada tipo de dato.
- Aplicar selectores CSS de forma precisa y comprender el sistema de especificidad y cascada.
- Explicar y aplicar correctamente el modelo de caja (Box Model) en el diseño de interfaces.
- Construir layouts modernos utilizando Flexbox y CSS Grid.
- Diseñar interfaces responsive mediante media queries y unidades relativas.
- Aplicar buenas prácticas de organización, semántica y accesibilidad en proyectos HTML/CSS.

---

## Tema 1. Introducción al desarrollo web

*🟧 BLOQUE HTML*

El desarrollo web es el conjunto de disciplinas encargadas de construir sitios y aplicaciones que se ejecutan en un navegador. Toda página web es el resultado de una conversación entre un cliente (el navegador) y un servidor: el cliente solicita un recurso mediante el protocolo HTTP/HTTPS y el servidor responde entregando archivos HTML, CSS, JavaScript, imágenes y otros recursos que el navegador interpreta y renderiza en pantalla.

### Conceptos clave

- WWW (World Wide Web): sistema de documentos interconectados por hipervínculos, accesibles a través de Internet.
- Modelo cliente-servidor: el navegador (cliente) solicita recursos; un servidor web los procesa y responde.
- HTTP/HTTPS: protocolos de transferencia de hipertexto; HTTPS añade cifrado (TLS) a la comunicación.
- Front-end: todo lo que se ejecuta y se ve en el navegador (HTML, CSS, JavaScript).
- Back-end: lógica de servidor, bases de datos y APIs que el front-end consume.
- DOM (Document Object Model): representación en memoria de la página que el navegador construye a partir del HTML.
- Navegador web: motor de renderizado (parsing de HTML/CSS) y motor de JavaScript que interpretan los archivos recibidos.

> **📘 Nota**
>
> HTML define la estructura y el contenido de una página; CSS define su presentación visual; JavaScript añade comportamiento e interactividad. Esta separación de responsabilidades es uno de los principios más importantes del desarrollo web.

### Ejercicios

1. Investigue y explique con sus propias palabras la diferencia entre desarrollo front-end y back-end, citando un ejemplo de tecnología para cada uno.
2. Abra cualquier sitio web en su navegador y use la opción "Ver código fuente" o las herramientas de desarrollador (F12). Identifique al menos tres etiquetas HTML distintas presentes en la página.
3. Explique qué ocurre, paso a paso, desde que un usuario escribe una URL en el navegador hasta que la página aparece en pantalla.

---

## Tema 2. Estructura de documentos HTML

*🟧 BLOQUE HTML*

Todo documento HTML sigue una estructura estándar compuesta por una declaración de tipo de documento y dos grandes secciones: el encabezado (head), que contiene metadatos no visibles, y el cuerpo (body), que contiene el contenido visible de la página.

### Conceptos clave

- <!DOCTYPE html>: indica al navegador que el documento usa HTML5.
- <html lang="es">: elemento raíz del documento; el atributo lang mejora accesibilidad y SEO.
- <head>: contiene metadatos, título, enlaces a hojas de estilo y scripts que no se muestran directamente.
- <meta charset="UTF-8">: define la codificación de caracteres del documento.
- <meta name="viewport">: controla el escalado en dispositivos móviles.
- <title>: define el texto que aparece en la pestaña del navegador.
- <body>: contiene todo el contenido visible: texto, imágenes, enlaces, formularios, etc.

### Ejemplo — Estructura mínima de un documento HTML5

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
</head>
<body>
  <h1>Bienvenido a mi sitio web</h1>
  <p>Este es un párrafo de ejemplo.</p>
</body>
</html>
```

> **⚠️ Advertencia**
>
> Omitir el <!DOCTYPE html> obliga a los navegadores antiguos a renderizar la página en "modo quirks", provocando comportamientos inconsistentes en el diseño.

### Ejercicios

1. Cree un archivo llamado index.html con la estructura básica HTML5 y ábralo en su navegador.
2. Modifique el <title> y el contenido del <body> de su archivo y verifique el cambio en la pestaña del navegador.
3. Investigue qué ocurre si elimina la etiqueta <meta name="viewport"> y visualiza la página desde un teléfono móvil (o el modo responsive de las herramientas de desarrollador).

---

## Tema 3. Etiquetas y atributos HTML

*🟧 BLOQUE HTML*

Una etiqueta (tag) es la unidad básica de HTML. La mayoría de etiquetas tienen apertura y cierre y encierran contenido, formando un elemento; otras son "vacías" (void elements) porque no encierran contenido ni tienen etiqueta de cierre. Los atributos se escriben dentro de la etiqueta de apertura y proporcionan información adicional sobre el elemento.

### Conceptos clave

- Elemento = etiqueta de apertura + contenido + etiqueta de cierre. Ejemplo: <p>Texto</p>.
- Elementos vacíos (void elements): no llevan cierre. Ejemplos: <img>, <br>, <hr>, <input>, <meta>.
- Atributo: par nombre="valor" escrito dentro de la etiqueta de apertura. Ejemplo: <img src="foto.jpg">.
- Atributos globales: pueden usarse en casi cualquier elemento (id, class, style, title, data-*).
- id: identificador único dentro del documento (no se repite).
- class: identifica un grupo de elementos que comparten estilo o comportamiento; puede repetirse.
- Anidamiento correcto: los elementos deben cerrarse en el orden inverso al de apertura (no deben "cruzarse").

### Ejemplo — Etiquetas, elementos y atributos

```html
<p id="parrafo-intro" class="texto-destacado" title="Párrafo introductorio">
  Este párrafo usa tres atributos distintos.
</p>

<img src="logo.png" alt="Logo de la universidad" width="150">

<!-- Anidamiento correcto -->
<div>
  <p>Texto <strong>importante</strong> dentro de un párrafo.</p>
</div>
```

> **💡 Tip**
>
> El atributo alt en las imágenes no es opcional: es leído por lectores de pantalla y se muestra si la imagen no carga. Siempre debe describir el contenido de la imagen.

### Ejercicios

1. Liste cinco elementos vacíos (void elements) de HTML distintos a los mencionados en el ejemplo.
2. Explique la diferencia entre id y class, e indique un caso de uso apropiado para cada uno.
3. Corrija el siguiente código, que tiene un error de anidamiento: <b><i>texto</b></i>

---

## Tema 4. Textos, enlaces, imágenes y listas

*🟧 BLOQUE HTML*

HTML ofrece un conjunto de elementos semánticos para organizar texto (encabezados y párrafos), enlazar recursos (hipervínculos), incrustar imágenes y agrupar información en listas. Dominar estos elementos es la base para construir cualquier página de contenido.

### Conceptos clave

- Encabezados <h1> a <h6>: jerarquía de títulos; <h1> es el más importante y debe existir uno por página.
- Párrafos <p>: bloques de texto independientes.
- Formato de texto: <strong> (importancia), <em> (énfasis), <mark>, <small>, <br> (salto de línea).
- Hipervínculos <a href="...">: el atributo target="_blank" abre el enlace en una nueva pestaña; los enlaces internos usan anclas (#seccion).
- Imágenes <img src="..." alt="...">: src indica la ruta del archivo; alt es el texto alternativo.
- Listas desordenadas <ul><li>: para elementos sin orden específico.
- Listas ordenadas <ol><li>: para elementos con secuencia o prioridad.
- Listas de definición <dl><dt><dd>: para pares término-descripción.

### Ejemplo — Página de presentación personal

```html
<h1>Ana Martínez</h1>
<p>Estudiante de <strong>Ingeniería de Sistemas</strong>.</p>

<img src="perfil.jpg" alt="Foto de perfil de Ana Martínez" width="200">

<p>Sígueme en:
  <a href="https://github.com/anamartinez" target="_blank">GitHub</a>
</p>

<h2>Habilidades</h2>
<ul>
  <li>HTML y CSS</li>
  <li>Java</li>
  <li>Bases de datos</li>
</ul>

<h2>Idiomas (por nivel)</h2>
<ol>
  <li>Español</li>
  <li>Inglés</li>
</ol>
```

> **📘 Nota**
>
> Nunca se debe saltar niveles de encabezado por razones de estilo (por ejemplo, usar <h3> solo porque el texto es más pequeño). El tamaño se controla con CSS; la jerarquía de encabezados debe reflejar la estructura lógica del contenido.

### Ejercicios

1. Construya una página "Sobre mí" que incluya un encabezado principal, un párrafo, una imagen con su respectivo alt, un enlace externo y una lista de al menos tres elementos.
2. Cree una lista de definición con tres términos técnicos vistos en este tema y su definición.
3. Explique por qué usar <strong> es distinto (en significado) a simplemente aplicarle negrita con CSS a un <span>.

---

## Tema 5. Tablas HTML

*🟧 BLOQUE HTML*

Las tablas HTML permiten organizar datos tabulares en filas y columnas. Su uso correcto se limita a la presentación de datos (horarios, resultados, comparaciones), nunca a la maquetación general de una página, tarea que corresponde a CSS.

### Conceptos clave

- <table>: contenedor de la tabla.
- <tr> (table row): define una fila.
- <th> (table header): celda de encabezado, en negrita y centrada por defecto.
- <td> (table data): celda de datos.
- <thead>, <tbody>, <tfoot>: agrupan lógicamente el encabezado, el cuerpo y el pie de la tabla.
- <caption>: título descriptivo de la tabla.
- colspan: hace que una celda ocupe varias columnas.
- rowspan: hace que una celda ocupe varias filas.

### Ejemplo — Horario de clases con celdas combinadas

```html
<table border="1">
  <caption>Horario de clases - Semestre I</caption>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Miércoles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:00 - 10:00</td>
      <td colspan="2">Arquitectura de Computadores</td>
    </tr>
    <tr>
      <td>10:00 - 12:00</td>
      <td rowspan="2">Programación</td>
      <td>Bases de Datos</td>
    </tr>
    <tr>
      <td>12:00 - 14:00</td>
      <td>Bases de Datos</td>
    </tr>
  </tbody>
</table>
```

> **⚠️ Advertencia**
>
> Usar tablas para maquetar el diseño general de una página (menús, columnas, layouts) es una mala práctica heredada de los años 90. Para maquetación se deben usar Flexbox o CSS Grid, temas que se verán más adelante en esta unidad.

### Ejercicios

1. Construya una tabla que muestre las notas de tres estudiantes en tres cortes evaluativos, incluyendo una fila de encabezado.
2. Modifique la tabla del ejemplo para añadir una fila de pie (<tfoot>) que muestre el total de horas semanales.
3. Explique la diferencia entre colspan y rowspan con un ejemplo propio distinto al del material.

---

## Tema 6. Formularios HTML

*🟧 BLOQUE HTML*

Los formularios permiten capturar información del usuario y enviarla a un servidor para su procesamiento. El elemento <form> actúa como contenedor de todos los controles de entrada y define cómo y hacia dónde se enviarán los datos.

### Conceptos clave

- <form action="url" method="GET|POST">: define el destino y el método de envío de los datos.
- method="GET": envía los datos visibles en la URL; adecuado para búsquedas, no para datos sensibles.
- method="POST": envía los datos en el cuerpo de la petición; adecuado para formularios que modifican datos o incluyen información sensible.
- <label for="idDelControl">: asocia un texto descriptivo a un control; mejora la accesibilidad y permite hacer clic en el texto para enfocar el control.
- El atributo name de cada control es el que se usa para identificar el dato en el servidor (no id).
- <fieldset> y <legend>: agrupan visualmente y semánticamente un conjunto de controles relacionados.

### Ejemplo — Estructura base de un formulario de contacto

```html
<form action="/enviar-contacto" method="POST">
  <fieldset>
    <legend>Datos de contacto</legend>

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" name="correo">
  </fieldset>

  <button type="submit">Enviar</button>
</form>
```

> **📘 Nota**
>
> Un error muy común es confundir id con name. El id se usa para enlazar el <label> y para CSS/JavaScript; el name es el que realmente viaja al servidor como clave del dato enviado.

### Ejercicios

1. Explique con sus propias palabras cuándo usaría method="GET" y cuándo method="POST".
2. Cree un formulario vacío (sin controles aún) con action y method correctamente definidos, agrupado dentro de un <fieldset> con su <legend>.
3. Investigue qué atributo del formulario permite deshabilitar el autocompletado del navegador.

---

## Tema 7. Controles de formulario

*🟧 BLOQUE HTML*

HTML5 ofrece una gran variedad de controles de entrada especializados que facilitan la captura y validación básica de datos directamente en el navegador, sin necesidad de JavaScript adicional.

### Conceptos clave

- <input type="text|password|email|number|date|tel|url|file|checkbox|radio|range|color">: cambia el tipo de teclado, la validación y el widget mostrado.
- <select><option>: lista desplegable de opciones; admite el atributo multiple para selección múltiple.
- <textarea>: área de texto multilínea.
- <button type="submit|reset|button">: controla el comportamiento del botón dentro del formulario.
- Atributos de validación nativa: required, min, max, minlength, maxlength, pattern, placeholder.
- Los checkbox permiten selección múltiple independiente; los radio (agrupados por el mismo name) permiten una única selección.

### Ejemplo — Formulario de registro con distintos controles

```html
<form>
  <label for="usuario">Usuario:</label>
  <input type="text" id="usuario" name="usuario" required minlength="4">

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="18" max="99">

  <label for="carrera">Carrera:</label>
  <select id="carrera" name="carrera">
    <option value="sistemas">Ingeniería de Sistemas</option>
    <option value="industrial">Ingeniería Industrial</option>
  </select>

  <p>Sexo:</p>
  <input type="radio" id="f" name="sexo" value="f"><label for="f">Femenino</label>
  <input type="radio" id="m" name="sexo" value="m"><label for="m">Masculino</label>

  <label for="comentarios">Comentarios:</label>
  <textarea id="comentarios" name="comentarios" rows="4"></textarea>

  <input type="checkbox" id="terminos" name="terminos" required>
  <label for="terminos">Acepto los términos y condiciones</label>

  <button type="submit">Registrarme</button>
</form>
```

> **💡 Tip**
>
> Los atributos de validación nativa (required, pattern, min, max) no reemplazan la validación en el servidor: son una primera capa de comodidad para el usuario, pero los datos siempre deben validarse nuevamente en el back-end.

### Ejercicios

1. Amplíe el formulario de registro agregando un campo de tipo date para la fecha de nacimiento y uno de tipo file para subir una foto.
2. Explique la diferencia de comportamiento entre varios <input type="checkbox"> y varios <input type="radio"> que comparten el mismo name.
3. Investigue el atributo pattern y escriba una expresión que valide que un campo de texto solo acepte exactamente 8 dígitos numéricos.

---

## Tema 8. Introducción a CSS

*🟦 BLOQUE CSS*

CSS (Cascading Style Sheets) es el lenguaje que describe cómo se presentan visualmente los elementos HTML: colores, tipografías, espaciados y disposición en la página. CSS trabaja seleccionando elementos HTML y aplicándoles un conjunto de propiedades y valores.

### Conceptos clave

- Sintaxis básica: selector { propiedad: valor; }
- CSS en línea (inline): atributo style="" directamente en el elemento; máxima especificidad, poco recomendable.
- CSS interno: bloque <style> dentro del <head> del documento.
- CSS externo: archivo .css independiente enlazado con <link rel="stylesheet" href="estilos.css">; es la forma recomendada porque separa contenido de presentación y permite reutilización.
- Cascada: cuando varias reglas aplican al mismo elemento, gana la de mayor especificidad; en caso de empate, la declarada más tarde en el código.
- Herencia: algunas propiedades (como color o font-family) se heredan automáticamente de un elemento padre a sus hijos, salvo que se sobrescriban.

### Ejemplo — Las tres formas de aplicar CSS

```css
<!-- 1. Inline -->
<p style="color: blue;">Texto en azul</p>

<!-- 2. Interno -->
<head>
  <style>
    p { color: green; }
  </style>
</head>

<!-- 3. Externo (recomendado) -->
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

> **⚠️ Advertencia**
>
> El CSS en línea (style="") debe evitarse en proyectos reales: mezcla contenido y presentación, tiene la especificidad más alta (dificultando sobrescribirlo) y no puede reutilizarse en otros elementos.

### Ejercicios

1. Cree un archivo estilos.css externo y enlácelo a su archivo index.html del tema 2.
2. Explique con un ejemplo propio el concepto de herencia en CSS.
3. Dado un párrafo con estilo inline color:red y una regla en <style> p{color:blue;}, indique qué color se mostrará y por qué.

---

## Tema 9. Selectores y especificidad

*🟦 BLOQUE CSS*

Los selectores determinan a qué elementos del documento se aplicará una regla CSS. Cuando varios selectores compiten por el mismo elemento, un sistema numérico llamado especificidad decide cuál regla prevalece.

### Conceptos clave

- Selector universal: * selecciona todos los elementos.
- Selector de tipo (etiqueta): p, h1, div seleccionan por nombre de etiqueta.
- Selector de clase: .destacado selecciona todos los elementos con class="destacado".
- Selector de id: #encabezado selecciona el elemento único con ese id.
- Selector de atributo: [type="email"] selecciona por presencia o valor de atributo.
- Pseudo-clases: :hover, :focus, :first-child, :nth-child(n) seleccionan según estado o posición.
- Pseudo-elementos: ::before, ::after permiten insertar contenido generado.
- Combinadores: A B (descendiente), A > B (hijo directo), A + B (hermano adyacente), A ~ B (hermanos generales).

### Ejemplo — Tabla de especificidad (de menor a mayor peso)

```css
Selector universal (*)                 -> especificidad 0-0-0
Selector de etiqueta (p, div)          -> especificidad 0-0-1
Selector de clase (.clase)             -> especificidad 0-1-0
Selector de atributo ([type="text"])   -> especificidad 0-1-0
Pseudo-clase (:hover)                  -> especificidad 0-1-0
Selector de id (#id)                   -> especificidad 1-0-0
Estilo en línea (style="")             -> mayor que cualquier selector
!important                             -> sobrescribe toda la cascada normal
```

> **💡 Tip**
>
> La especificidad se calcula sumando por categoría, no como un solo número: 2 clases (0-2-0) siempre le ganan a 1 etiqueta (0-0-1), sin importar cuántas etiquetas se combinen, mientras no haya un id de por medio.

### Ejercicios

1. Calcule la especificidad de los siguientes selectores: nav ul li a, .menu .activo, #principal p.destacado.
2. Escriba un selector que aplique estilo únicamente al primer <li> de cada <ul>.
3. Explique por qué abusar de !important dificulta el mantenimiento de una hoja de estilos.

---

## Tema 10. Colores, fuentes y texto

*🟦 BLOQUE CSS*

CSS ofrece múltiples formas de definir colores y un conjunto amplio de propiedades para controlar la tipografía y la apariencia del texto, aspectos clave para la legibilidad y la identidad visual de un sitio.

### Conceptos clave

- Colores con nombre: red, navy, tomato (limitados y poco flexibles).
- Hexadecimal: #RRGGBB o #RGB, por ejemplo #3498db.
- RGB / RGBA: rgb(52, 152, 219) y rgba(52, 152, 219, 0.5) para incluir transparencia (canal alfa).
- HSL / HSLA: hsl(matiz, saturación%, luminosidad%), útil para crear variaciones de un mismo color.
- font-family: lista de fuentes con fallback, terminando en una familia genérica (sans-serif, serif, monospace).
- font-size, font-weight, font-style: tamaño, grosor y estilo (cursiva) del texto.
- text-align, text-decoration, line-height, letter-spacing: alineación, subrayado/tachado, interlineado y espaciado entre letras.
- Fuentes web (Google Fonts, @font-face): permiten usar tipografías personalizadas más allá de las "web-safe" del sistema.

### Ejemplo — Propiedades de color y texto

```css
h1 {
  color: #2c3e50;
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
}

p {
  color: rgba(0, 0, 0, 0.8);
  font-family: Georgia, serif;
  line-height: 1.6;
  letter-spacing: 0.3px;
}

a {
  color: hsl(210, 80%, 45%);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

> **📘 Nota**
>
> Siempre se debe definir una fuente genérica de respaldo (sans-serif, serif, monospace) al final de la lista de font-family, por si ninguna de las fuentes preferidas está disponible en el dispositivo del usuario.

### Ejercicios

1. Convierta el color hexadecimal #E74C3C a su equivalente aproximado en formato rgb().
2. Aplique tres formas distintas de definir color (nombre, hex, rgba) a tres párrafos diferentes en un mismo documento.
3. Investigue cómo importar una fuente de Google Fonts y aplíquela al <h1> de su página.

---

## Tema 11. Box Model

*🟦 BLOQUE CSS*

El modelo de caja (Box Model) es el principio fundamental que explica cómo CSS calcula el tamaño y el espacio que ocupa cada elemento en la página. Todo elemento HTML se representa internamente como una caja rectangular compuesta por cuatro capas concéntricas.

### Conceptos clave

- Content: el contenido real del elemento (texto, imagen), definido por width y height.
- Padding: espacio interno entre el contenido y el borde del elemento.
- Border: línea que rodea el padding y el contenido.
- Margin: espacio externo entre el borde del elemento y los elementos vecinos.
- box-sizing: content-box (por defecto): width/height solo definen el contenido; padding y border se suman al tamaño final.
- box-sizing: border-box: width/height incluyen padding y border, facilitando cálculos de layout.

### Ejemplo — Cálculo del tamaño total de una caja

```css
.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  box-sizing: content-box; /* valor por defecto */
}
/* Ancho total renderizado =
   200 (content) + 20*2 (padding) + 5*2 (border) = 250px
   El margin (10px) no cuenta como parte de la caja,
   pero sí desplaza a los elementos vecinos. */

.caja-moderna {
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  box-sizing: border-box;
}
/* Con border-box, el ancho total renderizado es exactamente 200px:
   el padding y el border se descuentan del contenido internamente. */
```

> **💡 Tip**
>
> Una práctica muy extendida en proyectos profesionales es aplicar *{ box-sizing: border-box; } de forma global al inicio de la hoja de estilos, para que todos los cálculos de ancho y alto sean más predecibles.

### Ejercicios

1. Dado un elemento con width:150px, padding:15px y border:3px solid, calcule su ancho total renderizado bajo content-box y bajo border-box.
2. Dibuje (en un diagrama o descripción escrita) las cuatro capas del box model de un elemento a su elección.
3. Explique por qué el margin no forma parte del "tamaño" de la caja aunque sí afecta el espacio que ocupa en el layout.

---

## Tema 12. Márgenes, padding y bordes

*🟦 BLOQUE CSS*

CSS ofrece notación abreviada (shorthand) para definir márgenes, padding y bordes de forma más concisa, así como reglas especiales de comportamiento como el colapso de márgenes verticales.

### Conceptos clave

- Shorthand de 4 valores: margin: 10px 20px 15px 5px; sigue el orden arriba-derecha-abajo-izquierda (sentido horario).
- Shorthand de 2 valores: margin: 10px 20px; equivale a arriba/abajo 10px, izquierda/derecha 20px.
- Propiedades individuales: margin-top, margin-right, margin-bottom, margin-left (y sus equivalentes para padding).
- Colapso de márgenes (margin collapsing): los márgenes verticales de elementos en bloque adyacentes se fusionan, tomando el valor mayor en vez de sumarse.
- border-style, border-width, border-color y su shorthand border: 2px solid #000;
- border-radius: redondea las esquinas del elemento; permite crear círculos con valores de 50%.
- box-shadow: propiedad relacionada que añade sombra alrededor de la caja (offset-x, offset-y, blur, color).

### Ejemplo — Shorthand de margin, padding y border

```css
.tarjeta {
  margin: 20px auto;         /* 20px arriba/abajo, centrado horizontal */
  padding: 15px 25px;        /* 15px arriba/abajo, 25px izq/der */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;        /* convierte el cuadrado en círculo */
  border: 3px solid #2c3e50;
}
```

> **⚠️ Advertencia**
>
> El colapso de márgenes solo ocurre con márgenes verticales entre elementos en flujo normal (block); no ocurre en elementos con display:flex, display:grid, ni en márgenes horizontales.

### Ejercicios

1. Escriba, usando la notación abreviada de 4 valores, un margin de 5px arriba, 10px derecha, 15px abajo y 20px izquierda.
2. Cree una tarjeta (div) con padding, border-radius y box-shadow que simule una tarjeta de presentación.
3. Investigue y explique con un ejemplo qué ocurre cuando dos elementos hermanos tienen margin-bottom: 30px y margin-top: 20px respectivamente.

---

## Tema 13. Flexbox

*🟦 BLOQUE CSS*

Flexbox (Flexible Box Layout) es un modelo de layout unidimensional diseñado para distribuir espacio entre elementos dentro de un contenedor, ya sea en fila o en columna, incluso cuando su tamaño es desconocido o dinámico.

### Conceptos clave

- display: flex; convierte un elemento en contenedor flex; sus hijos directos se convierten en ítems flex.
- flex-direction: row (por defecto) | column: define el eje principal.
- justify-content: alinea los ítems a lo largo del eje principal (flex-start, center, space-between, space-around).
- align-items: alinea los ítems a lo largo del eje transversal (stretch, center, flex-start, flex-end).
- flex-wrap: nowrap (por defecto) | wrap: permite que los ítems pasen a una nueva línea si no caben.
- gap: define el espacio entre ítems sin necesidad de márgenes manuales.
- flex-grow, flex-shrink, flex-basis (o su shorthand flex): controlan cómo crece o se reduce cada ítem individual.

### Ejemplo — Barra de navegación con Flexbox

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #2c3e50;
}

.navbar .enlaces {
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}
```

> **💡 Tip**
>
> Una forma fácil de recordar Flexbox: justify-content controla el eje en el que "fluyen" los elementos (horizontal por defecto), mientras que align-items controla el eje perpendicular a ese flujo.

### Ejercicios

1. Construya una tarjeta de producto (imagen, título, precio y botón) usando flex-direction: column.
2. Cree tres cajas del mismo contenedor flex y experimente con distintos valores de justify-content, documentando la diferencia visual.
3. Investigue la diferencia entre align-items (para todos los ítems) y align-self (para un ítem individual).

---

## Tema 14. CSS Grid

*🟦 BLOQUE CSS*

CSS Grid es un sistema de layout bidimensional que permite definir filas y columnas simultáneamente, siendo ideal para estructurar el diseño general de una página (encabezado, barra lateral, contenido principal, pie de página).

### Conceptos clave

- display: grid; convierte un elemento en contenedor de cuadrícula.
- grid-template-columns / grid-template-rows: definen el número y tamaño de columnas y filas.
- La unidad fr representa una fracción del espacio disponible en el contenedor.
- gap (o row-gap / column-gap): define el espacio entre celdas de la cuadrícula.
- grid-column / grid-row: permiten que un ítem ocupe varias columnas o filas (ej. grid-column: 1 / 3;).
- grid-template-areas: permite nombrar regiones de la cuadrícula y asignar elementos a ellas de forma visual y legible.

### Ejemplo — Layout de página con grid-template-areas

```css
.contenedor {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "encabezado encabezado"
    "sidebar    contenido"
    "pie        pie";
  gap: 10px;
  min-height: 100vh;
}

header  { grid-area: encabezado; }
aside   { grid-area: sidebar; }
main    { grid-area: contenido; }
footer  { grid-area: pie; }
```

> **📘 Nota**
>
> Flexbox y Grid no son excluyentes: es muy común usar Grid para el layout general de la página y Flexbox dentro de componentes individuales (como una barra de navegación o una tarjeta).

### Ejercicios

1. Construya el layout de una página con encabezado, barra lateral, contenido principal y pie de página usando grid-template-areas.
2. Modifique el ejemplo para que, en pantallas pequeñas, el sidebar pase a ocupar todo el ancho (una sola columna).
3. Explique con sus propias palabras cuándo usaría Grid en lugar de Flexbox para un diseño determinado.

---

## Tema 15. Diseño responsive

*🟦 BLOQUE CSS*

El diseño responsive busca que una misma página se vea y funcione correctamente en dispositivos con tamaños de pantalla muy distintos (celulares, tablets, monitores), adaptando el layout, los tamaños y, en ocasiones, el contenido mostrado.

### Conceptos clave

- <meta name="viewport" content="width=device-width, initial-scale=1.0">: indispensable para que el diseño responsive funcione en móviles.
- Media queries: @media (max-width: 768px) { ... } aplican reglas CSS solo cuando se cumple una condición de ancho de pantalla (u otra característica).
- Enfoque mobile-first: se escriben primero los estilos para pantallas pequeñas y luego se amplían con min-width para pantallas mayores.
- Unidades relativas: % (relativo al padre), em (relativo al font-size del elemento padre), rem (relativo al font-size raíz), vw/vh (relativo al viewport).
- Imágenes responsivas: max-width: 100%; height: auto; evita que una imagen desborde su contenedor.
- Breakpoints comunes: puntos de quiebre donde el layout cambia (ej. 480px, 768px, 1024px), definidos según el contenido, no según dispositivos específicos.

### Ejemplo — Media queries con enfoque mobile-first

```css
/* Estilos base: pensados para móvil */
.contenedor {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: auto;
}

/* A partir de 768px (tablets en adelante) */
@media (min-width: 768px) {
  .contenedor {
    flex-direction: row;
  }
}

/* A partir de 1024px (escritorio) */
@media (min-width: 1024px) {
  .contenedor {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

> **⚠️ Advertencia**
>
> Usar únicamente unidades fijas en píxeles (px) para tipografía y contenedores dificulta la adaptación a distintos tamaños de pantalla y a las preferencias de accesibilidad del usuario. Se recomienda preferir rem para tipografía y % o fr para contenedores.

### Ejercicios

1. Tome el layout de Grid construido en el tema anterior y agréguele una media query que lo adapte a pantallas menores a 600px.
2. Explique la diferencia entre las unidades em y rem con un ejemplo numérico concreto.
3. Investigue qué es el enfoque "desktop-first" y explique una desventaja de usarlo en vez de "mobile-first".

---

## Tema 16. Organización y buenas prácticas de HTML y CSS

*🟦 BLOQUE CSS*

Además de conocer la sintaxis, un desarrollador profesional debe escribir código HTML y CSS legible, semántico, accesible y fácil de mantener. Este tema cierra la unidad integrando buenas prácticas transversales a todo lo aprendido.

### Conceptos clave

- HTML semántico: usar <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> en lugar de abusar de <div> genéricos ("div-itis").
- Accesibilidad (a11y): atributos alt, uso correcto de <label>, contraste de color adecuado, orden lógico de encabezados.
- Convenciones de nombres: metodologías como BEM (Block-Element-Modifier) para nombrar clases de forma consistente: bloque__elemento--modificador.
- Organización de archivos: separar HTML, CSS y JavaScript en archivos propios; agrupar estilos por componente o sección.
- Comentarios: documentar secciones importantes del CSS (/* Encabezado */) y del HTML (<!-- Sección de contacto -->).
- Validación: el validador oficial del W3C (validator.w3.org) detecta errores de sintaxis en HTML y CSS.
- Rendimiento básico: minimizar el uso de estilos en línea, optimizar imágenes y evitar hojas de estilo innecesariamente grandes.

### Ejemplo — De "div-itis" a HTML semántico con nomenclatura BEM

```css
<!-- Antes: poco semántico -->
<div class="top">
  <div class="menu">...</div>
</div>
<div class="content">...</div>
<div class="bottom">...</div>

<!-- Después: semántico + BEM -->
<header class="sitio-header">
  <nav class="sitio-header__nav">...</nav>
</header>
<main class="contenido">
  <article class="tarjeta tarjeta--destacada">...</article>
</main>
<footer class="sitio-footer">...</footer>
```

> **💡 Tip**
>
> Antes de entregar cualquier proyecto, valide su HTML y su CSS en validator.w3.org. Muchos errores de layout "misteriosos" son en realidad etiquetas mal cerradas o propiedades CSS mal escritas que el validador detecta en segundos.

### Ejercicios

1. Reescriba una página compuesta solo por <div> anidados (proporcionada por el docente o creada por usted) utilizando etiquetas semánticas de HTML5.
2. Aplique la convención BEM a las clases de la tarjeta construida en el tema de Flexbox.
3. Valide un archivo HTML propio en validator.w3.org y corrija al menos dos advertencias o errores reportados.

---

## Glosario

**Atributo.** Par nombre="valor" que se coloca dentro de una etiqueta de apertura para modificar o describir un elemento.

**BEM.** Metodología de nomenclatura de clases CSS (Block, Element, Modifier) que mejora la legibilidad y evita colisiones de estilos.

**Box Model.** Modelo que describe cómo se calcula el tamaño de un elemento a partir de su contenido, padding, border y margin.

**Cascada.** Mecanismo por el cual el navegador decide qué regla CSS aplicar cuando varias compiten por el mismo elemento.

**DOM.** Document Object Model: representación en memoria, en forma de árbol, de un documento HTML.

**Elemento.** Etiqueta de apertura, su contenido y su etiqueta de cierre (o una etiqueta vacía).

**Especificidad.** Valor numérico que determina qué regla CSS prevalece cuando varias aplican al mismo elemento.

**Flexbox.** Modelo de layout unidimensional de CSS para distribuir elementos en fila o columna.

**Grid.** Modelo de layout bidimensional de CSS para distribuir elementos en filas y columnas simultáneamente.

**HTML semántico.** Uso de etiquetas HTML que describen el significado del contenido (header, nav, article) en lugar de contenedores genéricos.

**HTTP/HTTPS.** Protocolo (y su versión cifrada) usado para transferir recursos entre un cliente y un servidor web.

**Media query.** Regla CSS que aplica estilos condicionalmente según características del dispositivo, como el ancho de pantalla.

**Mobile-first.** Enfoque de diseño que parte de los estilos para pantallas pequeñas y los amplía progresivamente para pantallas mayores.

**Pseudo-clase.** Palabra clave añadida a un selector que define un estado especial del elemento, como :hover o :focus.

**Responsive design.** Enfoque de diseño web que adapta el layout y contenido a distintos tamaños de pantalla.

**Selector.** Patrón usado en CSS para elegir los elementos HTML a los que se aplicará una regla de estilo.

**Viewport.** Área visible de una página web dentro del navegador o dispositivo.

**Void element.** Etiqueta HTML que no tiene contenido ni etiqueta de cierre, como <img> o <br>.

---

## Preguntas de repaso

1. ¿Cuál es la diferencia fundamental entre HTML, CSS y JavaScript en el desarrollo de una página web?
2. ¿Qué diferencia existe entre un elemento HTML y una etiqueta HTML?
3. ¿Por qué se recomienda usar CSS externo en lugar de CSS en línea?
4. Ordene de menor a mayor especificidad: un selector de clase, un selector de id y un selector de etiqueta.
5. ¿Qué diferencia existe entre content-box y border-box en la propiedad box-sizing?
6. ¿Qué problema resuelve el atributo alt de la etiqueta <img>?
7. ¿Cuál es la diferencia entre method="GET" y method="POST" en un formulario?
8. Mencione dos diferencias clave entre Flexbox y CSS Grid.
9. ¿Qué es una media query y para qué se utiliza en diseño responsive?
10. ¿Por qué se considera una mala práctica usar tablas para maquetar el layout general de una página?
11. ¿Qué ventaja ofrece usar unidades rem en lugar de píxeles para el tamaño de fuente?
12. ¿Qué es el colapso de márgenes (margin collapsing) y bajo qué condiciones ocurre?
13. ¿Qué diferencia hay entre id y class como atributos HTML?
14. Explique con un ejemplo qué es la herencia en CSS.
15. ¿Qué es HTML semántico y qué ventajas ofrece frente al uso excesivo de <div>?

---

## Proyecto integrador de la unidad

Como cierre de la Unidad 1, el estudiante debe construir un sitio web estático de una sola página ("landing page") que integre todos los temas vistos.

### Requisitos mínimos

- Estructura HTML5 semántica: header, nav, main con al menos dos section, footer.
- Una sección "Sobre mí / Sobre el proyecto" con texto, imagen y lista.
- Una tabla con información tabular relevante al tema elegido.
- Un formulario de contacto con al menos cuatro tipos distintos de controles de entrada.
- Hoja de estilos externa (.css) que defina colores, tipografía y espaciados con box-sizing: border-box.
- Al menos un componente construido con Flexbox (por ejemplo, una barra de navegación o una fila de tarjetas).
- El layout general de la página construido con CSS Grid.
- Diseño responsive verificado con al menos dos breakpoints (media queries).
- Código validado en validator.w3.org, sin errores.

### Entregable

Carpeta comprimida con los archivos `index.html` y `estilos.css` (y las imágenes utilizadas), además de una breve captura de pantalla de la página en tamaño móvil y en tamaño escritorio.

### Rúbrica de evaluación

| Criterio | Descripción | Puntaje |
|---|---|---|
| Estructura HTML semántica | Uso correcto de etiquetas semánticas y jerarquía de encabezados | 20% |
| Formularios y controles | Formulario funcional con controles y atributos adecuados | 15% |
| CSS y selectores | Organización del CSS, uso correcto de selectores y especificidad | 15% |
| Box Model aplicado | Uso consistente de box-sizing, padding, margin y border | 10% |
| Flexbox / Grid | Layout construido correctamente con Flexbox y/o CSS Grid | 20% |
| Diseño responsive | La página se adapta correctamente a distintos tamaños de pantalla | 15% |
| Validación y buenas prácticas | Código validado, comentado y sin errores en el validador del W3C | 5% |

