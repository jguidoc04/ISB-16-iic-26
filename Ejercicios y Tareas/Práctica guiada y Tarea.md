
# ![UISIL](./imgs/uisil.png) 
# (ISB-16) PROGRAMACIÓN III

## PRÁCTICA GUIADA  
## HTML + CSS

## Construcción de un sitio web para una cafetería

**Curso:** Desarrollo Web / HTML y CSS  
**Estudiante:** ____________________________  
**Fecha:** ____________________________  
**Producto final:** Mini-sitio web con múltiples archivos  

**Modalidad:** Práctica individual guiada + tarea individual  
**Recomendación:** Visual Studio Code y navegador web actualizado

---

# 1. Propósito de la práctica

En esta práctica el estudiante construirá, desde cero y de forma progresiva, un pequeño sitio web para una cafetería ficticia llamada **Café Byte**.

El objetivo es comprender cómo **HTML define la estructura y el contenido**, mientras que **CSS controla la presentación visual**.

## Objetivos de aprendizaje

Al finalizar la práctica, el estudiante será capaz de:

- Crear documentos HTML con una estructura correcta.
- Utilizar títulos, párrafos, enlaces, imágenes, listas y elementos semánticos.
- Construir navegación entre varias páginas HTML.
- Crear y enlazar una hoja de estilos CSS externa.
- Aplicar selectores, clases, colores, tipografía, margen, relleno y bordes.
- Utilizar Flexbox para organizar elementos.
- Crear un formulario básico de contacto.
- Aplicar una regla responsive mediante `@media`.
- Mantener una estructura ordenada de carpetas y archivos.

---

# Producto final de la práctica

Al finalizar se deberá tener la siguiente estructura:

```text
cafe-byte/
│
├── index.html
├── menu.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
└── img/
    ├── cafe.jpg
    ├── postre.jpg
    └── logo.png
```

**Importante:** Los nombres de archivos deben escribirse sin espacios ni tildes.

Ejemplo correcto:

```text
menu.html
```

Ejemplo incorrecto:

```text
menú principal.html
```

---

# 2. Antes de comenzar

## HTML y CSS trabajan juntos

| Tecnología | Responsabilidad | Ejemplo |
|---|---|---|
| HTML | Estructura y contenido | Títulos, enlaces, imágenes, formularios |
| CSS | Apariencia y distribución | Colores, tamaños, márgenes, Flexbox, responsive |

### Regla de trabajo

Después de completar cada paso:

1. Guarde los archivos.
2. Abra `index.html` en el navegador.
3. Actualice la página.
4. Verifique que no existan errores.

No avance si el paso anterior presenta problemas.

---

# Paso 1. Crear la estructura de carpetas

## Objetivo

Organizar correctamente el proyecto antes de escribir código.

Cree una carpeta llamada:

```text
cafe-byte
```

Dentro cree la siguiente estructuras y archivos:

* Index.html
* menu.html
* contacto.html
* una carpeta llamada `css` y adentro de esta el archivo `estilos.css`
* y una carpeta vacia llamada `img`.

Se debe ver así la estructura:


```text
cafe-byte/
│
├── index.html
├── menu.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
└── img/
```

## Verificación

☐ `estilos.css` está dentro de la carpeta `css`.

☐ Los tres archivos HTML están en la raíz.

☐ Existe una carpeta llamada `img`.


---

# Paso 2. Crear la página principal

## Objetivo

Construir una estructura HTML5 básica y utilizar etiquetas semánticas.

Abra:

```text
index.html
```

Escriba:

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Café Byte | Inicio</title>
</head>

<body>

    <header>
        <h1>Café Byte</h1>
        <p>Café, tecnología y buenas ideas.</p>
    </header>

    <main>

        <section>
            <h2>Bienvenidos</h2>

            <p>
                Somos una cafetería pensada para
                estudiar, trabajar y compartir.
            </p>
        </section>

    </main>

    <footer>
        <p>2026 - Café Byte</p>
    </footer>

</body>

</html>
```

## Verificación

Abra `index.html` en el navegador.

Debe observar:

- Café Byte.
- Texto introductorio.
- Sección de bienvenida.
- Pie de página.

---

# Paso 3. Agregar navegación

## Objetivo

Conectar las páginas mediante enlaces relativos.

Dentro de `<header>`, después del texto introductorio, agregue:

```html
<nav>

    <a href="index.html">
        Inicio
    </a>

    <a href="menu.html">
        Menú
    </a>

    <a href="contacto.html">
        Contacto
    </a>

