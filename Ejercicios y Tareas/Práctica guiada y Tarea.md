
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

☐ Se ha guardado al menos una imagen dentro de `img`.

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
<link
    rel="stylesheet"
    href="css/estilos.css"
>
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

# Paso 13. Personalización obligatoria

## Objetivo

Demostrar que el estudiante comprende el código y puede modificarlo.

El estudiante debe realizar las siguientes modificaciones:

☐ Cambiar la paleta de colores.

☐ Cambiar el nombre **Café Byte** por otro nombre creativo.

☐ Agregar al menos una imagen propia o de uso permitido.

☐ Agregar un cuarto producto al menú.

☐ Agregar una nueva sección en `index.html`.

☐ Agregar al menos una propiedad CSS que no se encuentre en el código base.

☐ Mantener funcionando la navegación entre todas las páginas.

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

# 3. Criterio de evaluación — Práctica guiada

La práctica guiada tendrá un valor de **40 puntos**.

| Criterio | Descripción | Puntos |
|---|---|---:|
| Estructura HTML | Uso correcto de HTML5 y etiquetas solicitadas. | 8 |
| Navegación | Los enlaces conectan correctamente las tres páginas. | 5 |
| Contenido | Imágenes, listas, productos y formulario completos. | 6 |
| CSS externo | Las tres páginas utilizan correctamente `estilos.css`. | 5 |
| Estilos y modelo de caja | Uso correcto de color, tipografía, margin, padding, border y clases. | 6 |
| Flexbox y responsive | Distribución flexible y media query funcional. | 5 |
| Organización y personalización | Archivos ordenados y modificaciones propias. | 5 |
| **TOTAL** | | **40 puntos** |

---

# 4. TAREA  
# Sitio web de un emprendimiento

Esta actividad se realiza **después de completar la práctica guiada**.

La tarea será individual.

El estudiante **no debe copiar directamente Café Byte**, ni utilizar exactamente el mismo contenido o diseño.

---

# Situación

Seleccione un emprendimiento real o ficticio.

Algunas posibilidades:

- Tienda de ropa.
- Gimnasio.
- Veterinaria.
- Librería.
- Restaurante.
- Barbería.
- Salón de belleza.
- Empresa tecnológica.
- Taller automotriz.
- Agencia de viajes.
- Academia.
- Tienda de videojuegos.
- Cafetería.
- Otro aprobado por el docente.

El objetivo será desarrollar un **mini-sitio web informativo utilizando únicamente HTML y CSS**.

---

# Archivos mínimos requeridos

El proyecto deberá contener como mínimo:

```text
mi-emprendimiento/
│
├── index.html
├── servicios.html
├── galeria.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
└── img/
    ├── imagen1.jpg
    ├── imagen2.jpg
    └── imagen3.jpg
```

---

# Requisitos obligatorios de HTML

☐ Cuatro páginas HTML como mínimo.

☐ Menú de navegación funcional presente en todas las páginas.

☐ Uso de:

```html
<header>
<nav>
<main>
<section>
<footer>
```

☐ Utilizar al menos dos niveles de encabezados.

Por ejemplo:

```html
<h1>
<h2>
```

☐ Incluir párrafos descriptivos escritos por el estudiante.

☐ Incluir una lista ordenada o no ordenada.

☐ Utilizar mínimo tres imágenes.

☐ Todas las imágenes deben utilizar el atributo:

```html
alt
```

☐ Agregar al menos un enlace externo.

Debe abrirse en una nueva pestaña utilizando:

```html
target="_blank"
```

☐ Crear un formulario de contacto.

Debe contener como mínimo:

```text
Nombre
Correo
Asunto o motivo
Mensaje
Botón
```

☐ Crear una sección de productos o servicios.

Debe contener mínimo:

```text
4 elementos
```

---

# Requisitos obligatorios de CSS

☐ Una sola hoja de estilos externa enlazada desde todas las páginas.

☐ Paleta de mínimo tres colores coherentes.

☐ Definir tipografía para:

```css
body
```

☐ Utilizar clases CSS creadas por el estudiante.

☐ Utilizar:

```css
margin
padding
```

☐ Utilizar:

```css
border
```

o:

```css
border-radius
```

☐ Utilizar la pseudoclase:

```css
:hover
```

en enlaces, botones o tarjetas.

☐ Utilizar:

```css
Flexbox
```

o:

```css
Grid
```

en al menos una sección.

☐ Crear un diseño responsive utilizando:

```css
@media
```

☐ Las imágenes deben adaptarse al tamaño de su contenedor.

Ejemplo:

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

# Condiciones de la tarea

☐ No utilizar Bootstrap.

☐ No utilizar Tailwind.

☐ No utilizar plantillas descargadas.

☐ No utilizar constructores visuales.

☐ No utilizar JavaScript.

La evaluación corresponde solamente a:

```text
HTML + CSS
```

☐ No copiar exactamente el ejemplo de Café Byte.

☐ Los enlaces deben funcionar.

☐ Las imágenes deben cargar correctamente.

☐ El proyecto debe funcionar al abrirlo desde su propia carpeta.

