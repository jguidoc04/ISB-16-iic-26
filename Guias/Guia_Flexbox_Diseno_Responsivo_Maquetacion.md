# Maquetación web, Flexbox y diseño responsivo


## 2. Maquetación y estructura semántica

**Maquetar** consiste en organizar visualmente el contenido de una página: encabezado, navegación, secciones, columnas, tarjetas y pie de página. Implica establecer tamaños, espacios, alineaciones y comportamiento ante distintas dimensiones de pantalla.

HTML describe la estructura y el significado. CSS determina la presentación y distribución. JavaScript puede añadir interacción, pero no es necesario para construir una distribución responsiva básica.

### 1.1 Elementos semánticos

| Elemento | Uso habitual |
|---|---|
| `header` | Introducción de una página o sección |
| `nav` | Conjunto de enlaces de navegación |
| `main` | Contenido principal de la página |
| `section` | Agrupación temática, normalmente con encabezado |
| `article` | Contenido autónomo, como una noticia o ficha de curso |
| `aside` | Contenido complementario |
| `footer` | Información de cierre |
| `div` | Contenedor genérico sin significado específico |

```html
<header>
  <h1>Campus Digital</h1>
  <nav aria-label="Principal">
    <a href="#cursos">Cursos</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>
<main>
  <section id="cursos">
    <h2>Cursos disponibles</h2>
    <article>
      <h3>Introducción a HTML</h3>
      <p>Aprenda a estructurar una página web.</p>
    </article>
  </section>
</main>
<footer id="contacto">
  <p>Contacto: campus@example.com</p>
</footer>
```

La semántica no reemplaza CSS. Un `section` no crea columnas automáticamente; necesita reglas de distribución si ese es el diseño esperado.

### 1.2 Proceso recomendado

1. Identificar el contenido y su jerarquía.
2. Dibujar un boceto para una pantalla pequeña.
3. Escribir HTML en un orden de lectura coherente.
4. Aplicar estilos base y espacios.
5. Incorporar Flexbox o Grid donde sea necesario.
6. Ampliar el diseño para pantallas mayores.
7. Probar contenido largo, teclado y zoom.

---

## 2. Modelo de caja y flujo normal

Cada caja CSS tiene contenido, relleno (`padding`), borde (`border`) y margen (`margin`).

| Parte | Función |
|---|---|
| Contenido | Texto, imagen u otros elementos |
| `padding` | Espacio entre contenido y borde |
| `border` | Borde alrededor del contenido y relleno |
| `margin` | Espacio exterior respecto de otras cajas |

### 2.1 Cálculo del tamaño

Con `box-sizing: content-box`, un ancho de `200px`, relleno horizontal de `20px` por lado y borde de `2px` por lado produce una caja de **244px**, sin contar márgenes.

```css
.caja {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 2px solid navy;
}
```

Con `border-box`, esos `200px` incluyen contenido, relleno y borde. Los márgenes siguen siendo exteriores.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### 2.2 Flujo normal

En el flujo normal, los bloques se colocan uno después de otro en la dirección de bloque. En una página de escritura horizontal habitual, esto se observa de arriba hacia abajo. Los elementos en línea participan dentro de las líneas del texto.

```css
.bloque { display: block; }
.en-linea { display: inline; }
.en-linea-con-caja { display: inline-block; }
```

En `inline`, `width` y `height` no controlan un elemento no reemplazado como lo hacen en un bloque. `inline-block` permite definir esas dimensiones manteniendo participación en línea.

### 2.3 Separación consistente

Use `padding` para espacio interior, `margin` para separación exterior y `gap` para separar elementos de contenedores Flexbox o Grid.

```css
.panel {
  padding: 1.5rem;
  margin-block: 2rem;
}
```

Los márgenes verticales de ciertos bloques en flujo normal pueden colapsar. Los márgenes de elementos flexibles no colapsan entre sí. Esta diferencia explica cambios de separación al activar Flexbox.

---

## 3. Herramientas de distribución y posicionamiento

| Herramienta | Cuándo utilizarla |
|---|---|
| Flujo normal | Texto, párrafos y estructura vertical básica |
| Flexbox | Distribución en una dimensión: fila o columna |
| Grid | Distribución coordinada de filas y columnas |
| `position` | Ajustes de posición o superposición concretos |
| `float` | Contenido que debe rodear una imagen |
| Tablas HTML | Datos tabulares con filas y columnas |

### 3.1 `position`

- `static`: comportamiento predeterminado; los desplazamientos no lo posicionan.
- `relative`: conserva su espacio en el flujo y permite desplazar su representación.
- `absolute`: sale del flujo; se posiciona respecto de su bloque contenedor, frecuentemente el ancestro posicionado más cercano.
- `fixed`: normalmente se fija respecto de la ventana y sale del flujo; ciertos ancestros pueden cambiar su bloque contenedor.
- `sticky`: permanece en el flujo y puede adherirse a un límite dentro de su contexto de desplazamiento.

```css
.tarjeta { position: relative; }
.etiqueta {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
```

