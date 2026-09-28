// Página de detalle: muestra una entrada completa y sus comentarios

const detalle = document.querySelector("#detalle");
const noEncontrada = document.querySelector("#no-encontrada");
const listaComentarios = document.querySelector("#lista-comentarios");
const formComentario = document.querySelector("#form-comentario");

// El id viene en la dirección: entrada.html?id=3
const id = Number(new URLSearchParams(window.location.search).get("id"));
const entrada = obtenerEntradas().find(function (e) {
  return e.id === id;
});

const comentarios = leer("comentarios", {});

function pintarComentarios() {
  listaComentarios.innerHTML = "";
  const lista = comentarios[id] || [];
  if (lista.length === 0) {
    const vacio = document.createElement("li");
    vacio.textContent = "Todavía no hay comentarios.";
    listaComentarios.appendChild(vacio);
    return;
  }
  lista.forEach(function (c) {
    const li = document.createElement("li");
    const nombre = document.createElement("strong");
    nombre.textContent = c.nombre + ": ";
    li.appendChild(nombre);
    li.appendChild(document.createTextNode(c.texto));
    listaComentarios.appendChild(li);
  });
}

if (!entrada) {
  // Si el id no existe, se muestra un aviso
  detalle.hidden = true;
  noEncontrada.hidden = false;
} else {
  document.title = entrada.titulo + " - Diario de viajes";

  const imagen = document.querySelector("#imagen");
  imagen.src = fotoDe(entrada);
  imagen.alt = "Foto de " + entrada.titulo;
  imagen.onerror = function () {
    imagen.hidden = true; // si la foto no existe, no se muestra el icono roto
  };
  document.querySelector("#titulo-entrada").textContent = entrada.titulo;
  document.querySelector("#meta").textContent = entrada.fecha + " · País: " + entrada.pais;

  const contenido = document.querySelector("#contenido");
  entrada.contenido.forEach(function (texto) {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    contenido.appendChild(parrafo);
  });

  pintarComentarios();

  formComentario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nombre = document.querySelector("#c-nombre").value.trim();
    const texto = document.querySelector("#c-texto").value.trim();
    if (nombre === "" || texto === "") {
      return;
    }
    if (!comentarios[id]) {
      comentarios[id] = [];
    }
    comentarios[id].push({ nombre: nombre, texto: texto });
    guardar("comentarios", comentarios);
    pintarComentarios();
    formComentario.reset();
  });
}
