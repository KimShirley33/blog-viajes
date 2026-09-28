// Página principal

const listaEntradas = document.querySelector("#lista-entradas");
const buscador = document.querySelector("#buscador");
const filtro = document.querySelector("#filtro");
const sinResultados = document.querySelector("#sin-resultados");

// Funcion Crear Resumen
function crearResumen(entrada) {
  const articulo = document.createElement("article");
  articulo.dataset.pais = entrada.pais;
  articulo.dataset.texto = (entrada.titulo + " " + entrada.resumen + " " + entrada.contenido.join(" ")).toLowerCase();

  articulo.innerHTML =
    '<img class="imagen miniatura" src="" alt="">' +
    '<h3><a class="enlace-titulo" href=""></a></h3>' +
    '<p class="meta"></p>' +
    '<p class="resumen"></p>' +
    '<a class="leer" href="">Leer entrada completa</a>';

  // El texto se pone con textContent (no con innerHTML) por seguridad
  const direccion = "entrada.html?id=" + entrada.id;
  const imagen = articulo.querySelector(".imagen");
  imagen.src = fotoDe(entrada);
  imagen.alt = "Foto de " + entrada.titulo;
  imagen.onerror = function () {
    imagen.hidden = true; // si la foto no existe, no se muestra el icono roto
  };
  articulo.querySelector(".enlace-titulo").textContent = entrada.titulo;
  articulo.querySelector(".enlace-titulo").href = direccion;
  articulo.querySelector(".meta").textContent = entrada.fecha + " · País: " + entrada.pais;
  articulo.querySelector(".resumen").textContent = entrada.resumen;
  articulo.querySelector(".leer").href = direccion;
  articulo.querySelector(".leer").setAttribute("aria-label", "Leer entrada completa: " + entrada.titulo);

  return articulo;
}

// Función Buscar
function filtrar() {
  const texto = buscador.value.trim().toLowerCase();
  const pais = filtro.value;
  let visibles = 0;

  listaEntradas.querySelectorAll("article").forEach(function (articulo) {
    const coincideTexto = articulo.dataset.texto.includes(texto);
    const coincidePais = pais === "todos" || articulo.dataset.pais === pais;
    articulo.hidden = !(coincideTexto && coincidePais);
    if (!articulo.hidden) {
      visibles++;
    }
  });

  sinResultados.hidden = visibles > 0;
}

buscador.addEventListener("input", filtrar);
filtro.addEventListener("change", filtrar);

//  Inicio
obtenerEntradas().forEach(function (entrada) {
  listaEntradas.appendChild(crearResumen(entrada));
});
filtrar();