La etiqueta se ubica en la esquina de la tarjeta. No conviene construir toda una página mediante coordenadas absolutas: el contenido variable y las pantallas pequeñas requieren distribución flexible.

### 3.2 `float` y `clear`

```html
<article class="noticia">
  <img class="miniatura" src="foto.jpg" alt="Estudiantes en un laboratorio">
  <p>Este texto puede rodear la imagen flotante.</p>
  <p class="despues">Este párrafo comienza después de la imagen.</p>
</article>
```

```css
.noticia { display: flow-root; }
.miniatura { float: left; width: 8rem; margin: 0 1rem 1rem 0; }
.despues { clear: both; }
```

Este fragmento requiere aportar `foto.jpg`. `flow-root` permite que el contenedor incluya sus flotantes; `clear` evita que el párrafo indicado quede junto al flotante. Para menús y tarjetas, Flexbox suele expresar mejor la distribución.

---

## 4. Fundamentos de Flexbox

Flexbox distribuye elementos en **una dimensión principal**. Puede crear varias líneas, pero cada línea distribuye su espacio de forma independiente. No garantiza columnas alineadas entre líneas como una cuadrícula.

### 4.1 Contenedor y elementos

```html
<div class="contenedor">
  <div class="elemento">A</div>
  <div class="elemento">B</div>
  <div class="elemento">C</div>
</div>
```

```css
.contenedor {
  display: flex;
  gap: 1rem;
}
.elemento {
  padding: 1rem;
  background: #dbeafe;
}
```

Los hijos directos que participan en el flujo se convierten en elementos flexibles. Los descendientes interiores no se convierten automáticamente en elementos del contenedor exterior. Un hijo puede ser a la vez elemento flexible y contenedor flexible.

### 4.2 Ejes

- **Eje principal:** dirección de distribución definida por `flex-direction`.
- **Eje transversal:** perpendicular al principal.

En escritura horizontal de izquierda a derecha:

| `flex-direction` | Eje principal | Eje transversal |
|---|---|---|
| `row` | Horizontal | Vertical |
| `column` | Vertical | Horizontal |

`justify-content` actúa sobre el eje principal. `align-items` actúa sobre el transversal. Por eso no deben memorizarse como «horizontal» y «vertical» para todos los casos.

### 4.3 Comportamiento inicial

Al declarar `display: flex`, normalmente verá una fila sin salto de línea. Los elementos pueden reducirse y se estiran en el eje transversal cuando su tamaño y restricciones lo permiten. El valor inicial de `flex` de cada elemento equivale a `0 1 auto`.

---

## 5. Propiedades del contenedor

### 5.1 Dirección: `flex-direction`

```css
.fila { display: flex; flex-direction: row; }
.columna { display: flex; flex-direction: column; }
```

Existen `row-reverse` y `column-reverse`. Alteran la dirección visual, pero no el orden del DOM ni, en general, la navegación por teclado. Evite usarlos para corregir una estructura HTML mal ordenada.

### 5.2 Salto de línea: `flex-wrap`