</nav>
```

Copie este mismo menú en las tres páginas.

La navegación debe permitir:

```text
Inicio → index.html
Menú → menu.html
Contacto → contacto.html
```

## Prueba

Haga clic en los tres enlaces.

Aunque `menu.html` y `contacto.html` todavía estén vacíos, el navegador no debería mostrar un error de archivo inexistente.

---

# Paso 4. Agregar una imagen y una lista

## Objetivo

Practicar recursos multimedia y listas HTML.

Guarde una imagen llamada:

```text
cafe.jpg
```

dentro de:

```text
img/
```

Después agregue dentro de `<main>`:

```html
<section>

    <h2>¿Por qué visitarnos?</h2>

    <img
        src="img/cafe.jpg"
        alt="Taza de café en una mesa"
    >

    <ul>
        <li>Café recién preparado.</li>

        <li>
            Espacio para estudiar y trabajar.
        </li>

        <li>
            Conexión Wi-Fi para clientes.
        </li>
    </ul>

</section>
```

## Importante

El atributo:

```html
alt=""
```

debe describir brevemente la imagen.

Evite rutas como:

```text
C:\Users\Juan\Desktop\foto.jpg
```

Utilice rutas relativas:

```text
img/cafe.jpg
```

---

# Paso 5. Construir `menu.html`

## Objetivo

Crear contenido estructurado en una segunda página.

Use la misma estructura general de `index.html`.

Cambie el `<title>` por:

```html
<title>Café Byte | Menú</title>
```

Dentro de `<main>` agregue:

```html
<main>

    <section>

        <h2>Nuestro menú</h2>

        <p>
            Conozca algunas de nuestras opciones.
        </p>

        <div class="productos">

            <article class="producto">

                <h3>Cappuccino</h3>

                <p>
                    Espresso, leche vaporizada
                    y espuma.
                </p>

                <p class="precio">
                    ₡2 200
                </p>

            </article>


            <article class="producto">

                <h3>Chocolate caliente</h3>

                <p>
                    Chocolate, leche y crema.
                </p>

                <p class="precio">
                    ₡2 000
                </p>

            </article>


            <article class="producto">

                <h3>Cheesecake</h3>

                <p>
                    Porción de cheesecake del día.
                </p>

                <p class="precio">
                    ₡2 500
                </p>

            </article>

        </div>

    </section>

</main>
```

Observe que se utilizaron las clases:

```text
productos
producto
precio
```

Posteriormente serán utilizadas desde CSS.

---

# Paso 6. Construir `contacto.html`

## Objetivo

Crear un formulario HTML básico.

Dentro de `<main>` agregue:

```html
<main>

    <section>

        <h2>Contacto</h2>

        <form>

            <label for="nombre">
                Nombre:
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >


            <label for="correo">
                Correo:
            </label>

            <input
                type="email"
                id="correo"
                name="correo"
                required
            >


            <label for="motivo">
                Motivo:
            </label>

            <select
                id="motivo"
                name="motivo"
            >

                <option>
                    Consulta
                </option>

                <option>
                    Reserva
                </option>

                <option>
                    Sugerencia
                </option>

            </select>


            <label for="mensaje">
                Mensaje:
            </label>

            <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
            ></textarea>


            <button type="submit">
                Enviar
            </button>

        </form>

    </section>

</main>
```

### Nota

En esta práctica el formulario es únicamente visual.

No se requiere almacenar ni enviar la información a un servidor.

---

# Paso 7. Conectar CSS

## Objetivo

Separar el contenido HTML de la presentación visual.

Dentro del `<head>` de:

```text
index.html
menu.html
contacto.html
```

agregue:

```html
<link rel="stylesheet" href="css/estilos.css">
```

Las tres páginas deben utilizar la misma hoja CSS.

Esto permite mantener un diseño uniforme.

---

# Paso 8. Aplicar estilos generales

## Objetivo

Practicar:

- Selectores.
- Colores.
- Tipografía.
- Margin.
- Padding.
- Modelo de caja.

Abra:

```text
css/estilos.css
```

Agregue:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;

    font-family:
        Arial,
        sans-serif;

    background-color:
        #f5f5f5;

    color:
        #333;
}

header {
    background-color:
        #3b2a24;

    color:
        white;

    padding:
        30px;

    text-align:
        center;
}

main {
    width:
        85%;

    max-width:
        1000px;

    margin:
        30px auto;
}

section {
    background-color:
        white;

    padding:
        25px;

    margin-bottom:
        20px;

    border-radius:
        10px;
}

footer {
    text-align:
        center;

    padding:
        20px;

    background-color:
        #222;

    color:
        white;
}
```