☐ Las rutas deben ser relativas.

☐ Se debe mantener una estructura clara de carpetas.

---

# Entrega

El estudiante deberá entregar una carpeta comprimida en formato:

```text
.zip
```

Nombre recomendado:

```text
Apellido_Nombre_Tarea_HTML_CSS.zip
```

La entrega debe incluir:

☐ Carpeta completa del proyecto.

☐ Los cuatro archivos HTML o más.

☐ Archivo:

```text
css/estilos.css
```

☐ Todas las imágenes utilizadas.

☐ Captura de pantalla de la página principal en versión escritorio.

☐ Captura de pantalla mostrando el sitio en ancho reducido o dispositivo móvil.

---

# 5. Criterio de evaluación — Tarea

La tarea tendrá un valor de **100 puntos**.

| Criterio | Excelente | Parcial | Insuficiente | Valor |
|---|---|---|---|---:|
| **Estructura HTML y semántica** | Todas las páginas poseen estructura correcta y uso coherente de etiquetas semánticas. | Presenta algunos errores menores. | Estructura incompleta o errores importantes. | **20 pts** |
| **Navegación y enlaces** | Todas las páginas están conectadas y todos los enlaces funcionan. | Uno o dos enlaces presentan errores. | La navegación está incompleta o no funciona. | **10 pts** |
| **Contenido y requisitos HTML** | Cumple imágenes, listas, secciones, servicios y formulario solicitados. | Faltan uno o dos elementos. | Faltan varios requisitos. | **15 pts** |
| **Diseño visual con CSS** | Existe coherencia en colores, tipografía, espaciado, bordes y presentación. | Diseño funcional pero poco consistente. | CSS mínimo, desorganizado o con errores importantes. | **20 pts** |
| **Flexbox o Grid** | La distribución se utiliza correctamente y mejora la organización visual. | Se utiliza con algunos problemas. | No se utiliza o no funciona. | **10 pts** |
| **Responsive** | `@media` adapta correctamente el sitio a pantallas pequeñas. | Existe adaptación con algunos problemas. | No existe adaptación responsive funcional. | **10 pts** |
| **Organización técnica** | Carpetas, nombres, rutas y archivos están correctamente organizados. | Presenta problemas menores de organización. | Existen rutas rotas, archivos faltantes o desorden. | **10 pts** |
| **Personalización y presentación** | Se evidencia trabajo propio, coherencia y cuidado visual. | Personalización limitada. | Copia directa o personalización insuficiente. | **5 pts** |
| **TOTAL** | | | | **100 pts** |

---

# Reglas de evaluación

☐ Un sitio que no abra correctamente no podrá obtener la totalidad de los puntos correspondientes a los criterios afectados.

☐ Los archivos faltantes afectarán los criterios relacionados.

☐ El uso de frameworks o herramientas no permitidas no será considerado como evidencia del aprendizaje solicitado.

☐ Los requisitos deberán poder verificarse directamente en el código fuente.

☐ También deberán poder verificarse ejecutando el proyecto en el navegador.

☐ Una buena apariencia visual no sustituye una estructura HTML correcta.

☐ El cumplimiento técnico tendrá prioridad sobre elementos únicamente decorativos.

---

# Lista de verificación antes de entregar

☐ Abrí `index.html` desde la carpeta del proyecto.

☐ Todo el contenido carga correctamente.

☐ Probé todos los enlaces del menú.

☐ Ninguna imagen muestra el ícono de archivo roto.

☐ Revisé visualmente el formulario.

☐ Reduje el ancho del navegador.

☐ El diseño se adapta correctamente.

☐ Revisé que no existan rutas como:

```text
C:\Users\
```

☐ Utilicé rutas relativas.

☐ Comprimí la carpeta completa.

☐ No comprimí únicamente los archivos HTML.

---

# 6. Preguntas de cierre

### 1. ¿Cuál es la diferencia entre HTML y CSS?

____________________________________________________________________

____________________________________________________________________

---

### 2. ¿Qué ventaja tiene utilizar una hoja CSS externa?

____________________________________________________________________

____________________________________________________________________

---

### 3. ¿Cuál es la diferencia entre `margin` y `padding`?

____________________________________________________________________

____________________________________________________________________

---

### 4. ¿Para qué sirve una clase CSS?

____________________________________________________________________

____________________________________________________________________

---

### 5. ¿Qué problema resuelve Flexbox?

____________________________________________________________________

____________________________________________________________________

---

### 6. ¿Qué hace una media query?

____________________________________________________________________

____________________________________________________________________

---

### 7. ¿Por qué se recomienda utilizar rutas relativas en un proyecto web?

____________________________________________________________________

____________________________________________________________________

---

# Resumen de evaluación

| Actividad | Puntaje |
|---|---:|
| Práctica guiada HTML + CSS | **40 puntos** |
| Tarea: sitio web de emprendimiento | **100 puntos** |

La **práctica guiada** sirve para aprender y aplicar los conceptos paso a paso.

La **tarea** busca comprobar que el estudiante puede crear por sí mismo un proyecto nuevo aplicando HTML y CSS.