```css
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

| Valor | Resultado |
|---|---|
| `nowrap` | Una sola línea; puede reducir elementos o desbordar |
| `wrap` | Permite nuevas líneas |
| `wrap-reverse` | Invierte la dirección de apilado de las líneas |

La abreviatura `flex-flow` combina dirección y salto:

```css
.lista { display: flex; flex-flow: row wrap; }
```

### 5.3 Distribución principal: `justify-content`

| Valor | Comportamiento |
|---|---|
| `flex-start` | Agrupa al inicio del eje principal |
| `flex-end` | Agrupa al final |
| `center` | Centra el grupo |
| `space-between` | Distribuye espacio entre elementos |
| `space-around` | Espacio alrededor de cada elemento; extremos con la mitad del espacio interior |
| `space-evenly` | Espacio equivalente entre elementos y extremos |

```css
.menu {
  display: flex;
  justify-content: space-between;
}
```

Se distribuye el espacio libre que queda después del dimensionamiento flexible y los márgenes automáticos. Si los hijos consumen todo el espacio mediante `flex-grow`, cambiar `justify-content` puede no producir un resultado visible.

### 5.4 Alineación transversal: `align-items`

```css
.fila {
  display: flex;
  align-items: center;
  min-height: 10rem;
}
```

Valores frecuentes: `stretch`, `flex-start`, `flex-end`, `center` y `baseline`. `baseline` resulta útil al alinear textos con diferentes tamaños. `stretch` no fuerza una dimensión transversal que ya fue fijada explícitamente.

### 5.5 Alineación de líneas: `align-content`

Distribuye las líneas en el eje transversal de un contenedor que permite múltiples líneas. Necesita espacio transversal sobrante para que su efecto se aprecie.

```css
.panel {
  display: flex;
  flex-wrap: wrap;
  height: 24rem;
  align-content: space-between;
  gap: 1rem;
}
```

`align-items` alinea elementos dentro de sus líneas; `align-content` distribuye las líneas. No utilice una altura fija en producción solamente para hacer visible esta propiedad: aquí sirve para experimentar.

### 5.6 Separación: `gap`

```css
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1rem;
}
```

El primer valor corresponde a separación entre filas y el segundo entre columnas. `gap` no crea relleno en el borde exterior del contenedor. Para ello utilice `padding`.

---

## 6. Propiedades de los elementos

### 6.1 `flex-grow`

Define un factor de crecimiento cuando hay espacio libre positivo.

```css
.izquierda { flex-grow: 1; }
.derecha { flex-grow: 2; }
```

Si quedan `300px` libres y solo participan esos factores, se asignan aproximadamente `100px` y `200px` adicionales. Esto no implica que el ancho final del segundo sea el doble: también cuentan sus tamaños base y restricciones.

### 6.2 `flex-shrink`

Controla la reducción cuando falta espacio. La reducción se pondera por el factor y el tamaño base.

```css
.icono { flex-shrink: 0; }
.texto { flex-shrink: 1; min-width: 0; }
```

Dos elementos con el mismo `flex-shrink` y bases diferentes no pierden necesariamente la misma cantidad de píxeles.

### 6.3 `flex-basis`

Indica el tamaño base en el eje principal antes del reparto de espacio. En una fila se relaciona con el ancho; en una columna, con la altura.

```css
.tarjeta { flex-basis: 16rem; }
```

No es un ancho fijo definitivo. Puede modificarse por crecimiento, reducción y límites como `min-width` o `max-width`.

### 6.4 Abreviatura `flex`

```css
.tarjeta { flex: 1 1 16rem; }
/* crecimiento | reducción | base */
```

| Declaración | Significado |
|---|---|
| `flex: 0 1 auto` | Sin crecimiento, con reducción y base automática |
| `flex: 1 1 16rem` | Crece y se reduce desde una base de 16rem |
| `flex: 0 0 12rem` | No crece ni se reduce; base de 12rem |
| `flex: auto` | Equivale a `1 1 auto` |
| `flex: none` | Equivale a `0 0 auto` |

Para repartir espacio con bases iguales, puede escribir `flex: 1 1 0` y `min-width: 0`. Padding, bordes y restricciones todavía pueden afectar los tamaños finales.

### 6.5 `align-self`

Permite a un elemento cambiar su alineación transversal individual.

```css
.destacado { align-self: center; }
```

### 6.6 `order`

Cambia el orden visual. El valor inicial es `0`; los menores aparecen primero.

```css
.destacado { order: -1; }
```

No cambia el orden de lectura del HTML. Para contenido con secuencia significativa, ajuste primero el DOM.

### 6.7 Márgenes automáticos

```css
.barra { display: flex; gap: 1rem; }
.sesion { margin-inline-start: auto; }
```

En una fila habitual, empuja el elemento de sesión al extremo opuesto al absorber el espacio libre disponible.

### 6.8 Contenido largo y mínimo automático

Un elemento puede resistirse a encogerse debido al tamaño mínimo de su contenido.

```css
.columna-flexible {
  min-width: 0;
  overflow-wrap: anywhere;
}
```

`min-width: 0` permite reducir la caja; `overflow-wrap` ayuda a partir palabras o enlaces largos. No solucione todo con `overflow: hidden`, porque podría ocultar información.

---

## 7. Patrones prácticos con Flexbox

### 7.1 Centrado en ambos ejes

```html
<div class="zona"><p>Contenido centrado</p></div>
```

```css
.zona {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 16rem;
  padding: 1rem;
}
```

### 7.2 Menú con salto de línea

```html
<nav class="enlaces" aria-label="Secciones">
  <a href="#inicio">Inicio</a>
  <a href="#servicios">Servicios</a>
  <a href="#contacto">Contacto</a>