---

# Observe el modelo de caja

En:

```css
section
```

se utilizan:

```css
padding
margin
border-radius
```

Cambie temporalmente:

```css
padding: 25px;
```

por:

```css
padding: 5px;
```

Observe la diferencia.

Después vuelva a:

```css
padding: 25px;
```

---

# Paso 9. Estilizar la navegación

## Objetivo

Aplicar selectores descendientes y pseudoclases.

Agregue:

```css
nav {
    margin-top:
        20px;
}

nav a {
    color:
        white;

    text-decoration:
        none;

    margin:
        0 10px;

    padding:
        8px 12px;

    border-radius:
        5px;
}

nav a:hover {
    background-color:
        #6f4e37;
}
```

## Prueba

Pase el cursor sobre los enlaces.

El cambio visual ocurre gracias a:

```css
:hover
```

---

# Paso 10. Usar Flexbox en el menú

## Objetivo

Organizar las tarjetas de productos mediante Flexbox.

Agregue:

```css
.productos {
    display:
        flex;

    gap:
        20px;

    flex-wrap:
        wrap;
}

.producto {
    flex:
        1 1 250px;

    border:
        1px solid #ddd;

    padding:
        20px;

    border-radius:
        8px;
}

.precio {
    font-weight:
        bold;

    color:
        #6f4e37;

    font-size:
        1.2rem;
}
```

## Prueba

Reduzca lentamente el ancho del navegador.

Observe cómo las tarjetas cambian de posición gracias a:

```css
flex-wrap: wrap;
```

---

# Paso 11. Estilizar imágenes y formulario

## Objetivo

Aplicar estilos reutilizables.

Agregue:

```css
img {
    max-width:
        100%;

    height:
        auto;

    border-radius:
        8px;
}

form {
    display:
        flex;

    flex-direction:
        column;

    gap:
        10px;
}

input,
select,
textarea {
    padding:
        10px;

    border:
        1px solid #bbb;

    border-radius:
        5px;

    font-size:
        1rem;
}

button {
    background-color:
        #6f4e37;

    color:
        white;

    border:
        none;

    padding:
        12px;

    border-radius:
        5px;

    cursor:
        pointer;
}

button:hover {
    background-color:
        #3b2a24;
}
```

---

# Paso 12. Agregar diseño responsive

## Objetivo

Modificar el diseño cuando la pantalla es pequeña.

Agregue al final de `estilos.css`:

```css
@media (max-width: 600px) {

    main {
        width:
            95%;
    }

    nav a {
        display:
            block;

        margin:
            8px 0;
    }

    header {
        padding:
            20px;
    }

}
```

## Prueba

Reduzca el navegador hasta aproximadamente el tamaño de un teléfono.

Los enlaces deberían mostrarse:

```text
Inicio

Menú

Contacto
```

uno debajo del otro.

---


# Comprobación final de la práctica

| Comprobación | Estado |
|---|---|
| `index.html` abre correctamente. | ☐ Cumple ☐ Revisar |
| `menu.html` abre correctamente. | ☐ Cumple ☐ Revisar |
| `contacto.html` abre correctamente. | ☐ Cumple ☐ Revisar |
| Los enlaces funcionan en todas las páginas. | ☐ Cumple ☐ Revisar |
| `estilos.css` afecta las tres páginas. | ☐ Cumple ☐ Revisar |
| Las imágenes cargan correctamente. | ☐ Cumple ☐ Revisar |
| El formulario contiene todos los controles. | ☐ Cumple ☐ Revisar |
| El sitio cambia correctamente en pantalla pequeña. | ☐ Cumple ☐ Revisar |

---



# 4. TAREA  
# Sitio web para una tienda.

Esta actividad se realiza **después de completar la práctica guiada**.
La tarea será individual.
El estudiante **no debe copiar directamente Café Byte**, ni utilizar exactamente el mismo contenido o diseño.

## Enunciado

Desarrolle una **landing page**, es decir, una página web de presentación, para una tienda de discos ficticia llamada **Vinilo Retro**.

