# Diario de viajes — Blog personal

Blog personal de viajes desarrollado con **HTML, CSS y JavaScript puro** (sin
frameworks ni librerías externas). Todo el funcionamiento ocurre en el lado del
cliente: no requiere backend ni base de datos. Las entradas nuevas y los
comentarios se guardan en el navegador mediante `localStorage`.

Actividad 1 — Desarrollo de Aplicaciones en Red.

## Cómo lanzar la aplicación

No requiere instalación ni dependencias. Hay dos formas de abrirlo:

1. **Abrir directamente:** hacer doble clic en `index.html`, o abrirlo desde el
   navegador (`Archivo > Abrir`).
2. **Servidor local (recomendado):** desde la carpeta del proyecto ejecutar uno
   de estos comandos y abrir la URL que indique (por ejemplo `http://localhost:8000`):

   ```bash
   # Con Python 3
   python3 -m http.server 8000

   # Con Node.js
   npx serve
   ```

El punto de entrada de la aplicación es **`index.html`**.

## Funcionalidades

- **Página principal** (`index.html`): listado de entradas con miniatura y
  resumen, buscador por texto y filtro por país.
- **Detalle de entrada** (`entrada.html`): muestra la entrada completa y permite
  agregar comentarios (guardados en `localStorage`).
- **Nueva entrada** (`nueva.html`): formulario con validación para publicar
  entradas nuevas, que también se guardan en `localStorage`.

## Estructura del proyecto

```
.
├── index.html      # Página principal (listado + buscador + filtro)
├── entrada.html    # Detalle de una entrada + comentarios
├── nueva.html      # Formulario para crear una entrada
├── datos.js        # Datos iniciales y funciones de localStorage
├── script.js       # Lógica de la página principal
├── entrada.js      # Lógica del detalle y los comentarios
├── nueva.js        # Lógica del formulario de nueva entrada
├── style.css       # Estilos compartidos por todas las páginas
└── img/            # Fotos de las entradas
```

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6, sin frameworks)
- `localStorage` para persistencia en el navegador

## Autora

Shirley Ortiz — 2026
