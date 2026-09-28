# Diario de viajes — Blog personal

Este es el blog de viajes que hice para la Actividad 1 de Desarrollo de Aplicaciones en Red. Está hecho con HTML, CSS y JavaScript, sin frameworks ni librerías externas. Todo funciona en el navegador: no hay backend ni base de datos. Las entradas nuevas y los comentarios se guardan con `localStorage`.

## Cómo verlo

No hace falta instalar nada. Hay dos formas:

1. Abrir `index.html` directamente con doble clic. Para probar suele bastar, aunque a veces el navegador se pone raro con algunas rutas.
2. Levantar un servidor local. Yo usé Python, pero también sirve Node:

```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js
npx serve
```

Después se abre la URL que indique, por ejemplo `http://localhost:8000`.

Se empieza por `index.html`.

## Qué se puede hacer

- En `index.html` está el listado de entradas. Cada una muestra una miniatura y un resumen. También hay un buscador por texto y un filtro por país.
- En `entrada.html` se ve la entrada completa y se pueden dejar comentarios. Los comentarios quedan guardados en `localStorage`.
- En `nueva.html` hay un formulario para publicar una entrada. Tiene validación y lo que se crea también se guarda en `localStorage`.

## Archivos del proyecto

```
.
├── index.html      # listado, buscador y filtro
├── entrada.html    # detalle de la entrada y comentarios
├── nueva.html      # formulario para crear entradas
├── datos.js        # datos iniciales y funciones de localStorage
├── script.js       # lógica de la página principal
├── entrada.js      # lógica del detalle y los comentarios
├── nueva.js        # lógica del formulario
├── style.css       # estilos compartidos
└── img/            # fotos de las entradas
```

## Tecnologías

HTML5, CSS3 y JavaScript. Nada más. Uso `localStorage` para que los datos no se pierdan al recargar, aunque si se limpia el almacenamiento del navegador se borra todo. Es la limitación de no tener backend.

## Notas

- No hay login ni usuarios. Cualquiera que use el navegador puede añadir entradas o comentarios.
- El buscador y el filtro funcionan sobre los datos que ya están cargados.
- Si abres el archivo directamente y algo no carga, prueba con el servidor local.

## Cosas que dejé pendientes

- No se pueden editar ni borrar entradas desde la interfaz.
- Los comentarios no tienen moderación.
- Me hubiera gustado añadir más fotos y quizás un mapa, pero para la actividad lo dejé así.

Autora: Shirley Ortiz — 2026