La página debe presentar la tienda, mostrar algunos discos destacados y facilitar que los visitantes encuentren la información de contacto. Utilice HTML para organizar el contenido y CSS para definir los colores, tamaños, espacios y distribución de los elementos.

El sitio debe ser sencillo, atractivo y adaptarse a computadoras y celulares. Puede utilizar imágenes propias o imágenes gratuitas. Los discos y sus precios pueden ser ficticios.

### ¿Qué es una landing page?
Una landing page, o página de aterrizaje, es una página web diseñada para presentar un producto, servicio o negocio y guiar al visitante hacia una acción específica, como comprar, registrarse, solicitar información o contactar al negocio.
Generalmente incluye un título llamativo, una descripción breve, imágenes y un botón de llamada a la acción, como «Ver productos» o «Contáctanos».

Ejemplo: una landing page de un gimnasio presenta sus instalaciones, los planes de entrenamiento y los beneficios de inscribirse. Incluye un botón «Reservar una clase gratuita» para motivar al visitante a conocer el gimnasio.

Pueden buscar ejemplos de referencia. Les voy a dejar sitios de referencia:
* [Notion](https://www.notion.com/es-es)
* [UISIL sitio principal](https://uisil.ac.cr)
* [Apple: AirPods Pro](https://www.apple.com/es/airpods-pro/)


## Secciones de la página

| Sección | Contenido solicitado |
|---|---|
| Encabezado | Nombre de la tienda y menú con enlaces a Inicio, Discos y Contacto. |
| Inicio | Título de bienvenida, descripción breve de la tienda, imagen y botón «Ver discos». |
| Discos | Tres tarjetas de discos. Cada tarjeta debe incluir portada, título del álbum, artista, género musical y precio. |
| Contacto | Dirección ficticia, teléfono y horario de atención. |
| Pie de página | Nombre de la tienda, año y nombre del estudiante. |

## Tabla de requerimientos

| Código | Requerimiento | Criterio de cumplimiento |
|---|---|---|
| R01 | Crear la estructura del sitio en HTML. | Incluye las etiquetas `header`, `nav`, `main`, `section` y `footer`. |
| R02 | Utilizar una hoja de estilos externa. | El archivo HTML está vinculado con `css/estilos.css`. |
| R03 | Implementar el menú de navegación. | Los enlaces llevan a las secciones de la misma página mediante sus identificadores `id`. |
| R04 | Diseñar la sección de inicio. | Contiene título, descripción, imagen y un enlace con apariencia de botón que lleva a Discos. |
| R05 | Mostrar tres discos destacados. | Cada tarjeta contiene portada, título del álbum, artista, género musical y precio. |
| R06 | Aplicar estilos básicos. | Utiliza colores, tipografía, márgenes, rellenos y bordes redondeados. |
| R07 | Agregar un efecto al pasar el cursor. | El botón o los enlaces cambian de color mediante `:hover`. |
| R08 | Adaptar el diseño a celulares. | Utiliza una media query para colocar las tarjetas en una columna y evitar desplazamiento horizontal. |
| R09 | Incorporar imágenes accesibles. | Todas las imágenes incluyen un atributo `alt` descriptivo. |

## Requerimientos de entrega

- Crear un archivo **`index.html`**.
- Crear una carpeta **`css`** con el archivo **`estilos.css`**.
- Guardar las imágenes dentro de una carpeta **`img`**.
- Utilizar únicamente **HTML y CSS**, sin frameworks.
- La práctica consiste en una página de presentación; no requiere carrito de compras, pagos ni JavaScript.
- Entregar la carpeta completa del proyecto en un archivo **ZIP**.
- Verificar que la página abra correctamente, que se visualicen las imágenes y que funcionen los enlaces del menú.

* En la entrega van subir un mismo comprimido tanto la practica guiada como la tarea, la cual es esta segunda sección que si deben realizar por ustedes mismos.

## Tabla de evaluación

| Criterio | Puntaje |
|---|---:|
| Estructura HTML y secciones completas | 5 |
| Menú y botón con enlaces funcionales | 3 |
| Tarjetas de discos completas | 4 |
| Organización de archivos e imágenes con `alt` | 2 |
| Cumple con Landing page | 2 |
| Usa hoja de estilo css creada por el mismo estudiante| 4 |
| **Total** | **20 puntos** |

