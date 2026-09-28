// Página para publicar una entrada nueva

const formEntrada = document.querySelector("#form-entrada");
const mensaje = document.querySelector("#mensaje");

formEntrada.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = document.querySelector("#titulo").value.trim();
  const resumen = document.querySelector("#resumen").value.trim();
  const texto = document.querySelector("#texto").value.trim();
  const pais = document.querySelector("#pais").value;

  if (titulo.length < 3 || resumen.length < 10 || texto.length < 10) {
    mensaje.textContent = "Escribe un título de al menos 3 letras, y un resumen y un texto de al menos 10.";
    return;
  }

  // Cada línea del texto se convierte en un párrafo
  const parrafos = texto.split("\n").filter(function (linea) {
    return linea.trim() !== "";
  });

  const nueva = {
    id: Date.now(),
    titulo: titulo,
    fecha: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
    pais: pais,
    resumen: resumen,
    contenido: parrafos
  };

  const entradasNuevas = leer("entradasNuevas", []);
  entradasNuevas.unshift(nueva);
  guardar("entradasNuevas", entradasNuevas);

  // Después de publicar, se muestra la entrada completa
  window.location.href = "entrada.html?id=" + nueva.id;
});