</nav>
```

```css
.enlaces { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.enlaces a { padding: 0.75rem; }
```

Para probar los destinos de estos enlaces, cree las secciones con los identificadores correspondientes.

### 7.3 Tarjetas adaptables sin media queries

```css
.tarjetas { display: flex; flex-wrap: wrap; gap: 1rem; }
.tarjeta { flex: 1 1 16rem; min-width: 0; }
```

Cuando varias bases y sus separaciones no caben, aparecen nuevas líneas. La última fila puede tener tarjetas más anchas porque cada línea reparte su espacio por separado.

### 7.4 Botones alineados al final de tarjetas

```css
.tarjeta { display: flex; flex-direction: column; }
.tarjeta .boton { margin-top: auto; align-self: flex-start; }
```

El margen automático consume el espacio vertical disponible. El efecto requiere que la tarjeta tenga espacio sobrante, por ejemplo, al estirarse junto a tarjetas de la misma fila.

### 7.5 Pie al final de una página corta

```css
body { min-height: 100vh; margin: 0; display: flex; flex-direction: column; }
main { flex: 1; }
```

El contenido principal ocupa el espacio libre y empuja el pie hacia abajo. El pie sigue formando parte del flujo y se desplaza normalmente en páginas largas.

---

## 9. Diseño responsivo y mobile first

El diseño responsivo permite que una interfaz se adapte al espacio disponible y a las condiciones de uso. Incluye distribución, tipografía, imágenes, navegación y contenido legible.

### 9.1 Viewport

Incluya en `head`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Permite que los navegadores móviles utilicen un viewport adecuado al dispositivo. No desactive el zoom.

### 9.2 Mobile first

Primero se escriben estilos para espacios pequeños. Luego se añaden cambios cuando el contenido dispone de más ancho.

```css
.layout { display: flex; flex-direction: column; gap: 1.5rem; }

@media (min-width: 48rem) {
  .layout { flex-direction: row; }
  .principal { flex: 3 1 0; min-width: 0; }
  .lateral { flex: 1 1 0; min-width: 0; }
}
```

Con un tamaño inicial habitual de 16px, `48rem` equivale aproximadamente a 768px. En media queries, las unidades relativas se basan en el tamaño inicial de fuente, no en una modificación arbitraria de `html` en la página.

### 9.3 Media queries

```css
@media (min-width: 64rem) {
  .contenido { padding-block: 3rem; }
}

@media (max-width: 30rem) {
  .titulo { font-size: 1.75rem; }
}
```

`min-width` establece un límite inferior y `max-width` uno superior. Si dos reglas aplican, participan la cascada, la especificidad y el orden de aparición.

### 9.4 Puntos de ruptura

No existe una lista obligatoria de anchos. Reduzca el navegador y observe cuándo el contenido empieza a fallar: un menú se comprime, las columnas dejan de ser legibles o una tarjeta pierde espacio. Ese problema justifica un punto de ruptura.

Anchos como 320, 375, 768, 1024 y 1440px sirven como muestras de prueba. También debe revisar tamaños intermedios.

### 9.5 Responsive frente a adaptativo

Un diseño fluido cambia continuamente mediante medidas flexibles. Un diseño adaptativo suele seleccionar distribuciones predefinidas en determinados rangos. En una aplicación real pueden combinarse ambos enfoques.

---

## 10. Medidas, imágenes y contenido adaptable

### 10.1 Unidades

| Unidad | Referencia y uso |
|---|---|
| `px` | Píxel CSS; útil para detalles como bordes |
| `%` | Depende de la propiedad y del bloque contenedor |
| `rem` | Tamaño de fuente raíz; útil para escalas consistentes |
| `em` | Relativa al tamaño de fuente correspondiente al contexto |
| `vw` / `vh` | Porcentaje del ancho / alto del viewport |
| `dvh` | Altura dinámica del viewport, útil ante cambios de interfaz móvil |

Los píxeles CSS también participan en el zoom del navegador; no son necesariamente píxeles físicos del dispositivo.

### 10.2 Contenedor centrado

```css
.contenedor {
  width: 92%;
  max-width: 72rem;
  margin-inline: auto;
}
```

En pantallas pequeñas queda margen lateral y en grandes se limita la longitud de lectura.

### 10.3 Funciones de tamaño

```css
.panel { width: min(100%, 40rem); }
h1 { font-size: clamp(2rem, 1.2rem + 3vw, 3.5rem); }
```

`min()` selecciona el valor menor. `clamp()` establece un mínimo, un valor preferido y un máximo. Compruebe que el texto siga creciendo de forma útil al aplicar zoom.

### 10.4 Imágenes

```css
img { display: block; max-width: 100%; height: auto; }
.portada { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
```

`object-fit: cover` puede recortar la imagen. No lo utilice si el recorte oculta datos importantes. El texto alternativo describe la función o información de la imagen; una imagen decorativa utiliza `alt=""`.

Con archivos de distintas resoluciones:

```html
<img
  src="laboratorio-800.jpg"
  srcset="laboratorio-400.jpg 400w, laboratorio-800.jpg 800w"
  sizes="(min-width: 48rem) 50vw, 100vw"
  width="800"
  height="600"
  alt="Laboratorio con equipos para prácticas de programación">
```

Debe aportar ambos archivos. `sizes` informa el ancho de presentación esperado y debe corresponder con el CSS real; el navegador selecciona el recurso adecuado.

### 10.5 Tablas anchas

Conserve la estructura de tabla para datos tabulares y permita desplazamiento localizado si no caben.

```html
<div class="tabla-scroll" role="region" aria-label="Resultados por curso" tabindex="0">
  <table>
    <caption>Resultados del grupo</caption>
    <thead><tr><th scope="col">Curso</th><th scope="col">Promedio</th></tr></thead>
    <tbody><tr><th scope="row">Programación</th><td>85</td></tr></tbody>
  </table>
</div>
```

```css
.tabla-scroll { max-width: 100%; overflow-x: auto; }
table { border-collapse: collapse; width: 100%; }
th, td { padding: 0.75rem; border: 1px solid #64748b; text-align: left; }
```

---

## 11. Accesibilidad, organización y depuración

### 11.1 Buenas prácticas

- Mantener un orden HTML coherente con la lectura y el teclado.
- Usar enlaces para navegar y botones para ejecutar acciones.
- Mostrar un foco visible.
- Evitar alturas rígidas para cajas con texto variable.
- Usar contraste suficiente y no comunicar información solo mediante color.
- Mantener etiquetas asociadas a campos de formulario.
- Dar espacio suficiente a los controles táctiles.
- Permitir que el texto aumente y que la página se reorganice.

```css
:focus-visible { outline: 3px solid #b45309; outline-offset: 4px; }
```

### 11.2 Organización de archivos

Una página básica puede tener `index.html` y la carpeta `css` con `estilos.css`. Añada una carpeta `img` solamente cuando utilice imágenes locales.

```html
<link rel="stylesheet" href="css/estilos.css">
```

La ruta se resuelve desde el documento HTML. Verifique mayúsculas, extensión y nombre real del archivo.

### 11.3 Depuración con el navegador

1. Inspeccionar el elemento que presenta el problema.
2. Revisar estilos calculados y reglas sobrescritas.
3. Examinar el modelo de caja.
4. Activar la superposición de Flexbox si el navegador la ofrece.
5. Alternar reglas para aislar la causa.
6. Probar dimensiones pequeñas y grandes.
7. Revisar el orden de navegación con Tab.

| Problema | Causa posible | Corrección orientativa |
|---|---|---|
| `justify-content` no parece funcionar | No queda espacio libre | Revisar crecimiento y tamaños |
| `align-content` no hace cambios | Una línea o sin espacio transversal sobrante | Revisar envoltura y dimensión transversal |
| Texto desborda una tarjeta | Mínimo automático o palabra larga | `min-width: 0` y ajuste de palabras |
| Aparece scroll horizontal en toda la página | Ancho fijo, padding adicional o contenido ancho | Inspeccionar caja que supera el viewport |
| El menú se corta | Altura fija o falta de salto | Permitir `wrap` y altura automática |
| Orden visual y teclado difieren | `order` o dirección invertida | Corregir estructura del DOM |
| CSS no se aplica | Ruta incorrecta, selector o cascada | Revisar enlace y estilos calculados |

---

## 12. Proyecto guiado completo: catálogo de cursos

### 12.1 Resultado esperado

Una página con encabezado, navegación, presentación, tres tarjetas, información de matrícula y pie de página. En pantallas pequeñas se organiza verticalmente. Con más ancho, el encabezado y la presentación utilizan filas y el catálogo permite varias tarjetas por línea.

**Archivos:** cree `index.html` y `css/estilos.css`. Copie íntegramente los siguientes bloques. El ejemplo no necesita otros recursos.

### 12.2 Archivo `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Campus Digital | Cursos</title>
  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
  <a class="salto" href="#contenido">Saltar al contenido</a>

  <header class="encabezado">
    <div class="contenedor barra">
      <a class="marca" href="#inicio">Campus Digital</a>
      <nav aria-label="Navegación principal">
        <ul class="menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#matricula">Matrícula</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="contenido">
    <section id="inicio" class="presentacion">
      <div class="contenedor hero">
        <div class="hero-texto">
          <p class="etiqueta">Aprendizaje práctico</p>
          <h1>Construya su primera página web</h1>
          <p>Explore cursos de HTML, CSS y diseño responsivo con actividades paso a paso.</p>
          <a class="boton" href="#cursos">Explorar cursos</a>
        </div>
        <aside class="resumen" aria-labelledby="titulo-resumen">
          <h2 id="titulo-resumen">Aprenda haciendo</h2>
          <ul>
            <li>Estructura semántica</li>
            <li>Distribución con Flexbox</li>
            <li>Interfaces para distintos tamaños</li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="cursos" class="seccion contenedor" aria-labelledby="titulo-cursos">
      <h2 id="titulo-cursos">Cursos disponibles</h2>
      <p>Una ruta inicial para desarrollar interfaces web.</p>
      <div class="tarjetas">
        <article class="tarjeta">
          <p class="categoria">Nivel inicial</p>
          <h3>HTML semántico</h3>
          <p>Organice títulos, enlaces y secciones con una estructura clara.</p>
          <p class="duracion">Duración: 8 horas</p>
          <a class="boton secundario" href="#matricula">Consultar matrícula de HTML</a>
        </article>
        <article class="tarjeta">
          <p class="categoria">Nivel inicial</p>
          <h3>CSS y modelo de caja</h3>
          <p>Controle colores, tipografía, bordes y espacios. Comprenda cómo se calcula el tamaño de cada elemento.</p>
          <p class="duracion">Duración: 10 horas</p>
          <a class="boton secundario" href="#matricula">Consultar matrícula de CSS</a>
        </article>
        <article class="tarjeta">
          <p class="categoria">Nivel intermedio</p>
          <h3>Flexbox responsivo</h3>
          <p>Construya menús y tarjetas que se adapten al espacio disponible.</p>
          <p class="duracion">Duración: 12 horas</p>
          <a class="boton secundario" href="#matricula">Consultar matrícula de Flexbox</a>
        </article>
      </div>
    </section>

    <section id="matricula" class="seccion contacto" aria-labelledby="titulo-matricula">
      <div class="contenedor">
        <h2 id="titulo-matricula">Información de matrícula</h2>
        <p>Ejemplo académico. Puede solicitar información al correo indicado.</p>
        <a href="mailto:campus@example.com">campus@example.com</a>
      </div>
    </section>
  </main>

  <footer class="pie">
    <div class="contenedor">
      <p>Campus Digital · Proyecto académico · 2026</p>
    </div>
  </footer>
</body>
</html>
```

### 12.3 Archivo `css/estilos.css`

```css
/* 1. Base y modelo de caja */
:root {
  --primario: #1e40af;
  --oscuro: #172554;
  --texto: #1f2937;
  --fondo: #f8fafc;
  --borde: #cbd5e1;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-padding-top: 1rem; }
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: var(--texto);
  background: var(--fondo);
}
main { flex: 1; }
a { color: var(--primario); overflow-wrap: anywhere; }
h1, h2, h3 { line-height: 1.2; }
h1 { font-size: clamp(2rem, 1.2rem + 3vw, 3.5rem); }
h2 { font-size: 1.75rem; }
p { margin-block: 0 1rem; }
:focus-visible {
  outline: 3px solid #b45309;
  outline-offset: 4px;
}
.contenedor {
  width: 92%;
  max-width: 72rem;
  margin-inline: auto;
}
.seccion { padding-block: 3rem; }

/* 2. Acceso directo por teclado */
.salto {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  transform: translateY(-180%);
  z-index: 10;
  padding: 0.75rem;
  color: #fff;
  background: var(--oscuro);
}
.salto:focus { transform: translateY(0); }

/* 3. Encabezado: primero pantallas pequeñas */
.encabezado { background: #fff; border-bottom: 1px solid var(--borde); }
.barra {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-block: 1.25rem;
}
.marca {
  color: var(--oscuro);
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
}
nav { max-width: 100%; }
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu a {
  display: inline-block;
  padding: 0.6rem;
  border-radius: 0.4rem;
  text-decoration: none;
}
.menu a:hover { background: #eff6ff; }

/* 4. Presentación */
.presentacion { background: #e0e7ff; padding-block: 3rem; }
.hero { display: flex; flex-direction: column; gap: 2rem; }
.hero-texto, .resumen { min-width: 0; }
.hero-texto > p { max-width: 60ch; }
.etiqueta, .categoria { font-weight: 700; color: var(--primario); }
.resumen {
  padding: 1.5rem;
  border-radius: 1rem;
  background: #fff;
}
.resumen h2 { margin-top: 0; }
.resumen ul { padding-inline-start: 1.25rem; }

/* 5. Enlaces con apariencia de botón */
.boton {
  display: inline-block;
  max-width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid var(--primario);
  border-radius: 0.5rem;
  background: var(--primario);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
}
.boton:hover { background: var(--oscuro); border-color: var(--oscuro); }
.secundario { background: #fff; color: var(--primario); }
.secundario:hover { color: #fff; }

/* 6. Catálogo flexible */
.tarjetas { display: flex; flex-wrap: wrap; gap: 1.5rem; }
.tarjeta {
  flex: 1 1 18rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--borde);
  border-radius: 1rem;
  background: #fff;
  overflow-wrap: anywhere;
}
.tarjeta h3 { margin-top: 0; }
.duracion { font-weight: 700; }
.tarjeta .boton { margin-top: auto; align-self: flex-start; }

/* 7. Contacto y pie */
.contacto { background: #e2e8f0; }
.pie { background: var(--oscuro); color: #fff; padding-block: 1.5rem; }
.pie p { margin: 0; }

/* 8. Ampliaciones cuando el contenido dispone de más ancho */
@media (min-width: 48rem) {
  .barra {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hero { flex-direction: row; align-items: center; }
  .hero-texto { flex: 2 1 0; }
  .resumen { flex: 1 1 0; }
}

@media (min-width: 64rem) {
  .presentacion { padding-block: 5rem; }
}
```

### 12.4 Comprender el resultado

1. `body` utiliza una columna flexible y `main` crece para mantener el pie abajo en páginas cortas.
2. `.barra` y `.hero` comienzan como columnas y cambian a filas desde `48rem`.
3. `.tarjetas` permite saltos de línea; cada tarjeta parte de una base de `18rem`.
4. Las tarjetas también son contenedores flexibles verticales.
5. El margen superior automático de sus enlaces aprovecha el espacio libre y los alinea hacia abajo dentro de cada fila.
6. `max-width` limita el ancho del contenido; el porcentaje mantiene márgenes laterales.
7. El enlace de salto se muestra al recibir foco mediante teclado.

### 12.5 Verificación práctica

- Abrir `index.html` y comprobar que carga los estilos.
- Probar a 320, 375, 768, 1024 y 1440px de ancho, además de tamaños intermedios.
- Comprobar que los enlaces internos llevan a secciones existentes.
- Recorrer con Tab y activar enlaces con Enter.
- Aplicar zoom al 200% y comprobar que el contenido sigue disponible.
- Duplicar una tarjeta y observar cómo cambia la última fila.
- Añadir un título largo y una palabra extensa para detectar desbordamientos.

El catálogo es una interfaz estática: los enlaces consultan una sección informativa y no procesan una matrícula.

---

## 13. Ejercicios progresivos

### Ejercicio 1. Calcular el modelo de caja

Una caja tiene `width: 280px`, `padding: 16px`, `border: 3px solid` y `margin: 10px` por lado.

1. Calcule su ancho de borde a borde con `content-box`.
2. Calcule cuánto ocupa horizontalmente incluyendo márgenes.
3. Repita ambos cálculos con `border-box`.

**Entrega:** operaciones y explicación de qué incluye `width` en cada caso.

### Ejercicio 2. Alinear tres elementos

Cree un contenedor con tres cajas numeradas. Debe tener al menos `12rem` de alto.

1. Distribuya las cajas en fila.
2. Centre el grupo en ambos ejes.
3. Cambie a columna.
4. Explique qué eje controla ahora cada propiedad de alineación.

**Criterio:** comprender los ejes, sin centrar con márgenes manuales individuales.

### Ejercicio 3. Construir un menú

Cree navegación con Inicio, Productos, Promociones y Contacto.

- Use una lista y enlaces hacia secciones reales.
- Separe elementos con `gap`.
- Permita salto de línea.
- Muestre foco visible.

**Prueba:** reducir el navegador hasta 320px sin cortar enlaces.

### Ejercicio 4. Comparar el reparto de espacio

Cree dos cajas con base de `100px`, factores de crecimiento 1 y 2, en un contenedor con ancho interior de `500px`. Para el cálculo inicial, no use padding, bordes, márgenes ni gap.

1. Calcule el espacio libre.
2. Calcule el crecimiento de cada caja y sus anchos finales.
3. Añada `gap: 20px` y repita.

**Pregunta:** ¿por qué los anchos finales no mantienen una proporción exacta 1:2?

### Ejercicio 5. Catálogo de seis tarjetas

Construya seis tarjetas de libros con título, autor, género y enlace a información.

- Use `flex-wrap`.
- Base sugerida: `15rem`.
- Cada tarjeta debe crecer y reducirse.
- No use alturas fijas para el texto.

**Prueba:** una, dos y varias tarjetas por fila según el ancho disponible.

### Ejercicio 6. Dos columnas responsivas

Cree una página con artículo principal y panel complementario.

- En espacios pequeños: una columna, primero el artículo.
- Desde un punto de ruptura justificado: fila con factores 3 y 1.
- Separación: `1.5rem`.
- Ambos hijos deben poder encogerse sin desbordar.

**Entrega:** HTML, CSS y explicación del punto de ruptura.

### Ejercicio 7. Diagnosticar un desbordamiento

Parta de este CSS y una tarjeta con una dirección web muy larga:

```css
.fila-problema { display: flex; width: 100%; }
.panel-problema { width: 900px; padding: 40px; }
```

1. Inspeccione el modelo de caja.
2. Elimine el ancho fijo innecesario.
3. Permita reducción y ajuste de palabras.
4. Añada espaciado sin ocultar contenido.

**Restricción:** no resolverlo ocultando el scroll horizontal de `body`.

### Ejercicio 8. Experimentar con líneas

Prepare ocho cajas con base de `8rem`, contenedor de alto `30rem`, `wrap` y un ancho que produzca varias líneas.

- Compare `align-items: center` y `align-content: center`.
- Pruebe `align-content: space-between`.
- Quite la altura fija y explique qué cambia.

**Entrega:** observaciones sobre elementos frente a líneas.

### Ejercicio 9. Auditar accesibilidad

En el proyecto guiado:

1. Navegue solo con teclado.
2. Verifique el enlace de salto.
3. Aumente el texto y use zoom.
4. Explique por qué los enlaces de matrícula son enlaces y no botones.
5. Compruebe que no se utiliza `order` para alterar la lectura.

**Entrega:** lista de hallazgos y correcciones.

### Ejercicio 10. Extender el proyecto guiado

Añada tres cursos, una sección de preguntas frecuentes y un formulario visual de consulta con nombre, correo y mensaje.

- Asociar `label` con cada campo.
- Colocar campos en columna en móvil.
- Permitir dos campos en fila cuando exista espacio.
- Identificar claramente el formulario como demostración sin envío real.
- Usar `type="button"` para un botón de demostración si no hay procesamiento.

**Entrega:** archivos y explicación de las nuevas reglas responsivas.

---

## 14. Soluciones orientativas

Estas soluciones muestran un enfoque posible. Compare su resultado antes de copiarlas.

### Ejercicio 1

- `content-box`: 280 + 32 + 6 = **318px** de borde a borde.
- Con márgenes: 318 + 20 = **338px**.
- `border-box`: **280px** de borde a borde.
- Con márgenes: 280 + 20 = **300px**.
- Con `border-box`, el contenido mide 280 − 32 − 6 = **242px**.

### Ejercicio 2

```css
.grupo {
  display: flex;
  min-height: 12rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
/* Active esta regla para la segunda parte. */
.grupo { flex-direction: column; }
```

En columna y escritura horizontal habitual, `justify-content` centra verticalmente y `align-items` horizontalmente.

### Ejercicio 3

```css
.menu-ejercicio {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}
.menu-ejercicio a { display: inline-block; padding: 0.75rem; }
.menu-ejercicio a:focus-visible { outline: 3px solid #b45309; }
```

Los destinos se implementan con secciones cuyos `id` coincidan con cada `href`.

### Ejercicio 4

Sin separación quedan 500 − 200 = **300px** libres. Se añaden 100px a la primera caja y 200px a la segunda. Los anchos resultan **200px y 300px**.

Con `gap: 20px`, quedan 500 − 200 − 20 = **280px**. El crecimiento es aproximadamente 93.33px y 186.67px. Los anchos resultan **193.33px y 286.67px**.

La proporción se aplica al espacio adicional repartido, no al ancho final completo.

### Ejercicio 5

```css
.libros { display: flex; flex-wrap: wrap; gap: 1rem; }
.libro { flex: 1 1 15rem; min-width: 0; overflow-wrap: anywhere; }
```

La cantidad por fila depende del ancho interior, bases, separaciones y restricciones. Si necesita columnas estrictamente alineadas entre filas, considere Grid.

### Ejercicio 6

```css
.pagina { display: flex; flex-direction: column; gap: 1.5rem; }
.articulo, .complemento { min-width: 0; }
@media (min-width: 50rem) {
  .pagina { flex-direction: row; }
  .articulo { flex: 3 1 0; }
  .complemento { flex: 1 1 0; }
}
```

`50rem` es un ejemplo: debe justificarse con el ancho que necesita el contenido.

### Ejercicio 7

```css
*, *::before, *::after { box-sizing: border-box; }
.fila-problema { display: flex; width: 100%; gap: 1rem; }
.panel-problema {
  flex: 1 1 0;
  min-width: 0;
  padding: 1.25rem;
  overflow-wrap: anywhere;
}
```

Si existen otros hijos con anchos rígidos, también se deben revisar. No basta modificar un panel si otro provoca el desbordamiento.

### Ejercicio 8

`align-items` alinea las cajas dentro de cada línea; `align-content` distribuye las líneas. Al quitar la altura fija, puede desaparecer el espacio transversal extra y la distribución deja de apreciarse.

### Ejercicio 9

El foco debe ser visible y recorrer los enlaces en el orden del documento. Los enlaces de matrícula navegan hacia una sección; por eso la etiqueta `a` expresa la función adecuada. No debe perderse información al ampliar el contenido.

### Ejercicio 10

```html
<form aria-describedby="aviso-demo">
  <p id="aviso-demo">Demostración académica: este formulario no envía información.</p>
  <div class="campos">
    <div class="campo">
      <label for="nombre">Nombre</label>
      <input id="nombre" name="nombre" autocomplete="name">
    </div>
    <div class="campo">
      <label for="correo">Correo</label>
      <input id="correo" name="correo" type="email" autocomplete="email">
    </div>
  </div>
  <div class="campo">
    <label for="mensaje">Mensaje</label>
    <textarea id="mensaje" name="mensaje" rows="5"></textarea>
  </div>
  <button type="button">Demostración sin envío</button>
</form>
```

```css
.campos { display: flex; flex-direction: column; gap: 1rem; }
.campo { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; min-width: 0; }
input, textarea { width: 100%; padding: 0.75rem; font: inherit; }
@media (min-width: 40rem) {
  .campos { flex-direction: row; }
  .campos .campo { flex: 1 1 0; }
}
```



##  Hoja de consulta rápida

| Necesidad | Regla orientativa |
|---|---|
| Activar Flexbox | `display: flex` |
| Organizar verticalmente | `flex-direction: column` |
| Permitir varias líneas | `flex-wrap: wrap` |
| Separar elementos | `gap: 1rem` |
| Centrar en el eje principal | `justify-content: center` |
| Centrar en el eje transversal | `align-items: center` |
| Distribuir líneas | `align-content: space-between` con espacio sobrante |
| Ajustar alineación individual | `align-self: center` |
| Tarjetas que crecen y se reducen | `flex: 1 1 16rem` |
| Permitir reducción de contenido largo | `min-width: 0` |
| Ajustar palabras extensas | `overflow-wrap: anywhere` |
| Limitar ancho de lectura | `max-width: 72rem` |
| Centrar un contenedor de ancho limitado | `margin-inline: auto` |
| Imágenes fluidas | `max-width: 100%; height: auto` |
| Ampliar un diseño mobile first | `@media (min-width: 48rem)` |

**Recordatorio:** las reglas actúan dentro de un contexto. Antes de copiar una propiedad, identifique el contenedor, sus hijos, el eje y el espacio disponible.

---

##  Fuentes de consulta

Documentación técnica para ampliar y verificar los conceptos:

- MDN Web Docs. [El modelo de caja](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model).
- MDN Web Docs. [Conceptos básicos de Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).
- MDN Web Docs. [Flexbox: aprendizaje práctico](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox).
- MDN Web Docs. [Diseño responsivo](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).
- W3C. [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/).

Los ejemplos y actividades de esta guía son material didáctico original. Las fuentes se incluyen como documentación de referencia.
